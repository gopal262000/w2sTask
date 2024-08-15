import request from "../requests";
import { CurrentUserProps } from "../types";

/**
 * Service to get the current user
 * @returns {object} - Authenticated user data
 */
export default function currentUserService(): Promise<CurrentUserProps> {
  return request("/auth/me");
}
