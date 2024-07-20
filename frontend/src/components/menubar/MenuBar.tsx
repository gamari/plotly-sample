import React from "react";

import { PopoverButton } from "../popover/PopoverButton";

const fileMenu = [
  { name: "新規作成", action: () => alert("作成処理") },
  { name: "ファイルを開く", action: () => alert("開く処理") },
];

const editMenu = [
  { name: "元に戻す", action: () => alert("元に戻す処理") },
  { name: "やり直し", action: () => alert("やり直し処理") },
];

export const MenuBar: React.FunctionComponent = () => {
  return (
    <div className="bg-sky-600 flex space-x-4">
      <PopoverButton label="ファイル" menu={fileMenu} />
      <PopoverButton label="編集" menu={editMenu} />
    </div>
  );
};
