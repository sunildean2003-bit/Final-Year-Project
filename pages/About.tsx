import React from 'react';
import { Target, Lightbulb, Code2, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-semibold uppercase tracking-wide mb-2">Final Year Project</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About The Project</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Bridging the gap between raw data and strategic decision-making through advanced machine learning and interactive data visualization.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Overview</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            The "E-Commerce Sales Forecasting & Business Intelligence Platform" is designed to assist online retailers in navigating the complexities of market demand. By leveraging historical sales data, the system employs advanced Time-Series Forecasting algorithms to predict future trends, allowing businesses to optimize stock levels and reduce overhead costs.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Beyond forecasting, the platform serves as a comprehensive Business Intelligence tool, offering deep insights into customer behavior through segmentation and visual performance tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl border border-slate-100">
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-primary-600 mr-3" />
              <h3 className="text-xl font-bold text-slate-900">Objectives</h3>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-1">
              <li>Implement accurate sales forecasting models (ARIMA/LSTM).</li>
              <li>Visualize Key Performance Indicators (KPIs) in real-time.</li>
              <li>Provide actionable insights for inventory management.</li>
              <li>Segment customers to tailor marketing strategies.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-100">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-6 w-6 text-primary-600 mr-3" />
              <h3 className="text-xl font-bold text-slate-900">Expected Outcomes</h3>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-1">
              <li>Reduction in stockouts and overstock scenarios.</li>
              <li>Improved marketing ROI through targeted segmentation.</li>
              <li>Data-driven decision-making culture.</li>
              <li>User-friendly dashboard for non-technical stakeholders.</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Code2 className="h-6 w-6 mr-3 text-primary-400" />
            Technologies Used
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary-400 mb-2">Frontend & Visualization</h4>
              <p className="text-slate-300 text-sm">React, TypeScript, Tailwind CSS, Recharts, Lucide Icons</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-400 mb-2">Machine Learning</h4>
              <p className="text-slate-300 text-sm">Python (Scikit-Learn, TensorFlow), Pandas, NumPy</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-400 mb-2">Data Processing</h4>
              <p className="text-slate-300 text-sm">ETL Pipelines, Data Cleaning, Normalization</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-400 mb-2">AI Integration</h4>
              <p className="text-slate-300 text-sm">Google Gemini API for Natural Language Insights</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
