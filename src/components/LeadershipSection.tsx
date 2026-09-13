import React from 'react';
import { 
  Users, 
  Crown, 
  ShieldCheck, 
  BookOpen, 
  Flame, 
  CheckCircle2, 
  Award,
  FileCheck
} from 'lucide-react';
import { LEADERSHIP_TEAM } from '../data/churchData';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#F37016] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-[#F37016]" />
            <span>Article IV & Slide 22 Ratification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A2240] tracking-tight">
            Leadership & Spiritual Stewardship
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-serif italic">
            "Look ye out among you seven men of honest report, full of the Holy Ghost and wisdom, whom we may appoint over this business. But we will give ourselves continually to prayer, and to the ministry of the word." — Acts 6:3-4
          </p>
        </div>

        {/* Christ as Supreme Head Banner */}
        <div className="mb-14 bg-[#06162A] text-slate-100 rounded-2xl p-8 sm:p-10 border border-[#F37016]/30 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#F37016]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0F2C52] border border-[#F37016]/40 flex items-center justify-center shrink-0 text-[#F37016]">
              <Crown className="w-9 h-9" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400 mb-1">
                Article 4.1 Constitutional Pre-eminence
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">
                Jesus Christ — The Supreme Head of the Church
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-serif italic leading-relaxed">
                "First and foremost, JESUS is the Head of the church and in this dispensation, we are under the influence of the HOLY SPIRIT which does not contradict the scriptures."
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs font-mono text-orange-300/90">
                <span>• Ephesians 5:23</span>
                <span>• Colossians 1:18</span>
                <span>• 1 Peter 5:4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Human Leadership Council (Slides 8, 22) */}
        <div className="mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 text-center font-mono">
            Signatories & Human Servant Leadership Council (Article IV & Slide 22)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* General Overseer */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F37016] flex items-center justify-center mb-4">
                  <Flame className="w-6 h-6 text-[#F37016]" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#F37016] block mb-1">
                  General Overseer & Lead Coordinator
                </span>
                <h4 className="text-xl font-bold font-heading text-[#0A2240] mb-1">
                  Roland Tewure Fominyam
                </h4>
                <div className="text-xs text-slate-500 font-mono mb-4">
                  Acts 6:3-4 • Philippians 4:8
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Vision bearer as guided by the Word of God. Overseeing ministry gatherings, prayer schedules, spiritual direction, and ensuring the teaching of the undiluted Scripture.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="text-[#F37016] font-semibold">Slide 22 Signatory</span>
                <span>Tenure: Non-contestable (Art. 4.3)</span>
              </div>
            </div>

            {/* Assistant Coordinator */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37016] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#F37016]" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#F37016] block mb-1">
                  Assistant Coordinator
                </span>
                <h4 className="text-xl font-bold font-heading text-[#0A2240] mb-1">
                  Celine Atarah Ekanem
                </h4>
                <div className="text-xs text-slate-500 font-mono mb-4">
                  3 John 1:12 • Philippians 4:8
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Supporting the Lead Coordinator in steering group operations, pastoral prayer schedules, member care, and coordinating special meetings and fellowship retreats.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="text-[#F37016] font-semibold">Slide 22 Signatory</span>
                <span>Elected 1-Yr Term (Art. 4.3)</span>
              </div>
            </div>

            {/* Trustee */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-700 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-[#2E7D32]" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#2E7D32] block mb-1">
                  Trustee & Governance Steward
                </span>
                <h4 className="text-xl font-bold font-heading text-[#0A2240] mb-1">
                  Agwa Brenda Chick
                </h4>
                <div className="text-xs text-slate-500 font-mono mb-4">
                  Acts 6:3 • 1 Timothy 1:19
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Safeguarding legal adherence to the Articles of Association, maintaining organizational integrity, and overseeing transparent accountability of all ministry affairs.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="text-[#2E7D32] font-semibold">Slide 22 Signatory</span>
                <span>Trustee Ratification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Biblical Leadership Qualifications (Article 4.1 & 4.2) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h4 className="text-lg font-bold font-heading text-[#0A2240] mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#F37016]" />
            <span>Biblical Standards for GPGM Leadership</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-[#0A2240] block font-heading">
                1. Honest Report & Holy Wisdom
              </span>
              <p className="font-serif italic text-slate-700">
                "Men of honest report, full of the Holy Ghost and wisdom... giving themselves continually to prayer and the ministry of the word." (Acts 6:3-4)
              </p>
            </div>
            <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-[#0A2240] block font-heading">
                2. Purity & Moral Virtues
              </span>
              <p className="font-serif italic text-slate-700">
                "Whatsoever things are true, honest, just, pure, lovely, and of good report; if there be any virtue, think on these things." (Philippians 4:8)
              </p>
            </div>
            <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-[#0A2240] block font-heading">
                3. No Selfish Ambition (Article 4.2)
              </span>
              <p className="font-serif italic text-slate-700">
                "Leaders shall be chosen not motivated by any selfish ambition but in pursuance of righteousness. Elections will be conducted in a transparent manner."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
