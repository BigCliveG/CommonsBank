import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { year: 'Year 1', revenue: 5.2, users: 0.25 },
  { year: 'Year 2', revenue: 68.5, users: 2.5 },
  { year: 'Year 3', revenue: 312, users: 10 },
  { year: 'Year 4', revenue: 745, users: 22 },
  { year: 'Year 5', revenue: 1280, users: 35 },
];

const Financials: React.FC = () => {
  return (
    <section id="tokenomics" className="py-24 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sustainable Growth & <br />
              <span className="text-teal-400">LibertyCoin (LBC)</span> Utility
            </h2>
            <p className="text-slate-300 mb-6 text-lg">
              Unlike speculative crypto projects, Commons Bank is built on real unit economics. 
              Our "Liquidity & Staking Incentive" model ensures long-term value accrual through 
              regulatory compliance and high-margin revenue streams.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-blue-500 to-teal-400 rounded-full"></div>
                <div>
                  <h4 className="text-white font-bold text-lg">Transaction & FX Spreads</h4>
                  <p className="text-slate-400 text-sm">Primary revenue driver through P2P transfers and fiat on/off ramps.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-blue-500 to-teal-400 rounded-full"></div>
                <div>
                  <h4 className="text-white font-bold text-lg">Institutional Custody</h4>
                  <p className="text-slate-400 text-sm">Fees for managing tokenized real estate, royalties, and institutional assets.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-blue-500 to-teal-400 rounded-full"></div>
                <div>
                  <h4 className="text-white font-bold text-lg">Identity as a Service (IDaaS)</h4>
                  <p className="text-slate-400 text-sm">Monetizing verification via Zero-Knowledge Proofs for third-party apps.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full glass-card p-6 rounded-3xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Projected Growth (5 Years)</h3>
              <p className="text-xs text-slate-400">Revenue in $M USD / Users in Millions</p>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="year" stroke="#94a3b8" />
                  <YAxis yAxisId="left" stroke="#3b82f6" />
                  <YAxis yAxisId="right" orientation="right" stroke="#14b8a6" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend />
                  <Area 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="revenue" 
                    name="Revenue ($M)" 
                    stroke="#3b82f6" 
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                  <Area 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="users" 
                    name="Users (M)" 
                    stroke="#14b8a6" 
                    fillOpacity={1} 
                    fill="url(#colorUsers)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Financials;