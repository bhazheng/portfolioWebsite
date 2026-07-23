export interface NodeItem {
  cx: number;
  cy: number;
  val: string;
  period: string;
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
}

export interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  period: string;
  val: string;
}
