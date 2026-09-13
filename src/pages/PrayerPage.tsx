import React, { useState } from 'react';
import { 
  Heart, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  Plus, 
  Lock, 
  Clock, 
  Flame, 
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { ScripturePrayerGuide } from '../components/ScripturePrayerGuide';
import { PrayerWall } from '../components/PrayerWall';

interface PrayerPageProps {
  onNavigate: (page: string) => void;
  onOpenPrayerModal: () => void;
}

export const PrayerPage: React.FC<PrayerPageProps> = ({
  onNavigate,
  onOpenPrayerModal
}) => {
  const [activeTab, setActiveTab] = useState<'wall' | 'scriptures'>('wall');

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
            <span className="text-orange-400 font-semibold">Prayer</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C52] border border-[#F37016]/30 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
              <Heart className="w-4 h-4 text-[#F37016] fill-current" />
              <span>House of Prayer for All People • Isaiah 56:7</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Intercessory Prayer & Scriptural Devotion
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-serif italic">
              "We pray the scriptures, calling upon the name of the LORD in spirit and in truth... for the Spirit itself maketh intercession for us with groanings which cannot be uttered." — Romans 8:26
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenPrayerModal}
                className="px-6 py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Submit Prayer Request (Confidential or Public)</span>
              </button>
              <button
                onClick={() => setActiveTab(activeTab === 'wall' ? 'scriptures' : 'wall')}
                className="px-6 py-3 rounded-xl bg-[#0A2240] border border-[#0F2C52] hover:border-[#F37016]/50 text-slate-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span>Switch to {activeTab === 'wall' ? 'Praying the Scriptures' : 'Prayer Wall'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-[#06162A] border-b border-[#0F2C52] sticky top-16 sm:top-18 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-3 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('wall')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'wall'
                  ? 'bg-[#F37016] text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-[#0A2240]'
              }`}
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Intercessory Prayer Wall</span>
            </button>

            <button
              onClick={() => setActiveTab('scriptures')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'scriptures'
                  ? 'bg-[#F37016] text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-[#0A2240]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>"We Pray the Scriptures" & Tarrying Timer</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Prayer Wall */}
      {activeTab === 'wall' && (
        <div>
          <PrayerWall onOpenPrayerModal={onOpenPrayerModal} />
        </div>
      )}

      {/* Tab 2: Scriptures & Tarrying Guide */}
      {activeTab === 'scriptures' && (
        <div>
          <ScripturePrayerGuide onOpenPrayerModal={onOpenPrayerModal} />
        </div>
      )}

      {/* Article 3.3 Confidentiality Banner */}
      <section className="py-14 bg-[#06162A] text-slate-100 border-t border-[#0F2C52]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest font-bold">
            <Lock className="w-4 h-4 text-[#F37016]" />
            <span>Strict Pastoral Confidentiality Guaranteed (Article 3.3)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-serif leading-relaxed">
            "Members are bound to respect the confidentiality of personal prayer requests shared by others. Petitions marked as confidential are routed exclusively to Lead Coordinator Roland Tewure Fominyam and designated pastoral prayer stewards."
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenPrayerModal}
              className="px-5 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs shadow-sm transition-all"
            >
              Send a Confidential Request
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
