import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen, 
  Heart, 
  Send, 
  Check, 
  ArrowRight,
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';

interface MembershipPageProps {
  onNavigate: (page: string) => void;
  onOpenPrayerModal: () => void;
}

export const MembershipPage: React.FC<MembershipPageProps> = ({
  onNavigate,
  onOpenPrayerModal
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityCountry, setCityCountry] = useState('');
  const [interestedRole, setInterestedRole] = useState('Member / Intercessor');
  const [acceptedDuties, setAcceptedDuties] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
  };

  const faqs = [
    {
      q: 'Who is eligible to become a member of GPGM?',
      a: 'Per Article 3.1, membership is open to all individuals who desire to join GPGM, are willing to abide by its rules, and are committed to the principles of prayer, fellowship, and spiritual growth in line with the Holy Scriptures.'
    },
    {
      q: 'Are there membership fees or dues to join?',
      a: 'No. Salvation and fellowship in Jesus Christ are freely given. GPGM collects voluntary donations only to support operational costs, charity, and prayer retreats per Article VI. No member is compelled to give.'
    },
    {
      q: 'Can I be an online member if I live abroad?',
      a: 'Yes! GPGM has active intercessors and attendees who connect from various nations via our Global Zoom Fellowship for weekly prayer, fasting meetings, and monthly all-night vigils.'
    },
    {
      q: 'What is the confidentiality rule (Article 3.3)?',
      a: 'Every member must hold in strictest confidence all personal prayer requests, testimonies, or vulnerabilities shared during ministry meetings. Breaking confidentiality harms the body and breaches the fear of God.'
    }
  ];

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
              className="hover:text-orange-400 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#F37016] font-semibold">Membership</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-[#F37016]/30 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
              <Users className="w-4 h-4 text-[#F37016]" />
              <span>Article III: Membership & Christian Fellowship</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Join Grace Prayer Group Ministries
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-serif italic">
              "And they continued stedfastly in the apostles' doctrine and fellowship, and in breaking of bread, and in prayers." — Acts 2:42
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#application-form"
                className="px-6 py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Express Interest to Join</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate('gatherings')}
                className="px-6 py-3 rounded-xl border border-slate-700 hover:border-[#F37016] text-slate-200 text-xs sm:text-sm font-semibold transition-all"
              >
                View Gathering Times
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Article 3.1 & 3.3 Core Doctrines of Membership */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F37016] font-mono">
              Article III Constitutional Provisions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A2240]">
              The Privileges & Sacred Duties of Membership
            </h2>
            <p className="text-slate-600 text-sm font-serif italic">
              "That there should be no schism in the body; but that the members should have the same care one for another." — 1 Corinthians 12:25
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* 3.1 Eligibility */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F37016] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#F37016]" />
                </div>
                <span className="text-[11px] font-mono text-[#F37016] font-bold uppercase block mb-1">
                  Article 3.1
                </span>
                <h3 className="text-xl font-bold font-heading text-[#0A2240] mb-2">
                  Open Eligibility
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-serif">
                  Membership is open to every believer desiring to call upon the name of the Lord in spirit and truth, committed to mutual fellowship, and willing to grow in grace.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-[#2E7D32] font-mono font-semibold">
                No partiality • Acts 10:34
              </div>
            </div>

            {/* 3.2 Admission */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F37016] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#F37016]" />
                </div>
                <span className="text-[11px] font-mono text-[#F37016] font-bold uppercase block mb-1">
                  Article 3.2
                </span>
                <h3 className="text-xl font-bold font-heading text-[#0A2240] mb-2">
                  Admission Procedure
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-serif">
                  Applicants submit an expression of interest to the leadership. Prospective members are welcomed into prayer meetings, assigned pastoral intercessory mentors, and formally received.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-[#F37016] font-mono font-semibold">
                Warm Pastoral Welcome
              </div>
            </div>

            {/* 3.3 Duties */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-50 text-[#2E7D32] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-[#2E7D32]" />
                </div>
                <span className="text-[11px] font-mono text-[#2E7D32] font-bold uppercase block mb-1">
                  Article 3.3
                </span>
                <h3 className="text-xl font-bold font-heading text-[#0A2240] mb-2">
                  Member Duties & Discretion
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-serif">
                  Members faithfully attend prayer gatherings, uphold strict confidentiality regarding brethren's burdens, and reflect the righteousness of Jesus Christ in speech and conduct.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-[#2E7D32] font-mono font-semibold">
                Philippians 4:8 • Luke 18:1
              </div>
            </div>

          </div>

          {/* Interactive Application Form */}
          <div id="application-form" className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-[#2E7D32] flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-[#2E7D32]" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#0A2240]">
                  Expression of Interest Received!
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                  God bless you, <strong>{fullName}</strong>. Your application to join Grace Prayer Group Ministries has been logged under Article 3.2. Lead Coordinator Roland Tewure Fominyam and Assistant Coordinator Celine Atarah Ekanem will reach out to extend fellowship.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-serif italic">
                  "Now therefore ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God." — Ephesians 2:19
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs shadow-xs transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F37016] mb-2 font-mono">
                  <Sparkles className="w-4 h-4 text-[#F37016]" />
                  <span>Article 3.2 Membership Form</span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#0A2240] mb-2">
                  Apply for GPGM Membership
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                  Join our spiritual family to intercede, grow in the knowledge of Christ, and stand together in faith.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#0A2240] block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Roland / Sarah Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#0A2240] block mb-1">
                        Phone / WhatsApp *
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#0A2240] block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="youremail@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#0A2240] block mb-1">
                        City & Country *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. London, UK or Douala"
                        value={cityCountry}
                        onChange={(e) => setCityCountry(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#0A2240] block mb-1">
                      Ministry Area of Interest
                    </label>
                    <select
                      value={interestedRole}
                      onChange={(e) => setInterestedRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                    >
                      <option value="Member / Intercessor">General Member & Intercessor</option>
                      <option value="Prayer Leader">Prayer & Scripture Exhorter</option>
                      <option value="Worship & Music">Praise & Worship Singer/Musician</option>
                      <option value="Charity & Vulnerable Outreach">Charitable & Welfare Outreach (Art. 1.2)</option>
                      <option value="Zoom / Media Admin">Global Zoom & Broadcast Administration</option>
                    </select>
                  </div>

                  <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/70 space-y-2">
                    <div className="text-xs font-bold text-[#0A2240] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                      <span>Article 3.3 Affirmation of Member Duties</span>
                    </div>
                    <p className="text-[11px] text-slate-700 leading-relaxed font-serif">
                      I solemnly commit to attend gatherings, stand in fervent prayer, protect the confidentiality of all members' petitions, and order my life according to the scriptures (Philippians 4:8).
                    </p>
                    <label className="flex items-start gap-2 pt-2 border-t border-orange-200 text-xs text-slate-800 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={acceptedDuties}
                        onChange={(e) => setAcceptedDuties(e.target.checked)}
                        className="rounded text-[#F37016] focus:ring-[#F37016] w-4 h-4 mt-0.5"
                      />
                      <span className="font-semibold text-[#0A2240]">
                        I agree to abide by the principles and scriptures of GPGM.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!acceptedDuties}
                    className="w-full py-3.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Membership Expression of Interest</span>
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Membership FAQ Section */}
      <section className="py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <h3 className="text-2xl font-bold font-heading text-[#0A2240]">
              Frequently Asked Questions About Membership
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-serif italic">
              Clear biblical answers based on our Articles of Association
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold font-heading text-[#0A2240]">
                  <HelpCircle className="w-4 h-4 text-[#F37016] shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
