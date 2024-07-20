import { useState } from "react";
import { MenuBar } from "../components/menubar/MenuBar";
import { BarChart } from "../components/chart/BarChart";
import { ScatterChart } from "../components/chart/ScatterChart";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const [mode, setMode] = useState<"bar" | "scatter" | "splom">();

  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <MenuBar />
      <div className="flex flex-row container mt-6 mx-auto">
        <div className="flex flex-col gap-6">
          {/* Chartサンプル */}
          <div className="p-6 border rounded-lg">
            <div className="flex flex-col gap-4">
              <div
                className={`border px-3 py-2 rounded-md cursor-pointer ${
                  mode == "bar" && "bg-gray-600 text-white"
                }`}
                onClick={() => setMode("bar")}
              >
                棒グラフ
              </div>
              <div
                className={`border px-3 py-2 rounded-md cursor-pointer ${
                  mode == "scatter" && "bg-gray-600 text-white"
                }`}
                onClick={() => setMode("scatter")}
              >
                散布図
              </div>
            </div>
          </div>

          {/* 国際化サンプル */}
          <div className="p-6 border rounded-lg">
            <div className="font-bold">国際化サンプル</div>
            <div className="my-4">国際化文字: {t("test1")}</div>

            <div className="flex flex-row gap-3">
              <button
                onClick={() => changeLanguage("en")}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("ja")}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                日本語
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {mode === "bar" && <BarChart />}
          {mode === "scatter" && <ScatterChart />}
        </div>
      </div>
    </>
  );
};
