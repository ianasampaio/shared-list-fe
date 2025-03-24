import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export function EmailSentConfirmation() {
  const navigate = useNavigate();
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="mt-8 text-2xl font-bold text-text-dark tracking[-1px]">
          Enviamos o link para você!
        </h1>
        <p className="text-text-dark ">
          Confira se a mensagem chegou na sua caixa de entrada
        </p>
      </header>

      <Button className="mt-5 w-full" onClick={() => navigate("/login")}>
        Ok
      </Button>
    </>
  );
}
