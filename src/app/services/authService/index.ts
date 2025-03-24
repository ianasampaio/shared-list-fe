import { forgotPassword } from "./forgotPassword";
import { resetPassword } from "./resetPassword";
import { signin } from "./signin";
import { signup } from "./signup";

export const authService = {
  signup,
  signin,
  forgotPassword,
  resetPassword,
};
