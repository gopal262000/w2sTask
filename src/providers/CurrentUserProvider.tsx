import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUserProps } from "../types";
import currentUserService from "./service";
import { Outlet, useLocation, useNavigate } from "react-router";
import { currentUser } from "../features/authSlice";
import useSWR from "swr";

/**
 * This component is used to authenticate the current user
 *
 * - If the user is not authenticated then this component will redirect to the login page
 * @returns {Component} - allows the nested components to be rendered
 */

const CurrentUserProvider = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch(); // Global State updater function

  const { data, error } = useSWR({}, currentUserService);

  useEffect(() => {
    if (data && data.username) {
      dispatch(currentUser(data));
    }
    if (error) {
      if (location.pathname !== "/login") navigate("/login");
    }
  }, [data, dispatch, error, location.pathname, navigate]); // whenever the page page changes we are authenticating the user

  // Navigate the user back to the login page if the user is not authenticated
  if (!(data && data.username)) {
    if (location.pathname !== "/login") navigate("/login");
  }

  // If authenticated continue with remaining components
  return <Outlet />;
};

export default CurrentUserProvider;
