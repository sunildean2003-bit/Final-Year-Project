import React from 'react';
import { BarChart3, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-primary-400" />
              <span className="font-bold text-xl text-white">ForecastAI</span>
            </div>
            <p className="text-sm text-slate-400">
              Empowering e-commerce businesses with next-generation predictive intelligence and actionable insights.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition">Forecasting</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">Analytics</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">Customers</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">Integration</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition"><Github className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ForecastAI. All rights reserved. Final Year Project.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
