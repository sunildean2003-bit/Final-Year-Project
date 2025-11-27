import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { TrendingUp, PieChart, Users, Package, Activity, Database } from 'lucide-react';

const Features: React.FC = () => {
  const featuresList = [
    {
      title: "ML Sales Forecasting",
      description: "Utilize Linear Regression and ARIMA/LSTM models to predict future sales trends with high accuracy based on historical data.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "KPI Dashboard",
      description: "A centralized command center visualizing critical metrics like Total Revenue, Growth Rate, and Retention in real-time.",
      icon: <Activity className="h-6 w-6" />
    },
    {
      title: "Customer Segmentation",
      description: "Automatically group customers based on purchasing behavior (RFM Analysis) to enable targeted marketing campaigns.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Inventory Insights",
      description: "Predict stock depletion rates and receive automated reorder alerts to prevent revenue loss from stockouts.",
      icon: <Package className="h-6 w-6" />
    },
    {
      title: "Data Visualization",
      description: "Interactive line, bar, and pie charts that make complex datasets easy to understand for any stakeholder.",
      icon: <PieChart className="h-6 w-6" />
    },
    {
      title: "Data Integration Layer",
      description: "Seamlessly ingest data from various sources (CSV, SQL, API) into a unified analytical framework.",
      icon: <Database className="h-6 w-6" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold uppercase tracking-wide mb-2">System Capabilities</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powerful Features for Modern Retail</h1>
          <p className="text-slate-600 text-lg">
            Our platform combines statistical rigor with intuitive design to deliver tools that drive tangible business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
