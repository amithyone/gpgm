import React, { useState } from 'react';
import { 
  X, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen, 
  Check, 
  ArrowRight,
  Send
} from 'lucide-react';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityCountry, setCityCountry] = useState('');
  const [interestedRole, setInterestedRole] = useState('Member / Intercessor');
  const [acceptedDuties, setAcceptedDuties] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedDuties) return;

    try {
      const existingStr = localStorage.getItem('gpgm_membership_inquiries');
      const existing = existingStr ? JSON.parse(existingStr) : [];
      existing.push({
        id: `mem-${Date.now()}`,
        fullName,
        email,
        phone,
        cityCountry,
        interestedRole,
        date: new Date().toISOString()
      });
      localStorage.setItem('gpgm_membership_inquiries', JSON.stringify(existing));
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setCityCountry('');
    setAcceptedDuties(false);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#06162A]/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#2E7D32]/20 text-[#2E7D32] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-[#2E7D32]" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0A2240]">
              Welcome to the GPGM Fellowship!
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              Brother/Sister <strong>{fullName}</strong>, your expression of interest to join Grace Prayer Group Ministries has been received in accordance with <strong>Article 3.2</strong>.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 text-left">
              <div className="font-bold text-[#0A2240] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Next Step in Admission:</span>
              </div>
              <p>
                Our leadership team (Lead Coordinator Roland Tewure Fominyam & Assistant Coordinator Celine Atarah Ekanem) will reach out via email or phone to extend fellowship, welcome you to prayer meetings, and pair you with an intercessory partner.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs shadow-md transition-colors"
            >
              Close & Praise God
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F37016] mb-2 font-mono">
              <Users className="w-4 h-4 text-[#F37016]" />
              <span>Article III: Membership & Fellowship</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0A2240] mb-2">
              Express Interest to Join GPGM
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
              "Membership is open to all individuals who desire to join GPGM, are willing to abide by its rules, and are committed to the principles of prayer, fellowship, and spiritual growth in line with the scriptures." (Article 3.1)
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#0A2240] block mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Johnathan Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#0A2240] block mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                  />
                </div>
              </div>

              {/* Email & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#0A2240] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#0A2240] block mb-1">
                    City, Country / Region
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. London, UK or Yaounde"
                    value={cityCountry}
                    onChange={(e) => setCityCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                  />
                </div>
              </div>

              {/* Area of Calling / Ministry interest */}
              <div>
                <label className="text-xs font-bold text-[#0A2240] block mb-1">
                  Area of Spiritual Service (Article 1.2 & 4.1)
                </label>
                <select
                  value={interestedRole}
                  onChange={(e) => setInterestedRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                >
                  <option value="Member / Intercessor">Active Member & Intercessor</option>
                  <option value="Prayer Leader">Prayer Leader / Scripture Reader</option>
                  <option value="Worship / Praise Team">Praise & Worship Team</option>
                  <option value="Charity & Community Support">Charitable Relief & Vulnerable Outreach</option>
                  <option value="Technical / Zoom Broadcast">Online Broadcast & Media Coordination</option>
                </select>
              </div>

              {/* Duties of Members Affirmation (Article 3.3) */}
              <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/50 space-y-2">
                <div className="text-xs font-bold text-[#0A2240] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                  <span>Affirmation of Member Duties (Article 3.3)</span>
                </div>
                <div className="text-[11px] text-slate-700 space-y-1 font-serif">
                  <p>• Attend prayer meetings and participate actively in prayer (Luke 18:1).</p>
                  <p>• Respect the confidentiality of personal prayer requests shared by others.</p>
                  <p>• Uphold the spiritual and moral standards as guided by scriptures (Philippians 4:8).</p>
                  <p>• Serve God in spirit and in truth (John 4:24, Acts 6:3).</p>
                </div>
                <label className="flex items-start gap-2 pt-2 border-t border-orange-200 text-xs text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={acceptedDuties}
                    onChange={(e) => setAcceptedDuties(e.target.checked)}
                    className="rounded text-[#F37016] focus:ring-[#F37016] w-4 h-4 mt-0.5"
                  />
                  <span className="font-semibold text-[#0A2240]">
                    I agree to abide by the principles, scriptures, and confidentiality duties of GPGM.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={!acceptedDuties}
                className="w-full py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Expression of Interest (Article 3.2)</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
