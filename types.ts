export interface SalesData {
  month: string;
  actual: number;
  forecast: number;
  [key: string]: any;
}

export interface CategoryData {
  name: string;
  sales: number;
  [key: string]: any;
}

export interface SegmentData {
  name: string;
  value: number;
  [key: string]: any;
}

export interface KPIProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: React.ReactNode;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}