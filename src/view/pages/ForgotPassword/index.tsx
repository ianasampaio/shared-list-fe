import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { UseForgotPasswordController } from "./useForgotPasswordController";

export function ForgotPassword() {
  const { register, handleSubmit, errors, isPending } =
    UseForgotPasswordController();

  return (
    <>
      <Link to={"/login"}>
        <ArrowLeft className="flex flex-row justify-start" />
      </Link>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="mt-8 text-2xl font-bold text-text-dark tracking[-1px]">
          Redefinir senha
        </h1>
        <p className="text-text-dark ">
          Digite o seu e-mail que vamos enviar um link para você criar uma nova
          senha
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register("email")}
        />

        <Button className="mt-5" type="submit" isPendind={isPending}>
          Enviar e-mail
        </Button>
      </form>
    </>
  );
}
