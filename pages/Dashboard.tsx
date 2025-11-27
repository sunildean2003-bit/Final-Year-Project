import React, { useState, useEffect, useMemo } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell 
} from 'recharts';
import { DollarSign, TrendingUp, Users, Package, Sparkles, RefreshCw } from 'lucide-react';
import KPICard from '../components/KPICard';
import { MOCK_CATEGORY_DATA, MOCK_SEGMENT_DATA, COLORS, getFilteredData } from '../constants';
import { analyzeDashboardData } from '../services/geminiService';

const Dashboard: React.FC = () => {
  const [dateRange, setDateRange] = useState('Last 6 Months');
  const [category, setCategory] = useState('All Categories');
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Derive data based on state
  const { salesData, kpiData } = useMemo(() => {
    return getFilteredData(category, dateRange);
  }, [category, dateRange]);

  // Clear AI analysis when data context changes
  useEffect(() => {
    setAiAnalysis(null);
  }, [category, dateRange]);

  const handleAiAnalysis = async () => {
    setIsAnalyzing(true);
    // Pass the currently filtered data to the AI for relevant context
    const result = await analyzeDashboardData(salesData, MOCK_CATEGORY_DATA);
    setAiAnalysis(result);
    setIsAnalyzing(false);
  };

  const getKpiIcon = (title: string) => {
    switch (title) {
      case 'Total Revenue': return <DollarSign className="h-6 w-6" />;
      case 'Forecast Accuracy': return <TrendingUp className="h-6 w-6" />;
      case 'Active Customers': return <Users className="h-6 w-6" />;
      case 'Inventory Status': return <Package className="h-6 w-6" />;
      default: return <TrendingUp className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-12 fade-in">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Sales Intelligence Dashboard</h1>
              <p className="text-sm text-slate-500 mt-1">Real-time performance monitoring and forecasting</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <select 
                  className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 pr-8 appearance-none cursor-pointer hover:border-primary-400 transition-colors"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <option>Last 30 Days</option>
                  <option>Last 6 Months</option>
                  <option>Year to Date</option>
                </select>
              </div>
              
              <div className="relative">
                <select 
                  className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 pr-8 appearance-none cursor-pointer hover:border-primary-400 transition-colors"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home</option>
                </select>
              </div>

              <button 
                onClick={handleAiAnalysis}
                disabled={isAnalyzing}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all disabled:opacity-70 disabled:hover:scale-100"
              >
                {isAnalyzing ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                {isAnalyzing ? 'Analyzing...' : 'Ask AI Analyst'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <KPICard 
              key={index}
              title={kpi.title} 
              value={kpi.value} 
              trend={kpi.trend} 
              trendUp={kpi.trendUp} 
              icon={getKpiIcon(kpi.title)} 
            />
          ))}
        </div>

        {/* AI Analysis Result */}
        {aiAnalysis && (
          <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-xl shadow-md animate-fadeIn transition-all">
             <div className="flex items-center mb-3">
               <div className="p-2 bg-purple-100 rounded-lg mr-3">
                 <Sparkles className="h-5 w-5 text-purple-600" />
               </div>
               <h3 className="text-lg font-bold text-slate-800">AI Strategic Insight</h3>
             </div>
             <div className="text-slate-600 whitespace-pre-line text-sm leading-relaxed pl-12 border-l-2 border-slate-100 ml-3">
               {aiAnalysis}
             </div>
          </div>
        )}

        {/* Main Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sales Forecast Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Sales Forecast vs Actual</h3>
                <p className="text-sm text-slate-400">Viewing data for: <span className="font-medium text-slate-600">{category}</span> • {dateRange}</p>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                  <YAxis 
                    stroke="#64748b" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `$${value >= 1000 ? (value/1000).toFixed(0) + 'k' : value}`} 
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, undefined]}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    name="Actual Sales" 
                    stroke="#2563eb" 
                    strokeWidth={3} 
                    dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} 
                    activeDot={{ r: 6, strokeWidth: 0 }} 
                    animationDuration={1000}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="forecast" 
                    name="AI Forecast" 
                    stroke="#93c5fd" 
                    strokeWidth={3} 
                    strokeDasharray="5 5" 
                    dot={false}
                    animationDuration={1000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Customer Segments Pie Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Customer Segments</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={MOCK_SEGMENT_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {MOCK_SEGMENT_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Secondary Charts Row */}
        <div className="grid grid-cols-1 gap-8">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Top Selling Categories</h3>
             <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MOCK_CATEGORY_DATA} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}} 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} 
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Sales']}
                  />
                  <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={50} animationDuration={1500} />
                </BarChart>
              </ResponsiveContainer>
            </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
