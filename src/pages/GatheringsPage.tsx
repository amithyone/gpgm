import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Flame, 
  Sparkles, 
  Video, 
  ShieldAlert, 
  Users, 
  BookOpen, 
  CheckCircle2,
  ArrowRight,
  Heart
} from 'lucide-react';
import { MeetingsSchedule } from '../components/MeetingsSchedule';

interface GatheringsPageProps {
  onNavigate: (page: string) => void;
  onOpenPrayerModal: () => void;
  onOpenMembershipModal: () => void;
}

export const GatheringsPage: React.FC<GatheringsPageProps> = ({
  onNavigate,
  onOpenPrayerModal,
  onOpenMembershipModal
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
            <span className="text-orange-400 font-semibold">Gatherings</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C52] border border-[#F37016]/30 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
              <Calendar className="w-4 h-4 text-[#F37016]" />
              <span>Article V: Holy Convocations & Vigils</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Worship Services, Vigils & Retreats
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-serif italic">
              "Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching." — Hebrews 10:25
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenPrayerModal}
                className="px-6 py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Submit Prayer for Next Service</span>
              </button>
              <button
                onClick={onOpenMembershipModal}
                className="px-6 py-3 rounded-xl bg-[#0A2240] border border-[#0F2C52] hover:border-orange-400 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
              >
                Join Fellowship (Article 3.2)
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Schedule Component */}
      <MeetingsSchedule onOpenPrayerModal={onOpenPrayerModal} />

      {/* How to Connect Online & Guidelines for In-Person Gatherings */}
      <section className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A2240] tracking-tight">
              Global Zoom Fellowship & Protocol
            </h3>
            <p className="text-slate-600 text-sm font-serif italic">
              "For where two or three are gathered together in my name, there am I in the midst of them." — Matthew 18:20
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Global Zoom Broadcast */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37016] flex items-center justify-center">
                <Video className="w-6 h-6 text-[#F37016]" />
              </div>
              <h4 className="text-lg font-bold font-heading text-[#0A2240]">
                Online Global Room Access
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Believers across continents join our Friday Fasting and Monthly All-Night Vigils via our secure Zoom room. Log in 10 minutes prior to begin in quiet reverence and praise.
              </p>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 space-y-1">
                <div><strong>Meeting ID:</strong> Contact office for weekly access</div>
                <div><strong>Passcode:</strong> Available upon membership / inquiry</div>
                <div><strong>Inquiries:</strong> fellowship@gpgministries.org</div>
              </div>
            </div>

            {/* Service Etiquette & Reverence (Article 3.3) */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37016] flex items-center justify-center">
                <ShieldAlert className="w-6 h-6 text-[#F37016]" />
              </div>
              <h4 className="text-lg font-bold font-heading text-[#0A2240]">
                Atmosphere of Holy Reverence
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We maintain an atmosphere of godly order and fervent intercession:
              </p>
              <div className="space-y-2 text-xs text-slate-700 font-serif">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Bring your Holy Bible (KJV preferred) and notebook.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Maintain confidentiality of all shared personal petitions.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Pray the scriptures aloud in agreement and truth.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-[#06162A] text-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold font-heading text-white">
            Have Questions About Attending?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Our pastoral team is ready to welcome you, answer questions about the vigil schedules, or help set up a prayer intercessor for your family.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs shadow-md transition-all"
            >
              Contact Gathering Coordinators
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
