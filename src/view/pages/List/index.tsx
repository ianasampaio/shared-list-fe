import { Link } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { Item } from "./components/Item";
import { ListOptions } from "./components/ListOptions";
import { useListController } from "./useListController";
import { ArrowLeft } from "lucide-react";

export function List() {
  const { isLoading, list, handleUpdateItemStatus } = useListController();
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
            <div className="flex items-center md:p-2.5">
              <div className="hover:bg-bg-dark hover:rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                <Link to={"/login"}>
                  <ArrowLeft className="flex flex-row justify-start w-4 h-4" />
                </Link>
              </div>

              <div className="flex-1 flex justify-center">
                <strong className="text-text-light text-lg">{list.name}</strong>
              </div>

              <ListOptions />
            </div>

            <div className="flex flex-col gap-2 md:ml-24 md:mr-24 mt-4 ml2 mr-2 overflow-y-auto overflow-x-hidden custom-scrollbar md:p-2.5">
              {list.items &&
                list.items.map((item) => (
                  <Item
                    key={item.id}
                    description={item.description}
                    modifiedBy={item.modifiedBy}
                    checked={item.status === "PURCHASED"}
                    onCheckedChange={(checked) =>
                      handleUpdateItemStatus(list.id, item.id, checked)
                    }
                  />
                ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
