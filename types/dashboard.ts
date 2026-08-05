export interface NodeItem {
  cx: number;
  cy: number;
  val: string;
  period: string;
}

export interface LegendItem {
  label: string;
  swatch: 'trend' | 'forecast' | 'node' | 'bar';
}

export interface MetricDataset {
  xLabels: string[];
  nodes: NodeItem[];
  trendPath: string;
  forecastPath: string;
  areaPath: string;
  fanPath: string;
  barHeights: number[];
  badge: string;
  title: string;
  caption: string;
  narrative: string;
  yAxisLabel: string;
  legend: LegendItem[];
}

export interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  period: string;
  val: string;
}
