export interface ImpactMetric {
  label: string;
  value: string;
}

export interface CareerMilestone {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  badge: string;
  summary: string;
  impactMetrics: ImpactMetric[];
  techStack: string[];
  detailRoute: string;
}
