import React from 'react';
import { 
  Flame, 
  Heart, 
  Calendar, 
  Users, 
  BookOpen, 
  FileText, 
  HandHeart, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  MapPin, 
  CheckCircle2,
  Mail,
  Send,
  Bell
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { FOUNDATIONAL_SCRIPTURES, CHURCH_EVENTS, INITIAL_PRAYER_REQUESTS } from '../data/churchData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenPrayerModal: () => void;
  onOpenMembershipModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenPrayerModal,
  onOpenMembershipModal
}) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero
        onNavigate={onNavigate}
        onOpenPrayerModal={onOpenPrayerModal}
        onOpenMembershipModal={onOpenMembershipModal}
      />

      {/* Welcome & Theological Foundation Section */}
      <section className="py-20 bg-[#06162A] text-slate-100 border-b border-[#0F2C52] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Message from Lead Coordinator */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F37016]/15 border border-[#F37016]/30 text-orange-400 text-xs font-bold uppercase tracking-wider font-mono">
                <Flame className="w-4 h-4 text-[#F37016]" />
                <span>The Place & House of Praise and Worship</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                A Haven of Fervent Prayer, Worship & Sound Doctrine
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-serif">
                "Grace Prayer Group Ministries, The Place & House of Praise and Worship. We pray the scriptures, calling upon the name of the LORD in spirit and in truth, seeking after HIS mercy and grace in pursuit of the righteousness of HIS Kingdom by faith."
              </p>

              <div className="p-5 rounded-2xl bg-[#0A2240] border border-[#F37016]/25 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <span>Biblical Pillar • Matthew 6:33</span>
                </div>
                <p className="text-sm font-serif italic text-orange-100/90">
                  "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you."
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
                >
                  <span>Learn About Our Calling</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('gatherings')}
                  className="px-6 py-3 rounded-xl border border-slate-700 hover:border-orange-400 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
                >
                  View Service Times
                </button>
              </div>
            </div>

            {/* Right: Foundational Scripture Pillars */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 mb-2">
                Foundational Scriptures of GPGM
              </div>

              <div className="bg-[#0A2240] p-6 rounded-2xl border border-[#0F2C52] hover:border-[#F37016]/40 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-orange-400 mb-2">
                  <span className="font-bold">Isaiah 56:7</span>
                  <span className="text-green-400 font-medium">House of Prayer</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-serif italic leading-relaxed">
                  "Even them will I bring to my holy mountain, and make them joyful in my house of prayer... for mine house shall be called an house of prayer for all people."
                </p>
              </div>

              <div className="bg-[#0A2240] p-6 rounded-2xl border border-[#0F2C52] hover:border-[#F37016]/40 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-orange-400 mb-2">
                  <span className="font-bold">Romans 8:26, 34</span>
                  <span className="text-orange-300">Holy Spirit & Christ</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-serif italic leading-relaxed">
                  "Likewise the Spirit also helpeth our infirmities... but the Spirit itself maketh intercession for us with groanings which cannot be uttered."
                </p>
              </div>

              <div className="bg-[#0A2240] p-6 rounded-2xl border border-[#0F2C52] hover:border-[#F37016]/40 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-orange-400 mb-2">
                  <span className="font-bold">Hebrews 11:6</span>
                  <span className="text-green-400 font-medium">Faith Without Wavering</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-serif italic leading-relaxed">
                  "He that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Quick Navigation / Ministry Gateways */}
      <section className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A2240] tracking-tight">
              Explore Grace Prayer Group Ministries
            </h3>
            <p className="text-slate-600 text-sm font-serif italic">
              "Building up yourselves on your most holy faith, praying in the Holy Ghost." — Jude 1:20
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: About Us */}
            <div 
              onClick={() => onNavigate('about')}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-[#F37016] cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37016] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-6 h-6 text-[#F37016]" />
                </div>
                <h4 className="text-lg font-bold font-heading text-[#0A2240] mb-2 group-hover:text-[#F37016] transition-colors">
                  About Us & Faith
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discover our purpose, mission, the 10 core ministry objectives, and biblical statement of faith.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F37016]">
                <span>Read Article I & II</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Prayer Ministry */}
            <div 
              onClick={() => onNavigate('prayer')}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-[#F37016] cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37016] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Heart className="w-6 h-6 text-[#F37016] fill-current" />
                </div>
                <h4 className="text-lg font-bold font-heading text-[#0A2240] mb-2 group-hover:text-[#F37016] transition-colors">
                  Prayer Ministry
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Enter the Intercessory Prayer Wall, submit confidential requests, and pray the scriptures interactively.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F37016]">
                <span>Enter Prayer Wall</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Gatherings & Vigils */}
            <div 
              onClick={() => onNavigate('gatherings')}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-[#F37016] cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37016] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Calendar className="w-6 h-6 text-[#F37016]" />
                </div>
                <h4 className="text-lg font-bold font-heading text-[#0A2240] mb-2 group-hover:text-[#F37016] transition-colors">
                  Gatherings & Vigils
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Join Sunday Worship, Friday Fasting & Warfare, and our solemn Monthly All-Night Prayer Vigils.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F37016]">
                <span>View Full Schedule</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Governance & Articles */}
            <div 
              onClick={() => onNavigate('leadership')}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-[#F37016] cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37016] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6 text-[#F37016]" />
                </div>
                <h4 className="text-lg font-bold font-heading text-[#0A2240] mb-2 group-hover:text-[#F37016] transition-colors">
                  Leadership & Articles
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Meet our pastoral leadership and browse the official Articles of Association (Slides 1 to 23).
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F37016]">
                <span>Inspect Articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Gathering Highlight */}
      <section className="py-16 bg-[#06162A] text-slate-100 border-b border-[#0F2C52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-r from-[#0A2240] via-[#0E2E57] to-[#0A2240] rounded-3xl p-8 sm:p-12 border border-[#F37016]/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F37016]/20 text-orange-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Holy Convocation Highlight</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white">
                Monthly All-Night Prayer Vigil: "Watch & Pray"
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-serif italic">
                "Watch ye therefore, and pray always, that ye may be accounted worthy to escape all these things that shall come to pass, and to stand before the Son of man." — Luke 21:36
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2">
                <span className="flex items-center gap-1.5 text-orange-400 font-medium">
                  <Calendar className="w-4 h-4 text-[#F37016]" />
                  Last Friday of Each Month
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  10:00 PM – 4:00 AM
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  Main Sanctuary & Global Zoom
                </span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('gatherings')}
                className="px-6 py-3.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Full Gatherings Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenPrayerModal}
                className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-orange-400 text-slate-200 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-[#F37016]" />
                <span>Submit Vigil Petition</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Marriage & Family Counseling Ministry Spotlight */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#F37016] text-xs font-bold uppercase tracking-wider font-mono">
                <Heart className="w-4 h-4 fill-current text-[#F37016]" />
                <span>Marriage & Family Counseling • GPGM</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A2240] tracking-tight leading-tight">
                Christ-Centered Marriage & <br className="hidden sm:inline" />
                Biblical Family Guidance
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-serif italic">
                "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh." — Genesis 2:24 (KJV)
              </p>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                At Grace Prayer Group Ministries, we uphold the sanctity and divine covenant of holy matrimony. Whether you are preparing for marriage, navigating seasons of estrangement, or seeking to establish a fervent family prayer altar, our pastoral team provides confidential biblical counseling and intercession.
              </p>

              {/* 3 Pillars checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A2240]">
                    <CheckCircle2 className="w-4 h-4 text-[#F37016]" />
                    <span>Pre-Marital Course</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Foundational preparation before the wedding altar.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A2240]">
                    <CheckCircle2 className="w-4 h-4 text-[#F37016]" />
                    <span>Marital Healing</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Restoring broken trust, peace, and communication.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A2240]">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                    <span>Godly Seed</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Parenting and training righteous generations (Mal 2:15).</p>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('marriage')}
                  id="home-marriage-counseling-cta"
                  className="px-6 py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-2"
                >
                  <span>Explore Marriage Ministry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-3 rounded-xl border border-slate-300 hover:border-[#F37016] text-slate-700 text-xs sm:text-sm font-semibold transition-colors"
                >
                  Schedule Pastoral Session
                </button>
              </div>
            </div>

            {/* Right Quote Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#0A2240] p-7 rounded-3xl border border-[#F37016]/30 text-slate-100 shadow-xl space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-orange-400">
                  <span className="font-bold">Joshua 24:15 (KJV)</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#2E7D32]/20 text-green-400 border border-[#2E7D32]/40">Family Covenant</span>
                </div>

                <p className="text-sm font-serif italic leading-relaxed text-slate-200">
                  "And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve... but as for me and my house, we will serve the LORD."
                </p>

                <div className="p-4 rounded-xl bg-[#06162A] border border-[#0F2C52] space-y-2 text-xs">
                  <div className="font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                    <span>Strict Article 3.3 Pastoral Discretion</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Sessions are conducted privately with Lead Coordinator Roland Tewure Fominyam and ordained pastoral elders, both in-person and via encrypted Zoom.
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('marriage')}
                  className="w-full py-2.5 rounded-xl bg-[#0F2C52] hover:bg-[#163B6B] border border-[#F37016]/40 text-orange-300 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Read Family Scripture & Prayer Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Community Prayer Wall Preview */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F37016] font-mono mb-1">
                House of Prayer For All People (Isaiah 56:7)
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A2240]">
                Recent Petitions on the Prayer Wall
              </h3>
            </div>
            <button
              onClick={() => onNavigate('prayer')}
              className="px-5 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-colors"
            >
              <span>View All Petitions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INITIAL_PRAYER_REQUESTS.slice(0, 3).map((req) => (
              <div
                key={req.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-50 text-[#F37016] border border-orange-200">
                      {req.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {req.createdAt}
                    </span>
                  </div>
                  <p className="text-slate-800 text-xs sm:text-sm leading-relaxed mb-4 font-serif">
                    "{req.request}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-700">{req.name}</span>
                  <span className="text-[#F37016] font-bold">{req.prayingCount} Praying</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Join / Get in Touch Banner */}
      <section className="py-16 bg-[#06162A] text-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            "Where Two or Three Are Gathered Together in My Name..."
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-serif italic leading-relaxed">
            Whether you are seeking intercession, desiring to fellowship with brethren of like precious faith, or willing to support our charitable missions, GPGM welcomes you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us Today</span>
            </button>
            <button
              onClick={() => onNavigate('donate')}
              className="px-6 py-3 rounded-xl bg-[#0A2240] border border-slate-700 hover:border-orange-400 text-slate-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
            >
              <HandHeart className="w-4 h-4 text-orange-400" />
              <span>Support GPGM (Article VI)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
