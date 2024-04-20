import { Data } from "plotly.js";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

export const BarChart = () => {
  const [data, setData] = useState<Data[]>([]);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000/data/");
    const data = await response.json();
    const x = data.map((d: any, index: number) => index);
    const y = data.map((d: any) => d.y);

    setData([
      {
        x: x,
        y: y,
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "red" },
      },
      { type: "bar", x: x, y: y },
    ]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data?.length) return null;

  return (
    <div>
      <Plot
        data={data}
        layout={{ width: 800, height: 600, title: "棒グラフ" }}
      />
    </div>
  );
};
