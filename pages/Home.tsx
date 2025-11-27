import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
              AI-Powered Business Intelligence
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              Predict the Future of <br className="hidden sm:block" />
              <span className="text-primary-600">Your Sales</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
              Unlock the power of Machine Learning to forecast trends, optimize inventory, 
              and segment customers with precision. Transform data into actionable growth strategies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/dashboard" 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-primary-500/30 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/features" 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
              >
                View Features
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 -ml-24 -mt-24 w-96 h-96 rounded-full bg-primary-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 -mr-24 -mb-24 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      </section>

      {/* Trust/Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-blue-50 p-3 rounded-full mb-4 text-blue-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">98% Accuracy</h3>
              <p className="text-slate-500">Our advanced LSTM models ensure highly accurate sales predictions.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-blue-50 p-3 rounded-full mb-4 text-blue-600">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Insights</h3>
              <p className="text-slate-500">Process millions of data points instantly for up-to-the-minute BI.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-blue-50 p-3 rounded-full mb-4 text-blue-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Scalable</h3>
              <p className="text-slate-500">Enterprise-grade security designed to grow with your business.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
