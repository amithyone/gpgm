import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Heart, 
  MessageSquare, 
  ShieldCheck, 
  Users, 
  Video,
  Sparkles,
  HelpCircle,
  Lock,
  ArrowRight
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onOpenPrayerModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenPrayerModal
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Pastoral Guidance');
  const [message, setMessage] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const existingStr = localStorage.getItem('gpgm_contact_messages');
      const existing = existingStr ? JSON.parse(existingStr) : [];
      existing.push({
        id: `msg-${Date.now()}`,
        name,
        email,
        phone,
        topic,
        message,
        isUrgent,
        date: new Date().toISOString()
      });
      localStorage.setItem('gpgm_contact_messages', JSON.stringify(existing));
    } catch {
      // ignore
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setIsUrgent(false);
    setSubmitted(false);
  };

  const contactFaqs = [
    {
      q: 'How fast will someone respond to my prayer petition or message?',
      a: 'Our pastoral intercessory team reviews messages daily. For urgent prayer needs, petitions are brought before the Lord during our morning and evening intercessory watches.'
    },
    {
      q: 'Is my message confidential?',
      a: 'Yes. In strict compliance with Article 3.3 of our Articles of Association, pastoral counseling, spiritual questions, and personal prayer burdens are handled with utmost confidentiality by ordained leadership.'
    },
    {
      q: 'How can I connect with Lead Coordinator Roland Tewure Fominyam?',
      a: 'You can submit a message with the topic "Pastoral Guidance" or email office@gpgministries.org directly. Pastoral appointments are scheduled following our prayer vigils and Sunday convocations.'
    },
    {
      q: 'Where do you meet physically, and can I attend online?',
      a: 'We host weekly gatherings both at our main sanctuary and via our Global Online Zoom Fellowship. Contact us for the weekly meeting link and security passcode.'
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
              className="hover:text-orange-300 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-orange-400 font-semibold">Contact</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C52] border border-[#F37016]/30 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
              <Mail className="w-4 h-4 text-[#F37016]" />
              <span>Connect With GPG Ministries</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Contact & Pastoral Inquiries
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-serif italic">
              "Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much." — James 5:16
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenPrayerModal}
                className="px-6 py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Immediate Prayer Need?</span>
              </button>
              <button
                onClick={() => onNavigate('gatherings')}
                className="px-6 py-3 rounded-xl bg-[#0A2240] border border-[#0F2C52] hover:border-orange-400 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
              >
                Gathering Times & Locations
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 5 Cols: Contact Details & Channels */}
            <div className="lg:col-span-5 space-y-8">
              
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#F37016] font-mono mb-1">
                  Get in Touch
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A2240]">
                  Grace Prayer Group Ministries (GPGM)
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 font-serif">
                  "The Place & House of Praise and Worship." We are here to pray with you, counsel you from the undiluted Word of God, and welcome you into fellowship.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                
                {/* 24/7 Prayer Line */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F37016] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#F37016]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold font-heading text-[#0A2240]">
                      24/7 Intercessory Prayer Line
                    </h4>
                    <p className="text-xs text-slate-500 font-serif">
                      For urgent prayer petitions & emergency warfare intercession:
                    </p>
                    <div className="text-xs font-mono font-bold text-[#F37016] pt-1">
                      +1 (800) 555-GPGM • +1 (800) 555-4746
                    </div>
                  </div>
                </div>

                {/* Email Channels */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F37016] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#F37016]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold font-heading text-[#0A2240]">
                      Official Ministry Inquiries
                    </h4>
                    <p className="text-xs text-slate-500 font-serif">
                      Reach our general office, pastoral leaders, or fellowship team:
                    </p>
                    <div className="text-xs font-mono text-slate-700 space-y-0.5 pt-1">
                      <div><strong>Office:</strong> office@gpgministries.org</div>
                      <div><strong>Prayer:</strong> prayer@gpgministries.org</div>
                      <div><strong>Fellowship:</strong> fellowship@gpgministries.org</div>
                    </div>
                  </div>
                </div>

                {/* Online Zoom Broadcast */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F37016] flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5 text-[#F37016]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold font-heading text-[#0A2240]">
                      Global Zoom Fellowship
                    </h4>
                    <p className="text-xs text-slate-500 font-serif">
                      Online access available for Friday Fasting & Monthly All-Night Vigils:
                    </p>
                    <div className="text-xs font-mono text-[#F37016] pt-1">
                      Zoom Passcodes sent upon registration
                    </div>
                  </div>
                </div>

                {/* Marriage & Family Counseling Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0A2240] to-[#06162A] text-slate-100 border border-[#F37016]/30 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F37016]/20 text-orange-400 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 fill-current text-[#F37016]" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h4 className="text-sm font-bold font-heading text-white flex items-center justify-between">
                      <span>Marriage & Family Counseling</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#2E7D32]/20 text-green-400 border border-[#2E7D32]/40">Free</span>
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-serif">
                      Seeking pre-marital guidance, marital healing, or family prayer? Explore our dedicated counseling ministry.
                    </p>
                    <button
                      type="button"
                      onClick={() => onNavigate('marriage')}
                      className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1 pt-1"
                    >
                      <span>Visit Marriage Ministry Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Confidentiality Notice */}
                <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 flex items-start gap-3">
                  <Lock className="w-4 h-4 text-[#F37016] shrink-0 mt-0.5" />
                  <div className="text-[11px] text-[#0A2240] font-serif leading-relaxed">
                    <strong>Article 3.3 Discretion:</strong> All communications, sensitive petitions, and family prayer requests are kept in sacred pastoral confidence.
                  </div>
                </div>

              </div>

            </div>

            {/* Right 7 Cols: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-800 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-green-700" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-[#0A2240]">
                      Message Sent Successfully
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                      Thank you, <strong>{name}</strong>. Your inquiry regarding <strong>{topic}</strong> has been received by Grace Prayer Group Ministries. Our pastoral team will be in touch shortly.
                    </p>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-serif italic">
                      "And whatsoever ye shall ask in my name, that will I do, that the Father may be glorified in the Son." — John 14:13
                    </div>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs shadow-xs transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F37016] mb-2 font-mono">
                      <MessageSquare className="w-4 h-4 text-[#F37016]" />
                      <span>Send Us a Message</span>
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-[#0A2240] mb-2">
                      How May We Serve You in the Lord?
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                      Fill out this form and our leadership team will respond with prayerful care.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Brother Roland or Sister Mary"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1">
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
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1">
                            Phone / WhatsApp Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1">
                            Inquiry Category *
                          </label>
                          <select
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                          >
                            <option value="Marriage & Family Counseling">Marriage & Family Counseling (Article 3.3)</option>
                            <option value="Pre-Marital Preparation">Pre-Marital Preparation & Counseling</option>
                            <option value="Pastoral Guidance">Pastoral Guidance & Counseling</option>
                            <option value="Confidential Prayer Burden">Confidential Prayer Burden (Art. 3.3)</option>
                            <option value="Membership Question">Membership Inquiry (Art. 3.1-3.2)</option>
                            <option value="Vigil / Service Information">Gathering / Vigil Zoom Access</option>
                            <option value="Testimony & Praise Report">Testimony & Praise Report</option>
                            <option value="Stewardship & Giving">Stewardship & Wire Inquiries (Art. VI)</option>
                            <option value="General Inquiry">General Ministry Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Message or Prayer Details *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Please share how we can stand in faith with you or what you'd like to discuss..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                        />
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isUrgent}
                            onChange={(e) => setIsUrgent(e.target.checked)}
                            className="rounded text-[#F37016] focus:ring-[#F37016] w-4 h-4"
                          />
                          <span className="font-medium text-[#F37016]">
                            Mark as Urgent Intercession Need
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message to Ministry Office</span>
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Contact Questions */}
      <section className="py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <h3 className="text-2xl font-bold font-heading text-[#0A2240]">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-serif italic">
              Learn more about how to communicate with Grace Prayer Group Ministries
            </p>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, i) => (
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
