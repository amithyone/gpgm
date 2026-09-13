import React from 'react';
import { 
  Heart, 
  BookOpen, 
  Calendar, 
  FileText, 
  ArrowRight, 
  Sparkles,
  Users
} from 'lucide-react';
import { ChurchLogo } from './ChurchLogo';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrayerModal: () => void;
  onOpenMembershipModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onOpenPrayerModal,
  onOpenMembershipModal
}) => {
  return (
    <div id="hero" className="relative bg-gradient-to-b from-[#06162A] via-[#0A2240] to-[#06162A] text-slate-100 overflow-hidden border-b border-[#F37016]/20">
      {/* Sacred geometric background accents with subtle ambient motion */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#F37016_1px,transparent_1px)] [background-size:28px_28px] animate-ambient-drift" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#F37016]/15 rounded-full blur-3xl pointer-events-none animate-soft-glow" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#2E7D32]/15 rounded-full blur-2xl pointer-events-none animate-soft-glow [animation-delay:2s]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-20">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Logo Emblem Centerpiece with subtle float */}
          <div className="flex justify-center mb-2 animate-gentle-float">
            <div className="p-2 rounded-full bg-[#06162A]/60 border border-[#F37016]/30 shadow-2xl backdrop-blur-xs">
              <ChurchLogo size="xl" withText={false} />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2C52] border border-[#F37016]/40 text-orange-300 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
            <span>GRACE PRAYER GROUP MINISTRIES (GPGM) • gpgministries.org</span>
          </div>

          {/* Main Title & Motto */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-slate-100 leading-tight">
            The Place & House of <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-amber-300">
              Praise and Worship
            </span>
          </h1>

          {/* Ministry Declaration (Slide 2) */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-serif italic max-w-3xl mx-auto leading-relaxed">
            "We pray the scriptures, calling upon the name of the LORD in spirit and in truth, seeking after HIS mercy and grace in pursuit of the righteousness of HIS Kingdom by faith, in obedience, in patience, humility and hope, and to occupy till HE comes."
          </p>

          <div className="text-xs uppercase tracking-widest text-orange-400 font-mono">
            — Isaiah 56:7 • Romans 8:26, 34 • Matthew 5:6 • Matthew 6:33 • Hebrews 11:6 (KJV)
          </div>

          {/* Call to Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenPrayerModal}
              id="hero-submit-prayer-cta"
              className="px-6 py-3.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-950/40 hover:shadow-orange-500/30 transition-all flex items-center gap-2 group"
            >
              <Heart className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              <span>Submit Prayer Request</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('prayer')}
              id="hero-pray-scriptures-cta"
              className="px-6 py-3.5 rounded-xl bg-[#0F2C52] hover:bg-[#163B6B] text-orange-300 hover:text-orange-200 font-semibold text-sm sm:text-base border border-[#F37016]/40 shadow-md transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span>Pray the Scriptures</span>
            </button>

            <button
              onClick={() => onNavigate('gatherings')}
              id="hero-gatherings-cta"
              className="px-5 py-3.5 rounded-xl bg-[#0A2240] hover:bg-[#123663] text-slate-200 hover:text-white font-medium text-sm border border-slate-700/60 transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Weekly Services</span>
            </button>

            <button
              onClick={() => onNavigate('leadership')}
              id="hero-articles-cta"
              className="px-5 py-3.5 rounded-xl bg-[#0A2240] hover:bg-[#123663] text-slate-200 hover:text-white font-medium text-sm border border-slate-700/60 transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Articles of Association</span>
            </button>
          </div>
        </div>

        {/* Foundational Pillars Bar */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0A2240]/80 border border-[#F37016]/25 rounded-xl p-5 backdrop-blur-xs hover:border-[#F37016]/50 transition-colors shadow-md">
            <div className="w-9 h-9 rounded-lg bg-[#F37016]/20 flex items-center justify-center text-orange-400 mb-3">
              <span className="text-lg font-bold">🕊️</span>
            </div>
            <h2 className="font-heading font-bold text-slate-100 text-base mb-1">House of Prayer</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              "Mine house shall be called an house of prayer for all people." Interceding with fervent faith, repentance, and praise.
            </p>
            <span className="inline-block mt-2 text-[11px] font-mono text-orange-400/90 font-semibold">Isaiah 56:7</span>
          </div>

          <div className="bg-[#0A2240]/80 border border-[#F37016]/25 rounded-xl p-5 backdrop-blur-xs hover:border-[#F37016]/50 transition-colors shadow-md">
            <div className="w-9 h-9 rounded-lg bg-[#F37016]/20 flex items-center justify-center text-orange-400 mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="font-heading font-bold text-slate-100 text-base mb-1">Undiluted Scripture</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Grounding believers in the truth of God's Word (KJV) without compromise, building sound doctrine and holy living.
            </p>
            <span className="inline-block mt-2 text-[11px] font-mono text-orange-400/90 font-semibold">2 Timothy 3:16</span>
          </div>

          <div className="bg-[#0A2240]/80 border border-[#F37016]/25 rounded-xl p-5 backdrop-blur-xs hover:border-[#F37016]/50 transition-colors shadow-md">
            <div className="w-9 h-9 rounded-lg bg-[#F37016]/20 flex items-center justify-center text-orange-400 mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="font-heading font-bold text-slate-100 text-base mb-1">Prayer & Fasting Lifestyle</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Committing regular corporate and private seasons to prayer, supplications, and fasting for spiritual breakthrough.
            </p>
            <span className="inline-block mt-2 text-[11px] font-mono text-orange-400/90 font-semibold">Matthew 17:21 • Art. II</span>
          </div>

          <div className="bg-[#0A2240]/80 border border-[#2E7D32]/40 rounded-xl p-5 backdrop-blur-xs hover:border-[#2E7D32] transition-colors shadow-md">
            <div className="w-9 h-9 rounded-lg bg-[#2E7D32]/25 flex items-center justify-center text-green-400 mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="font-heading font-bold text-slate-100 text-base mb-1">Caring Fellowship & Peace</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Bearing one another's burdens, guarding prayer confidentiality, and extending charitable support to the distressed.
            </p>
            <span className="inline-block mt-2 text-[11px] font-mono text-green-400/90 font-semibold">Galatians 6:2 • Art. 3.3</span>
          </div>
        </div>

        {/* Dynamic Scripture Ribbon */}
        <div className="mt-10 p-4 rounded-xl bg-gradient-to-r from-[#0F2C52] via-[#0A2240] to-[#0F2C52] border border-[#F37016]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#F37016]/20 text-orange-300 font-mono text-xs font-semibold uppercase tracking-wider shrink-0 border border-[#F37016]/30">
              Foundational Verse
            </span>
            <p className="text-xs sm:text-sm text-slate-200 font-serif italic">
              "For where two or three are gathered together in my name, there am I in the midst of them." — Matthew 18:20
            </p>
          </div>
          <button
            onClick={onOpenMembershipModal}
            id="hero-join-community-link"
            className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 shrink-0 group"
          >
            <span>Express Interest to Join GPGM (Article 3.2)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
