import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Flame, 
  BookOpen, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  BookmarkCheck,
  Heart
} from 'lucide-react';
import { STATEMENT_OF_FAITH, FASTING_SCRIPTURES } from '../data/churchData';

export const StatementOfFaith: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'beliefs' | 'fasting'>('beliefs');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="faith" className="py-20 bg-[#0A2240] text-slate-100 border-b border-[#0F2C52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F2C52] border border-[#F37016]/30 text-orange-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
            <span>Article II: Statement of Faith</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Our Foundation of Faith & Doctrine
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-serif italic">
            "We are saved by grace to live by faith, and the things of GOD are done by grace." — Ephesians 2:8 • Hebrews 11:6 (KJV)
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#06162A] p-1.5 rounded-2xl border border-[#0F2C52] flex items-center gap-2">
            <button
              onClick={() => setActiveTab('beliefs')}
              id="faith-tab-beliefs"
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'beliefs'
                  ? 'bg-[#F37016] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Article 2.1: Core Beliefs</span>
            </button>
            <button
              onClick={() => setActiveTab('fasting')}
              id="faith-tab-fasting"
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'fasting'
                  ? 'bg-[#F37016] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Article 2.2: Prayer & Fasting Lifestyle</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Core Beliefs (Article 2.1) */}
        {activeTab === 'beliefs' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            {STATEMENT_OF_FAITH.map((item, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isExpanded 
                      ? 'bg-[#0F2C52] border-[#F37016]/50 shadow-lg' 
                      : 'bg-[#06162A]/90 border-[#0F2C52] hover:border-slate-600'
                  }`}
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                        isExpanded ? 'bg-[#F37016] text-white' : 'bg-[#0A2240] text-slate-300'
                      }`}>
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                          {item.title}
                        </h3>
                        <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-400 shrink-0 ml-4">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-orange-400" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#0A2240] space-y-4">
                      <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Scriptural Foundation (KJV)</span>
                        </div>
                        {item.scriptures.map((sc) => (
                          <div
                            key={sc.ref}
                            className="p-4 rounded-xl bg-[#06162A] border border-[#0F2C52] text-xs sm:text-sm text-slate-300 font-serif leading-relaxed"
                          >
                            <span className="font-bold text-orange-300 font-sans block mb-1">
                              {sc.ref}
                            </span>
                            "{sc.text}"
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Commitment to Prayer & Fasting (Article 2.2) */}
        {activeTab === 'fasting' && (
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Context Card */}
            <div className="bg-gradient-to-r from-[#06162A] via-[#0F2C52] to-[#06162A] p-8 rounded-2xl border border-[#F37016]/30">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Prayer is a Lifestyle
                </h3>
              </div>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-serif italic mb-4">
                "Prayer is a lifestyle and members of GPGM shall be committed to praying regularly for each other, for the community, and for the world. Prayer shall be the foundation of all meetings and activities. We believe that GOD answers prayer. Members shall from time to time engage in prayer and fasting."
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A2240] text-orange-300 text-xs font-mono font-medium border border-[#F37016]/20">
                <BookmarkCheck className="w-3.5 h-3.5 text-orange-400" />
                <span>Article 2.2 Official Ratification</span>
              </div>
            </div>

            {/* Fasting Scriptures Grid (All from Slide 5) */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>The 10 Scriptural Foundations for Prayer & Fasting (KJV)</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FASTING_SCRIPTURES.map((item, idx) => (
                  <div
                    key={item.reference}
                    className="p-5 rounded-xl bg-[#06162A] border border-[#0F2C52] hover:border-[#F37016]/50 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-orange-300 font-sans tracking-wide">
                          {item.reference}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">#{idx + 1}</span>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm font-serif italic leading-relaxed">
                        "{item.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Fasting Days Banner */}
            <div className="p-6 rounded-xl bg-[#06162A] border border-[#0F2C52] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#F37016]/10 flex items-center justify-center text-orange-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Corporate Ministry Fasting: Every Friday
                  </div>
                  <div className="text-xs text-slate-400">
                    From 6:00 AM to 3:00 PM / 6:00 PM • Breaking together with prayer & communion
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-orange-400 bg-[#0A2240] px-3 py-1.5 rounded-lg border border-[#F37016]/20">
                Matthew 17:21 • Mark 9:29
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
