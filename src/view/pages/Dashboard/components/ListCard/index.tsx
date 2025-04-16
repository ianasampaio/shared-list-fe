import AvatarGroup from "react-avatar-group";

interface ListCardProps {
  name: string;
  collaborators?: {
    name: string;
    email: string;
  }[];
}

export function ListCard({ name, collaborators }: ListCardProps) {
  return (
    <div className="p-4 rounded-2xl bg-border-shadow h-24 md:hover:bg-text-dark/15 md:hover:scale-105 transition-transform duration-300 md:hover:overflow-visible cursor-pointer">
      <div className="flex items-center justify-between">
        <span className="font-medium text-text-light tracking-[-0.5px]">
          {name}
        </span>
      </div>

      {collaborators && collaborators.length > 0 && (
        <div className="flex items-center justify-start gap-1 mt-4">
          <AvatarGroup
            avatars={collaborators?.map((c) => c.email) ?? []}
            initialCharacters={1}
            max={3}
            size={20}
            displayAllOnHover
            shadow={2}
          />

          {collaborators.length < 2 && (
            <small className="font-medium text-text-light tracking-[-0.5px]">
              {collaborators[0].email}
            </small>
          )}
        </div>
      )}
    </div>
  );
}
