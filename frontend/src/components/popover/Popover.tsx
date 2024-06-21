import React, { FunctionComponent, useRef } from "react";
import { useClickAway } from "react-use";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Popover: FunctionComponent<Props> = ({
  isOpen,
  onClose,
  children,
}) => {
  const ref = useRef(null);

  useClickAway(ref, onClose);

  if (!isOpen) return null;

  return (
    <div ref={ref} className="absolute bg-white shadow-md p-4 mt-2 rounded w-[130px] border border-gray-400">
      {children}
    </div>
  );
};
