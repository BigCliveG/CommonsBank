import React from 'react';
import { ArrowRight, Lock, Globe, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-xs font-medium text-teal-300 uppercase tracking-wider">Regulated • Cooperative • Secure</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-300">
          The Sovereign Stack for <br />
          <span className="text-white">Global Finance</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Commons Bank combines the regulatory safety of traditional banking with the 
          post-quantum security of Web3. A member-owned global cooperative built for 
          financial dignity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-500/25">
            Become a Member <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm">
            Read Whitepaper
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
          {[
            { icon: <Lock className="text-teal-400" />, title: "Post-Quantum Secure", desc: "PQXDH encryption ensuring your data is safe against future threats." },
            { icon: <Users className="text-blue-400" />, title: "Member Owned", desc: "A cooperative model where profits are returned to the community." },
            { icon: <Globe className="text-purple-400" />, title: "Mesh Resilience", desc: "Offline transaction capabilities via Bluetooth/WiFi mesh networks." },
          ].map((item, i) => (
            <div key={i} className="p-6 glass-card rounded-2xl">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;