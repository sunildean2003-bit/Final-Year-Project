import { SalesData, CategoryData, SegmentData } from './types';

// Base datasets for different time ranges
const DATA_WEEKLY = [
  { label: 'Week 1', base: 12000 },
  { label: 'Week 2', base: 19000 },
  { label: 'Week 3', base: 15000 },
  { label: 'Week 4', base: 22000 },
];

const DATA_MONTHLY_6 = [
  { label: 'Jan', base: 45000 },
  { label: 'Feb', base: 52000 },
  { label: 'Mar', base: 48000 },
  { label: 'Apr', base: 61000 },
  { label: 'May', base: 55000 },
  { label: 'Jun', base: 67000 },
];

const DATA_MONTHLY_YTD = [
  ...DATA_MONTHLY_6,
  { label: 'Jul', base: 72000 },
  { label: 'Aug', base: 69000 },
  { label: 'Sep', base: 85000 },
  { label: 'Oct', base: 92000 },
];

// Multipliers to simulate different volumes per category
const CATEGORY_MULTIPLIERS: Record<string, number> = {
  'All Categories': 1,
  'Electronics': 0.45,
  'Fashion': 0.35,
  'Home': 0.20,
};

// Original exports for backward compatibility
export const MOCK_SALES_DATA: SalesData[] = [
  { month: 'Jan', actual: 4000, forecast: 4100 },
  { month: 'Feb', actual: 3000, forecast: 3200 },
  { month: 'Mar', actual: 2000, forecast: 2400 },
  { month: 'Apr', actual: 2780, forecast: 2900 },
  { month: 'May', actual: 1890, forecast: 2100 },
  { month: 'Jun', actual: 2390, forecast: 2500 },
  { month: 'Jul', actual: 3490, forecast: 3300 },
];

export const MOCK_CATEGORY_DATA: CategoryData[] = [
  { name: 'Electronics', sales: 4000 },
  { name: 'Fashion', sales: 3000 },
  { name: 'Home', sales: 2000 },
  { name: 'Beauty', sales: 2780 },
  { name: 'Sports', sales: 1890 },
];

export const MOCK_SEGMENT_DATA: SegmentData[] = [
  { name: 'New', value: 400 },
  { name: 'Returning', value: 300 },
  { name: 'VIP', value: 300 },
  { name: 'At Risk', value: 200 },
];

export const COLORS = ['#2563eb', '#60a5fa', '#93c5fd', '#bfdbfe', '#1e40af'];

// Helper to format currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
};

// Dynamic Data Generator
export const getFilteredData = (category: string, range: string) => {
  let baseData = DATA_MONTHLY_6; // Default to 6 Months

  if (range === 'Last 30 Days') {
    baseData = DATA_WEEKLY;
  } else if (range === 'Year to Date') {
    baseData = DATA_MONTHLY_YTD;
  }

  const multiplier = CATEGORY_MULTIPLIERS[category] || 1;

  // Generate Sales Data
  const salesData = baseData.map((item) => {
    // Add consistent "randomness" based on string length to avoid jitter
    const noise = (item.label.length % 3) * 0.05; 
    const value = Math.floor(item.base * multiplier * (1 + (category === 'Fashion' ? noise : -noise)));
    const forecast = Math.floor(value * (1.05 + (category === 'Electronics' ? 0.05 : 0))); // Slight optimistic forecast

    return {
      month: item.label,
      actual: value,
      forecast: forecast,
    };
  });

  // Calculate Aggregates for KPIs
  const totalActual = salesData.reduce((sum, item) => sum + item.actual, 0);
  const totalForecast = salesData.reduce((sum, item) => sum + item.forecast, 0);
  const accuracy = 100 - (Math.abs(totalActual - totalForecast) / totalActual * 100);
  
  // Dynamic KPIs based on selection
  const kpiData = [
    {
      title: "Total Revenue",
      value: formatCurrency(totalActual),
      trend: "+12.5%",
      trendUp: true,
      type: "currency"
    },
    {
      title: "Forecast Accuracy",
      value: `${accuracy.toFixed(1)}%`,
      trend: "+2.1%",
      trendUp: true,
      type: "percent"
    },
    {
      title: "Active Customers",
      value: Math.floor(totalActual / 120).toLocaleString(), // Rough estimate logic
      trend: category === 'Home' ? "-0.5%" : "+5.2%",
      trendUp: category !== 'Home',
      type: "count"
    },
    {
      title: "Inventory Status",
      value: category === 'Electronics' ? "Low Stock" : "Healthy",
      trend: "Optimal",
      trendUp: true,
      type: "status"
    }
  ];

  return { salesData, kpiData };
};
