import request from "../requests";
import { SuccessLoginProps } from "../types";

export default function loginService({
  data,
}: {
  data: { username: string; password: string };
}): Promise<SuccessLoginProps> {
  return request("/auth/login", { method: "POST", data });
}
