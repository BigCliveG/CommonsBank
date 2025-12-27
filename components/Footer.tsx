import React from 'react';
import { Twitter, Linkedin, Github, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-commons-dark border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">Commons Bank</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              A people-first global Fintech Bank designed to maximize financial sovereignty 
              while working within law and regulation.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Incomium Connect</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">DEX</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">PIaaS</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">LibertyCoin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Regulatory Disclosures</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Cooperative Bylaws</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2025 Commons Bank Cooperative. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;