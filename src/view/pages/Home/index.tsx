import { UseAuth } from "../../../app/hooks/useAuth";
import { Button } from "../../components/Button";

export function Home() {
  const { signout } = UseAuth();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold mb-4">
        Bem-vindo(a) ao Shared List!
      </h1>
      <Button onClick={signout} className="w-24 mt-8">
        Sair
      </Button>
    </div>
  );
}
