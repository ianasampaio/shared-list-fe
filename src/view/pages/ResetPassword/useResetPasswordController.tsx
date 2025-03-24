import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ResetPasswordParams } from "../../../app/services/authService/resetPassword";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../../app/services/authService";

const schema = z
  .object({
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "Senha deve conter 8 dígitos"),
    confirmPassword: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "Senha deve conter 8 dígitos"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export function UseResetPasswordController() {
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const token = urlParams.get("token");

  const {
    register,
    handleSubmit: hookformHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: ResetPasswordParams) => {
      return authService.resetPassword(data);
    },
  });

  const handleSubmit = hookformHandleSubmit(async (data) => {
    if (!token) {
      console.error("Token não encontrado");
      return;
    }

    const params: ResetPasswordParams = {
      token: token,
      newPassword: data.password,
      newPasswordConfirmation: data.confirmPassword,
    };

    try {
      await mutateAsync(params);
      navigate("/login");
    } catch {
      console.error("Erro ao redefinir a senha");
    }
  });

  return { register, handleSubmit, errors, isPending };
}
