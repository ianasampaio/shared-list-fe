import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { UseResetPasswordController } from "./useResetPasswordController";

export function ResetPassword() {
  const { register, handleSubmit, errors, isPending } =
    UseResetPasswordController();

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <Logo />
        <h1 className="mt-8 text-2xl font-bold text-text-dark tracking[-1px]">
          Redefinir senha
        </h1>
        <p className="text-text-dark ">
          Digite sua nova senha e confirme para redefinir o acesso à sua conta.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register("password")}
        />
        <Input
          type="password"
          placeholder="Confirmar senha"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <Button className="mt-5" type="submit" isPendind={isPending}>
          Redefinir senha
        </Button>
      </form>
    </>
  );
}
