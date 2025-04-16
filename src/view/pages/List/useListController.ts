import { useState } from "react";

interface List {
  id: string;
  name: string;
  ownerId: string;
  collaborators?: {
    name: string;
    email: string;
  }[];
  items?: {
    id: number;
    description: string;
    modifiedBy: string;
    status: "PENDING" | "PURCHASED";
  }[];
  createdAt: string;
  updatedAt: string;
}

export function useListController() {
  const [list, setList] = useState<List>({
    id: "472dc5ed-c226-473d-95a3-31b1ee0cb7fe",
    name: "Lista de compras",
    ownerId: "d629547d-ad59-4f33-96f1-1625e638daf8",
    createdAt: "2025-02-21T11:28:49.378Z",
    updatedAt: "2025-02-21T11:28:49.378Z",
    collaborators: [
      { name: "iana", email: "iana.sampaiodev@gmail.com" },
      { name: "iana", email: "aiana.sampaiodev@gmail.com" },
      { name: "iana", email: "biana.sampaiodev@gmail.com" },
    ],
    items: [
      {
        id: 1,
        description: "banana",
        modifiedBy: "iana sampaio",
        status: "PENDING",
      },
      {
        id: 2,
        description: "maçã",
        modifiedBy: "joão silva",
        status: "PURCHASED",
      },
      {
        id: 3,
        description: "laranja",
        modifiedBy: "ana costa",
        status: "PENDING",
      },
    ],
  });

  function handleUpdateItemStatus(
    listId: string,
    itemId: number,
    checked: boolean
  ) {
    if (list.id === listId) {
      const updatedList: List = {
        ...list,
        items: list.items?.map((item) =>
          item.id === itemId
            ? {
                ...item,
                status: checked ? "PURCHASED" : "PENDING",
              }
            : item
        ),
      };
      setList(updatedList);
    }
  }

  return {
    isLoading: false,
    list,
    handleUpdateItemStatus,
  };
}
