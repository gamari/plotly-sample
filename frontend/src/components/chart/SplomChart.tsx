import Plot from "react-plotly.js";

const dimensions: any[] = [
  { label: "A", values: [1, 2, 3] },
  { label: "B", values: [2, 3, 1] },
  { label: "C", values: [3, 1, 2] },
];

const plotData: any = [
  {
    type: "splom",
    dimensions: dimensions,
    diagonal: { visible: false },  // 対角線上のプロットを非表示
    marker: {
      color: "blue",
      size: 7,
      colorscale: "Viridis",
      line: {
        color: "white",
        width: 0.5,
      },
    },
  },
];

export const SplomChart = () => {
  return (
    <Plot
      data={plotData}
      layout={{
        width: 800,
        height: 600,
        title: "多変量連関図",
        dragmode: "select",
        hovermode: "closest",
      }}
    />
  );
};
