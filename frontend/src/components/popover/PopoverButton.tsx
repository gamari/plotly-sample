import React, { useState } from "react";
import { Popover } from "./Popover";
import { PopoverMenu } from "./PopoverMenu";

interface Props {
  label: string;
  menu: { name: string; action: () => void }[];
}

export const PopoverButton: React.FC<Props> = ({ label, menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 text-white hover:text-sky-600 hover:bg-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </button>
      <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopoverMenu menu={menu} onClose={() => setIsOpen(false)} />
      </Popover>
    </div>
  );
};
