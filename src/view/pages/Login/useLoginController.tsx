import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../../../app/services/authService";
import { SigninParams } from "../../../app/services/authService/signin";
import toast from "react-hot-toast";
import { UseAuth } from "../../../app/hooks/useAuth";

const schema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "Senha deve conter 8 dígitos"),
});

type FormData = z.infer<typeof schema>;

export function UseLoginController() {
  const {
    register,
    handleSubmit: hookformHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const { signin } = UseAuth();

  const handleSubmit = hookformHandleSubmit(async (data) => {
    try {
      const { token } = await mutateAsync(data);

      signin(token);
    } catch {
      toast.error("Credenciais inválidas!");
    }
  });

  return { register, handleSubmit, errors, isPending };
}
