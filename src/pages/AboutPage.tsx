import React from 'react';
import { 
  BookOpen, 
  Flame, 
  Heart, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Sprout,
  HeartHandshake,
  Gift,
  Building,
  GraduationCap,
  Scale,
  Compass
} from 'lucide-react';
import { AboutSection } from '../components/AboutSection';
import { StatementOfFaith } from '../components/StatementOfFaith';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenMembershipModal: () => void;
  onOpenPrayerModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenMembershipModal,
  onOpenPrayerModal
}) => {
  return (
    <div className="space-y-0">
      {/* Dedicated Page Hero Banner */}
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
            <span className="text-orange-400 font-semibold">About</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C52] border border-[#F37016]/30 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
              <BookOpen className="w-4 h-4 text-[#F37016]" />
              <span>Articles of Association • Article I & II</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              About Grace Prayer Group Ministries
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-serif italic">
              "Grace Prayer Group Ministries, The Place & House of Praise and Worship. We pray the scriptures, calling upon the name of the LORD in spirit and in truth, seeking after HIS mercy and grace in pursuit of the righteousness of HIS Kingdom by faith."
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenMembershipModal}
                className="px-6 py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>Join Our Fellowship (Article 3.2)</span>
              </button>
              <button
                onClick={() => onNavigate('leadership')}
                className="px-6 py-3 rounded-xl bg-[#0A2240] border border-[#0F2C52] hover:border-[#F37016]/50 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
              >
                Meet Leadership & Read Articles
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Purpose, Mission, Vision & 10 Objectives (Article I) */}
      <AboutSection
        onOpenMembershipModal={onOpenMembershipModal}
        onNavigate={onNavigate}
      />

      {/* Statement of Faith & Prayer/Fasting Lifestyle (Article II) */}
      <StatementOfFaith />

      {/* Scriptural Admonition on Christian Living (Philippians 4:8) */}
      <section className="py-16 bg-[#06162A] text-slate-100 border-t border-[#0F2C52]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2C52] border border-[#F37016]/30 text-orange-300 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span>Article 3.3 & 4.1 Moral Standard</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            The Standard of Righteousness & Integrity
          </h3>
          <p className="text-slate-300 text-base sm:text-lg font-serif italic leading-relaxed">
            "Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things." — Philippians 4:8
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('prayer')}
              className="px-6 py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Pray With Us Today</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-[#0A2240] border border-[#0F2C52] hover:border-[#F37016]/50 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
            >
              Contact Pastoral Leadership
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
