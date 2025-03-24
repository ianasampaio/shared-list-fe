import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { ForgotPasswordParams } from "../../../app/services/authService/forgotPassword";
import { authService } from "../../../app/services/authService";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Informe um e-mail válido"),
});

type FormData = z.infer<typeof schema>;

export function UseForgotPasswordController() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit: hookformHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: ForgotPasswordParams) => {
      return authService.forgotPassword(data);
    },
  });

  const handleSubmit = hookformHandleSubmit(async (data) => {
    try {
      await mutateAsync(data);
      navigate("/email-confirmation");
    } catch {
      toast.error("Erro ao enviar e-mail!");
    }
  });

  return { register, handleSubmit, errors, isPending };
}
