import { useModal } from "../../../app/hooks/useModal";
import emptyStateImage from "../../../assets/empty-state.svg";
import { Spinner } from "../../components/Spinner";
import { Fab } from "./components/Fab";
import { ListCard } from "./components/ListCard";
import { NewListModal } from "./components/Modals/NewListModal";
import { useDashboardController } from "./useDashboardController";
import { Link } from "react-router-dom";

export function Dashboard() {
  const newListModal = useModal();
  const { isLoading, lists } = useDashboardController();
  return (
    <div className="flex flex-col gap-4 h-screen max-h-[806px] ">
      <main className="translate-0 bg-bg-light rounded-2xl md:p-6 px-4 py-6 flex flex-1 flex-col overflow-hidden">
        {isLoading && (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner className="text-bg-dark/70 fill-text-light/70" />
          </div>
        )}

        {!isLoading && (
          <>
            {lists.length === 0 && (
              <div className="flex flex-col items-center justify-center flex-1 gap-4">
                <img src={emptyStateImage} alt="Empty State" />
                <p className="text-text-light">
                  Não encontramos nenhuma lista!
                </p>
              </div>
            )}
            {lists.length > 0 && (
              <>
                <div className="flex items-center justify-between md:p-2.5">
                  <strong className="text-text-light text-lg items-center">
                    Minhas listas
                  </strong>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-y-auto overflow-x-hidden custom-scrollbar md:p-2.5">
                  {lists.map((list) => (
                    <Link to={`/list/${list.id}`}>
                      <ListCard
                        name={list.name}
                        collaborators={list.collaborators}
                      />
                    </Link>
                  ))}

                  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-transparent from-transparent via-transparent/20 to-bg-light backdrop-blur-sm"></div>
                </div>
              </>
            )}
          </>
        )}

        <NewListModal open={newListModal.isOpen} onClose={newListModal.close} />
        <Fab onClick={newListModal.open} />
      </main>
    </div>
  );
}
