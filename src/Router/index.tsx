import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Login } from "../view/pages/Login";
import { Register } from "../view/pages/Register";
import { Home } from "../view/pages/Home";
import { AuthLayout } from "../view/layouts/AuthLayout";
import { ForgotPassword } from "../view/pages/ForgotPassword";
import { ResetPassword } from "../view/pages/ResetPassword";
import { EmailSentConfirmation } from "../view/pages/ForgotPassword/emailSentConfirmation";
import { DashboardLayout } from "../view/layouts/DashboardLayout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/email-confirmation"
              element={<EmailSentConfirmation />}
            />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
