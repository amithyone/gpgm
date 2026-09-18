import React from 'react';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowUp
} from 'lucide-react';
import { ChurchLogo } from './ChurchLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrayerModal: () => void;
  onOpenMembershipModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrayerModal,
  onOpenMembershipModal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06162A] text-slate-300 border-t border-[#F37016]/25 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#0F2C52]">
          
          {/* Column 1: Ministry Info */}
          <div className="space-y-4">
            <ChurchLogo size="md" withText={true} title="GPGM" showSubtitle={true} />

            <p className="text-xs text-slate-300 leading-relaxed font-serif">
              "Grace Prayer Group Ministries, The Place & House of Praise and Worship. We pray the scriptures, calling upon the name of the LORD in spirit and in truth, seeking after HIS mercy and grace in pursuit of the righteousness of HIS Kingdom by faith."
            </p>

            <div className="text-[11px] font-mono text-orange-400 pt-1">
              KJV Reference: Isaiah 56:7 • Romans 8:26, 34 • Matthew 6:33
            </div>
          </div>

          {/* Column 2: Ministry Sections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400 font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-orange-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-orange-300 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('prayer')}
                  className="hover:text-orange-300 transition-colors"
                >
                  Prayer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gatherings')}
                  className="hover:text-orange-300 transition-colors"
                >
                  Gatherings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('marriage')}
                  className="hover:text-orange-300 transition-colors"
                >
                  Marriage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('leadership')}
                  className="hover:text-orange-300 transition-colors"
                >
                  Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('membership')}
                  className="hover:text-orange-300 transition-colors"
                >
                  Membership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('donate')}
                  className="hover:text-orange-300 transition-colors"
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-orange-300 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Leadership & Signatories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400 font-mono">
              Leadership & Trustees
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div>
                <span className="text-slate-100 block font-semibold">Jesus Christ</span>
                <span className="text-[11px] text-orange-300/90 font-mono">Supreme Head of the Church (Eph 5:23)</span>
              </div>
              <div>
                <span className="text-slate-100 block font-semibold">Roland Tewure Fominyam</span>
                <span className="text-[11px] text-slate-400">Lead Coordinator / General Overseer</span>
              </div>
              <div>
                <span className="text-slate-100 block font-semibold">Celine Atarah Ekanem</span>
                <span className="text-[11px] text-slate-400">Assistant Coordinator</span>
              </div>
              <div>
                <span className="text-slate-100 block font-semibold">Agwa Brenda Chick</span>
                <span className="text-[11px] text-slate-400">Trustee & Governance Steward</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenMembershipModal}
                className="text-xs font-semibold text-orange-400 hover:text-orange-300 hover:underline flex items-center gap-1"
              >
                <span>Express Interest in Membership (Art. 3.2)</span>
              </button>
            </div>
          </div>

          {/* Column 4: Contact & Fellowship */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400 font-mono">
              Fellowship & Inquiries
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-orange-400" />
                <span className="font-mono text-slate-100">gpgministries.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>fellowship@gpgministries.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>Intercessory Prayer Line: 24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>Main Sanctuary & Global Zoom Convocations</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenPrayerModal}
                className="w-full py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Need Prayer Today?</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Grace Prayer Group Ministries (GPGM) • gpgministries.org. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-green-400 font-medium">🕊️ Article 9.1: Non-Discrimination</span>
            <span>•</span>
            <span className="text-orange-300">Article 3.3: Prayer Confidentiality</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0F2C52] hover:bg-[#163B6B] text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
