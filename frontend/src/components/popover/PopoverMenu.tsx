import React from "react";

interface Props {
  menu: { name: string; action: () => void }[];
  onClose: () => void;
}

export const PopoverMenu: React.FC<Props> = ({ menu, onClose }) => {
  return (
    <>
      {menu.map((action) => (
        <button
          key={action.name}
          className="block w-full text-left p-2 hover:bg-gray-200 min-w-fit"
          onClick={() => {
            action.action();
            onClose();
          }}
        >
          {action.name}
        </button>
      ))}
    </>
  );
};
