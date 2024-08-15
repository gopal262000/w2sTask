import request from "../requests";
import { CurrentUserProps } from "../types";

export default function currentUserService(): Promise<CurrentUserProps> {
  return request("/auth/me");
}
