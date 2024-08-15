import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUserProps } from "../types";
import currentUserService from "./service";
import { useLocation, useNavigate } from "react-router";
import { currentUser } from "../features/authSlice";

/**
 * This component is used to authenticate the current user
 * 
 * - If the user is not authenticated then this component will redirect to the login page
 * @returns {Component} - allows the nested components to be rendered
 */

const CurrentUserProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector(
    (state: { auth: CurrentUserProps }) => state.auth
  ); // Global Authenticated user data
  const dispatch = useDispatch(); // Global State updater function

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        // Check and hold the state in global state if the user is authenticated
        const currentUserData = await currentUserService();
        if (currentUserData.username) {
          dispatch(currentUser(currentUserData));
        }
      } catch (err) {
        // Navigate the user back to the login page if the user is not authenticated
        navigate("/login");
      }
    };
    
    fetchCurrentUser();
  }, [dispatch, location.pathname, navigate]);// whenever the page page changes we are authenticating the user
  
  // Navigate the user back to the login page if the user is not authenticated
  if (!(userData && userData.username)) {
    navigate("/login");
  }

  // If authenticated continue with remaining components
  return <>{children}</>;
};

export default CurrentUserProvider;
