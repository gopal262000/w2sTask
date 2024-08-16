import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUserProps } from "../types";
import currentUserService from "./service";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import { currentUser } from "../features/authSlice";

const CurrentUserProvider = () => {
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector(
    (state: { auth: CurrentUserProps }) => state.auth
  ); // Global Authenticated user data
  const dispatch = useDispatch(); // Global State updater function

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUserData = await currentUserService();
        if (currentUserData.username) {
          dispatch(currentUser(currentUserData));
        } else {
          // If the user is not authenticated, navigate to the login page
          if (location.pathname !== "/login") return navigate('/login');
        }
      } catch (err) {
        // Navigate the user back to the login page if the user is not authenticated
        if (location.pathname !== "/login") return navigate('/login');
      } finally {
        setLoading(false); // Set loading to false once the check is complete
      }
    };

    fetchCurrentUser();
  }, [dispatch, location.pathname, navigate]);

  if (loading) {
    return <></>; // Show a loading state while checking authentication
  }

  return <Outlet />;
};

export default CurrentUserProvider;
