import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Financials from './components/Financials';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-commons-dark text-slate-200 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <Financials />
        <Roadmap />
        
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-blue-900/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to regain your financial sovereignty?</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
              Join the waiting list for the first regulated, cooperative fintech bank 
              that pays you to communicate and transact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white focus:outline-none focus:border-teal-500 flex-grow"
              />
              <button className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-full transition-colors">
                Get Early Access
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;