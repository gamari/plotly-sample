import { Data } from "plotly.js";
import { useEffect, useState } from "react";

import Plot from "react-plotly.js";

interface Props {}

export const ScatterChart = ({}: Props) => {
  const [data, setData] = useState<Data[]>([]);

  const fetchData = async () => {
    const response1 = await fetch("http://127.0.0.1:8000/data/");
    const data1 = await response1.json();
    const x1 = data1.map((d: any) => d.x);
    const y1 = data1.map((d: any) => d.y);

    const response2 = await fetch("http://127.0.0.1:8000/data/");
    const data2 = await response2.json();
    const x2 = data2.map((d: any) => d.x);
    const y2 = data2.map((d: any) => d.y);

    setData([
      {
        x: x1,
        y: y1,
        mode: "markers",
        type: "scatter",
        name: "プロット1",
        marker: { color: "blue" },
      },
      {
        x: x2,
        y: y2,
        mode: "markers",
        type: "scatter",
        name: "プロット2",
        marker: { color: "red" },
      },
    ]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data?.length) return null;

  return (
    <Plot
      data={data}
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
