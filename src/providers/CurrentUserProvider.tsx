import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUserProps } from "../types";
import currentUserService from "./service";
import { Outlet, useLocation, useNavigate } from "react-router";
import { currentUser } from "../features/authSlice";

const CurrentUserProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector(
    (state: { auth: CurrentUserProps }) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUserData = await currentUserService();
        if (currentUserData.username) {
          dispatch(currentUser(currentUserData));
        }
      } catch (err) {
        navigate("/login");
      }
    };

    fetchCurrentUser();
  }, [dispatch, location.pathname, navigate]);

  if (!(userData && userData.username)) {
    navigate("/login");
  }

  return <>{children}</>;
};

export default CurrentUserProvider;
