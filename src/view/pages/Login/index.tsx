import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { UseLoginController } from "./useLoginController";

export function Login() {
  const { register, handleSubmit, errors, isPending } = UseLoginController();
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <Logo />
        <h1 className="mt-8 text-2xl font-bold text-text-dark tracking[-1px]">
          Entre em sua conta
        </h1>
        <p className="space-x-2">
          <span className="text-text-light tracking-[-0.5px]">
            Novo por aqui?
          </span>
          <Link
            className="text-link tracking-[-0.5px] font-medium"
            to={"/register"}
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register("password")}
        />

        <Link
          className="text-sm text-link hover:underline tracking-[-0.5px] flex flex-row justify-end my-[-8px]"
          to={"/forgot-password"}
        >
          Esqueceu a senha?
        </Link>

        <Button className="mt-5" type="submit" isPendind={isPending}>
          Entrar
        </Button>
      </form>
    </>
  );
}
