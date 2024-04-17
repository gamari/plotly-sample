import { Data } from "plotly.js";
import "./App.css";
import { BarChart } from "./components/BarChart";
import { ScatterChart } from "./components/ScatterChart";
import { SplomChart } from "./components/SplomChart";

const scatterDatas: Data[] = [
  {
    x: [1, 2, 3],
    y: [2, 6, 3],
    mode: "markers",
    type: "scatter",
    name: "Plot 1",
    marker: { color: "blue" },
  },
  {
    x: [1, 2, 3],
    y: [4, 4, 4],
    mode: "markers",
    type: "scatter",
    name: "Plot 2",
    marker: { color: "red" },
  },
  {
    x: [1, 2, 3],
    y: [1, 5, 2],
    mode: "markers",
    type: "scatter",
    name: "Plot 3",
    marker: { color: "green" },
  },
];

function App() {
  return (
    <>
      <div>
        <BarChart />
      </div>

      <div>
        <ScatterChart datas={scatterDatas} />
      </div>

      <div>
        <SplomChart />
      </div>
    </>
  );
}

export default App;
