import React from 'react';
import { 
  HandHeart, 
  ShieldCheck, 
  Gift, 
  HeartHandshake, 
  CheckCircle2, 
  Building, 
  Sparkles, 
  Lock,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { GivingSection } from '../components/GivingSection';

interface DonatePageProps {
  onNavigate: (page: string) => void;
  onOpenPrayerModal: () => void;
}

export const DonatePage: React.FC<DonatePageProps> = ({
  onNavigate,
  onOpenPrayerModal
}) => {
  return (
    <div className="space-y-0">
      {/* Page Hero Banner */}
      <div className="bg-[#06162A] text-slate-100 py-16 sm:py-20 border-b border-[#F37016]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F37016_1px,transparent_1px)] [background-size:28px_28px] animate-ambient-drift" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F37016]/15 rounded-full blur-3xl pointer-events-none animate-soft-glow" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2E7D32]/15 rounded-full blur-2xl pointer-events-none animate-soft-glow [animation-delay:2s]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-orange-300 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-orange-400 font-semibold">Donate</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C52] border border-[#F37016]/30 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
              <HandHeart className="w-4 h-4 text-[#F37016]" />
              <span>Article VI: Finances & Transparent Kingdom Stewardship</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Giving & Financial Stewardship
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-serif italic">
              "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver." — 2 Corinthians 9:7
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#giving-calculator"
                className="px-6 py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Make a Kingdom Contribution</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-xl bg-[#0A2240] border border-[#0F2C52] hover:border-orange-400 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
              >
                Financial & Wire Inquiries
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Embedded Full Giving Component */}
      <div id="giving-calculator">
        <GivingSection />
      </div>

      {/* Article 6.2 Constitutional Accountability Pledge */}
      <section className="py-16 bg-[#06162A] text-slate-100 border-t border-[#0F2C52]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2C52] text-orange-300 text-xs font-mono font-bold uppercase tracking-wider border border-[#F37016]/30">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span>Article 6.2 Constitutional Pledge</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            100% Accountability & Member Transparency
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm font-serif max-w-2xl mx-auto leading-relaxed">
            "All funds collected shall be dedicated solely to the ministry purposes set out in Article I. Complete financial books, vouchers, and accounts are maintained with solemn reverence to God and presented transparently to the council and members."
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('leadership')}
              className="px-6 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Inspect Articles of Association</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
