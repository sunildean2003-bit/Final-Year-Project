import React from 'react';
import { KPIProps } from '../types';
import { TrendingUp, TrendingDown } from 'lucide-react';

const KPICard: React.FC<KPIProps> = ({ title, value, trend, trendUp, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
        </div>
        <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
          {icon}
        </div>
      </div>
      <div className="flex items-center text-sm">
        {trendUp ? (
          <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
        ) : (
          <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
        )}
        <span className={trendUp ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
          {trend}
        </span>
        <span className="text-slate-400 ml-1">vs last month</span>
      </div>
    </div>
  );
};

export default KPICard;
