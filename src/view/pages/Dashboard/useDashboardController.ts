import { useState } from "react";

interface List {
  id: string;
  name: string;
  ownerId: string;
  collaborators?: {
    name: string;
    email: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

export function useDashboardController() {
  const [lists] = useState<List[]>([
    {
      id: "472dc5ed-c226-473d-95a3-31b1ee0cb7fe",
      name: "lista de compras 2",
      ownerId: "d629547d-ad59-4f33-96f1-1625e638daf8",
      createdAt: "2025-02-21T11:28:49.378Z",
      updatedAt: "2025-02-21T11:28:49.378Z",
      collaborators: [
        { name: "iana", email: "iana.sampaiodev@gmail.com" },
        { name: "iana", email: "aiana.sampaiodev@gmail.com" },
        { name: "iana", email: "biana.sampaiodev@gmail.com" },
      ],
    },
    {
      id: "85d5c82b-ce4b-41ca-957b-f147a0c95e97",
      name: "lista de compras 1 updated",
      ownerId: "d629547d-ad59-4f33-96f1-1625e638daf8",
      createdAt: "2025-02-20T18:21:48.276Z",
      updatedAt: "2025-02-21T11:30:38.825Z",
      collaborators: [{ name: "iana", email: "ciana.sampaiodev@gmail.com" }],
    },
  ]);

  return {
    isLoading: false,
    lists,
  };
}
