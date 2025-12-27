import React from 'react';
import { MessageCircle, Zap, Coins, Briefcase } from 'lucide-react';

const Ecosystem: React.FC = () => {
  const products = [
    {
      id: 'connect',
      title: 'Incomium Connect',
      tagline: 'Secure Communication & Payments',
      description: 'A privacy-preserving messaging layer where financial transactions happen seamlessly within chat. Powered by signal-based encryption and offline mesh networking.',
      features: ['Zero-Metadata Messaging', 'Offline Mesh Mode', 'Crypto & Fiat Wallet'],
      icon: <MessageCircle className="w-10 h-10 text-teal-400" />,
      color: 'border-teal-500/30 bg-teal-500/5'
    },
    {
      id: 'dex',
      title: 'Regulated DEX',
      tagline: 'Hybrid Decentralized Exchange',
      description: 'Trade digital assets, stablecoins, and tokenized real-world assets (RWAs) on a compliant platform backed by Commons Bank liquidity.',
      features: ['Tokenized Real Estate', 'Compliance & KYC Built-in', 'Deep Liquidity Pools'],
      icon: <Coins className="w-10 h-10 text-blue-400" />,
      color: 'border-blue-500/30 bg-blue-500/5'
    },
    {
      id: 'piaas',
      title: 'PIaaS',
      tagline: 'Passive Income as a Service',
      description: 'Automated tools for income generation—from dropshipping to fractional royalties—directly integrated into your bank account.',
      features: ['AI-Managed Stores', 'Fractional Investing', 'Automated Tax Handling'],
      icon: <Briefcase className="w-10 h-10 text-purple-400" />,
      color: 'border-purple-500/30 bg-purple-500/5'
    }
  ];

  return (
    <section id="ecosystem" className="py-24 relative bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Integrated Ecosystem</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We are not just building an app; we are building the rails for a compliant, 
            peer-to-peer digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className={`p-8 rounded-3xl border ${product.color} backdrop-blur-sm transition-transform hover:-translate-y-2`}>
              <div className="mb-6 bg-slate-800/50 w-20 h-20 rounded-2xl flex items-center justify-center border border-white/5">
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
              <p className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wide">{product.tagline}</p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {product.description}
              </p>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <Zap className="w-4 h-4 text-commons-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;