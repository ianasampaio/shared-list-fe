import { httpClient } from "../httpClient";

export interface ResetPasswordParams {
  token: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

export async function resetPassword(params: ResetPasswordParams) {
  const { data } = await httpClient.post("/auth/update-password", params);

  return data;
}
