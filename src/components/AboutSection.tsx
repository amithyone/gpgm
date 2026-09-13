import React, { useState } from 'react';
import { 
  Compass, 
  Target, 
  CheckCircle2, 
  BookOpen, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Gift, 
  Flame, 
  Globe, 
  HeartHandshake,
  Sprout,
  Quote
} from 'lucide-react';
import { CHURCH_OBJECTIVES } from '../data/churchData';

interface AboutSectionProps {
  onOpenMembershipModal: () => void;
  onNavigate: (sectionId: string) => void;
}

const OBJECTIVE_ICONS: Record<string, React.ReactNode> = {
  Sprout: <Sprout className="w-5 h-5 text-[#2E7D32]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#F37016]" />,
  BookOpen: <BookOpen className="w-5 h-5 text-[#F37016]" />,
  Flame: <Flame className="w-5 h-5 text-[#F37016]" />,
  Users: <Users className="w-5 h-5 text-[#2E7D32]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#2E7D32]" />,
  Gift: <Gift className="w-5 h-5 text-[#F37016]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#F37016]" />,
  Globe: <Globe className="w-5 h-5 text-[#0A2240]" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />
};

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenMembershipModal,
  onNavigate
}) => {
  const [activeObjectiveTab, setActiveObjectiveTab] = useState<'all' | 'spiritual' | 'charity'>('all');

  const filteredObjectives = CHURCH_OBJECTIVES.filter(obj => {
    if (activeObjectiveTab === 'spiritual') return [1, 3, 4, 8].includes(obj.id);
    if (activeObjectiveTab === 'charity') return [2, 5, 6, 7, 9, 10].includes(obj.id);
    return true;
  });

  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A2240] text-orange-300 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-orange-400" />
            <span>Article I: Name, Purpose & Calling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A2240] tracking-tight">
            Our Mission, Vision & Sacred Purpose
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-serif italic">
            "For it is God which worketh in you both to will and to do of his good pleasure." — Philippians 2:13 (KJV)
          </p>
        </div>

        {/* Mission & Vision Cards (Article 1.2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#F37016] transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37016] flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-[#F37016]" />
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#F37016] mb-1">
              Article 1.2 • Mission Statement
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0A2240] mb-3">
              Building a Christ-Centred Community
            </h3>
            <p className="text-slate-700 text-base leading-relaxed mb-4">
              "To foster spiritual growth, strengthen faith, and build a Christ-centred community through prayer, worship, fellowship, and the teaching of the undiluted Word of God."
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono pt-3 border-t border-slate-100">
              <BookOpen className="w-3.5 h-3.5 text-[#F37016]" />
              <span>Jude 1:20 • Building on your most holy faith</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#F37016] transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#0A2240] text-orange-400 flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#F37016] mb-1">
              Article 1.2 • Vision Statement
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0A2240] mb-3">
              United in the Truth of Scripture
            </h3>
            <p className="text-slate-700 text-base leading-relaxed mb-4">
              "To build a united and spiritually strengthened community of believers who grow in faith, support one another, and live according to the truth of Scripture."
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono pt-3 border-t border-slate-100">
              <BookOpen className="w-3.5 h-3.5 text-[#F37016]" />
              <span>Acts 20:32 • Commended to the word of His grace</span>
            </div>
          </div>
        </div>

        {/* Foundational Purpose Narrative Quote Box */}
        <div className="bg-[#06162A] text-slate-100 rounded-2xl p-8 sm:p-10 mb-20 shadow-lg relative border border-[#F37016]/30">
          <Quote className="absolute top-6 right-6 w-12 h-12 text-[#F37016]/20" />
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-widest text-orange-400 font-mono mb-2">
              Foundational Calling of Grace Prayer Group Ministries
            </div>
            <h4 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-4 leading-snug">
              The Purpose of the Prayer Group
            </h4>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-serif">
              "The purpose of the Prayer Group is to foster spiritual growth, deepen the faith of its members, and support one another through collective prayer. The group will provide a space for individuals to come together in worship, prayer, and fellowship. The Prayer Group aims to encourage individuals in their walk with God, share in the burdens and joys of life, and strengthen the bond of Christian community. The undiluted scripture is the reference."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#0F2C52] text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F37016]" />
                <span>Jude 1:20: Praying in the Holy Ghost</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                <span>Acts 20:32: The Word which builds you up</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 10 Objectives of GPG Ministries */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F37016] mb-1">
                Article 1.2 Governance Framework
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A2240]">
                10 Core Ministry & Charitable Objectives
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
              <button
                onClick={() => setActiveObjectiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeObjectiveTab === 'all'
                    ? 'bg-[#F37016] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All 10 Objectives
              </button>
              <button
                onClick={() => setActiveObjectiveTab('spiritual')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeObjectiveTab === 'spiritual'
                    ? 'bg-[#F37016] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Spiritual & Word
              </button>
              <button
                onClick={() => setActiveObjectiveTab('charity')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeObjectiveTab === 'charity'
                    ? 'bg-[#F37016] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Charity & Community
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredObjectives.map((obj) => (
              <div
                key={obj.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#F37016] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center border border-orange-100">
                      {OBJECTIVE_ICONS[obj.iconName] || <CheckCircle2 className="w-5 h-5 text-[#F37016]" />}
                    </div>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      #{obj.id}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#0A2240] mb-2 font-heading">
                    {obj.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {obj.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold text-[#F37016]">Article I GPGM Objective</span>
                  <span className="font-mono">Slide 3</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Discrimination & Open Arms Notice (Article 9.1) */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#2E7D32]/15 flex items-center justify-center shrink-0 text-[#2E7D32]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#2E7D32]">
                🕊️ Article 9.1 • Non-Discrimination Policy
              </div>
              <p className="text-slate-800 text-sm mt-0.5 leading-snug">
                "The Prayer Group shall operate in a manner that welcomes all people, regardless of race, gender, or background, and provides a safe environment for all members to grow spiritually as enshrined in the scriptures in Bible."
              </p>
            </div>
          </div>
          <button
            onClick={onOpenMembershipModal}
            className="shrink-0 px-4 py-2 rounded-lg bg-[#F37016] hover:bg-[#D95304] text-white font-semibold text-xs transition-colors shadow-xs"
          >
            Become a Member
          </button>
        </div>

      </div>
    </section>
  );
};
