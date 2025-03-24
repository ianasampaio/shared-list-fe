import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { authService } from "../../../app/services/authService";
import { SignupParams } from "../../../app/services/authService/signup";
import { UseAuth } from "../../../app/hooks/useAuth";

const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
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

export function UseRegisterController() {
  const {
    handleSubmit: hookformHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  });

  const { signin } = UseAuth();

  const handleSubmit = hookformHandleSubmit(async (data) => {
    try {
      const { token } = await mutateAsync(data);

      signin(token);
    } catch {
      toast.error("Ocorreu um erro ao criar a sua conta!");
    }
  });

  return { register, handleSubmit, errors, isPending };
}
