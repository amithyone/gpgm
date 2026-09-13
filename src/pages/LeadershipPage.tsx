import React from 'react';
import { 
  Users, 
  Crown, 
  ShieldCheck, 
  FileText, 
  Flame, 
  Award, 
  BookOpen, 
  CheckCircle2,
  ArrowRight,
  PenTool
} from 'lucide-react';
import { LeadershipSection } from '../components/LeadershipSection';
import { ArticlesOfAssociationViewer } from '../components/ArticlesOfAssociationViewer';

interface LeadershipPageProps {
  onNavigate: (page: string) => void;
  onOpenMembershipModal: () => void;
  onOpenPrayerModal: () => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({
  onNavigate,
  onOpenMembershipModal,
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
            <span className="text-orange-400 font-semibold">Leadership</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C52] border border-[#F37016]/30 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
              <Crown className="w-4 h-4 text-[#F37016]" />
              <span>Article IV & Constitutional Governance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Leadership & Articles of Association
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-serif italic">
              "JESUS is the Head of the church and in this dispensation, we are under the influence of the HOLY SPIRIT which does not contradict the scriptures." — Article 4.1
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenMembershipModal}
                className="px-6 py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>Join Under Godly Stewardship</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-xl bg-[#0A2240] border border-[#0F2C52] hover:border-orange-400 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
              >
                Inquire with Pastoral Office
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Articles of Association Full Viewer */}
      <ArticlesOfAssociationViewer />

      {/* Slide 22 Signatories Verification Section */}
      <section className="py-14 bg-[#06162A] text-slate-100 border-t border-[#0F2C52]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest font-bold">
            <PenTool className="w-4 h-4 text-[#F37016]" />
            <span>Slide 22 Foundational Ratification</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
            Constitutionally Certified by Ministry Signatories
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-serif max-w-2xl mx-auto leading-relaxed">
            Signed and sealed by Roland Tewure Fominyam (General Overseer & Lead Coordinator), Celine Atarah Ekanem (Assistant Coordinator), and Agwa Brenda Chick (Trustee).
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('donate')}
              className="px-6 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs shadow-md transition-all"
            >
              Support GPGM Stewardship (Article VI)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
