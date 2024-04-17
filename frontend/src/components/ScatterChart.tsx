import { Data } from "plotly.js";
import Plot from "react-plotly.js";

interface Props {
  datas: Data[];
}

export const ScatterChart = ({ datas }: Props) => {
  return (
    <Plot
      data={datas}
      layout={{
        width: 800,
        height: 600,
        title: "散布図",
        xaxis: { title: "X軸" },
        yaxis: { title: "Y軸" },
      }}
    />
  );
};
