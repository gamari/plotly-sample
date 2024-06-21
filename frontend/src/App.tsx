import { useState } from "react";

import { BarChart } from "./components/chart/BarChart";
import { ScatterChart } from "./components/chart/ScatterChart";

import "./App.css";
import { MenuBar } from "./components/menubar/TopBar";

function App() {
  const [mode, setMode] = useState<"bar" | "scatter" | "splom">();
  return (
    <>
      <MenuBar />
      <div className="flex flex-row container mt-6 mx-auto">
        <div>
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
        </div>

        <div className="flex-1">
          {mode === "bar" && <BarChart />}
          {mode === "scatter" && <ScatterChart />}
        </div>
      </div>
    </>
  );
}

export default App;
