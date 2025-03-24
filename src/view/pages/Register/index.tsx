import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { UseRegisterController } from "./useRegisterController";

export function Register() {
  const { register, handleSubmit, errors, isPending } = UseRegisterController();
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <Logo />
        <h1 className="mt-8 text-2xl font-bold text-text-dark tracking[-1px]">
          Crie sua conta
        </h1>
        <p className="space-x-2">
          <span className="text-text-light tracking-[-0.5px]">
            Já possui uma conta?
          </span>
          <Link
            className="text-link tracking-[-0.5px] font-medium"
            to={"/login"}
          >
            Fazer Login
          </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input
          placeholder="Nome"
          error={errors.name?.message}
          {...register("name")}
        />

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

        <Button className="mt-2" type="submit" isPendind={isPending}>
          Criar conta
        </Button>
      </form>
    </>
  );
}
