import { httpClient } from "../httpClient";

export interface ForgotPasswordParams {
  email: string;
}

interface ForgotPasswordResponse {
  sentTo: string;
}

export async function forgotPassword(params: ForgotPasswordParams) {
  const { data } = await httpClient.post<ForgotPasswordResponse>(
    "/auth/forgot-password",
    params
  );

  return data;
}
