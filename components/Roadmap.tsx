import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const Roadmap: React.FC = () => {
  const steps = [
    {
      phase: "Phase 1: Foundation (Months 0-6)",
      items: [
        "Incorporate holding & local entities (EU, UK, Singapore)",
        "Submit EU EMI & Singapore MPI applications",
        "Launch 'Get Paid to Chat' beta with 10k users",
        "Prototype Mesh Networking layer"
      ],
      status: "current"
    },
    {
      phase: "Phase 2: Scale (Months 6-18)",
      items: [
        "Launch Incomium Connect in pilot markets",
        "Direct Salary Capture & Payroll Streaming integration",
        "Deploy IDaaS (Identity as a Service) API",
        "US Market entry via Bank Partners"
      ],
      status: "upcoming"
    },
    {
      phase: "Phase 3: Infrastructure Monopoly (Month 18+)",
      items: [
        "Government & NGO partnerships for Mesh resilience",
        "Full banking licenses in strategic jurisdictions",
        "Global 'Black Sky' protocol rollout",
        "DEX Institutional Custody launch"
      ],
      status: "future"
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Implementation Roadmap</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-700 md:left-1/2 md:-ml-px"></div>

          {steps.map((step, index) => (
            <div key={index} className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot */}
              <div className="absolute left-8 -ml-3 mt-1.5 md:left-1/2 md:-ml-3">
                {step.status === 'current' ? (
                  <div className="w-6 h-6 bg-teal-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                     <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  </div>
                ) : (
                  <div className="w-6 h-6 bg-slate-700 rounded-full border-4 border-slate-900"></div>
                )}
              </div>

              {/* Content */}
              <div className="ml-20 md:ml-0 md:w-1/2 md:px-12">
                <div className={`p-6 rounded-2xl border ${step.status === 'current' ? 'border-teal-500/50 bg-teal-900/10' : 'border-white/5 bg-white/5'}`}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    {step.phase}
                    {step.status === 'current' && <span className="text-xs bg-teal-500 text-slate-900 px-2 py-0.5 rounded font-bold">LIVE</span>}
                  </h3>
                  <ul className="space-y-3">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                        {step.status === 'future' ? 
                          <Circle className="w-4 h-4 mt-0.5 text-slate-500" /> : 
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-teal-400" />
                        }
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;