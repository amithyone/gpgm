import React, { useState } from 'react';
import { 
  Heart, 
  Lock, 
  Globe, 
  Send, 
  Plus, 
  Filter, 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck, 
  Sparkles,
  Users
} from 'lucide-react';
import { PrayerRequest } from '../types/church';
import { INITIAL_PRAYER_REQUESTS } from '../data/churchData';

interface PrayerWallProps {
  onOpenPrayerModal: () => void;
}

export const PrayerWall: React.FC<PrayerWallProps> = ({ onOpenPrayerModal }) => {
  const [requests, setRequests] = useState<PrayerRequest[]>(() => {
    try {
      const saved = localStorage.getItem('gpgm_prayer_requests');
      return saved ? JSON.parse(saved) : INITIAL_PRAYER_REQUESTS;
    } catch {
      return INITIAL_PRAYER_REQUESTS;
    }
  });

  const [prayedIds, setPrayedIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('gpgm_prayed_ids');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Healing',
    'Family & Marriage',
    'Spiritual Growth',
    'Deliverance & Protection',
    'Fruit of the Womb',
    'Financial & Career',
    'Thanksgiving'
  ];

  const handlePrayForRequest = (id: string) => {
    if (prayedIds[id]) return;

    const newPrayed = { ...prayedIds, [id]: true };
    setPrayedIds(newPrayed);
    localStorage.setItem('gpgm_prayed_ids', JSON.stringify(newPrayed));

    const updated = requests.map(req => {
      if (req.id === id) {
        return { ...req, prayingCount: req.prayingCount + 1 };
      }
      return req;
    });
    setRequests(updated);
    localStorage.setItem('gpgm_prayer_requests', JSON.stringify(updated));
  };

  const filteredRequests = requests.filter(req => {
    if (req.isConfidential) return false; // Confidential prayer requests are kept for pastoral leadership only
    if (selectedCategory === 'All') return true;
    return req.category === selectedCategory;
  });

  return (
    <section id="prayer-wall" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A2240] text-orange-300 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-current text-orange-400" />
            <span>House of Prayer for All People • Isaiah 56:7</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A2240] tracking-tight">
            Intercessory Prayer Wall
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-serif italic">
            "Bearing one another’s burdens, lifting petitions before the throne of grace, and standing together in prayer."
          </p>
        </div>

        {/* Confidentiality & Assurance Banner (Article 3.3 mandate) */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 text-[#F37016]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F37016]">
                Article 3.3 Confidentiality Standard
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                You can choose to submit your prayer need <strong>Confidentially</strong> (viewable only by our pastoral intercessory team) or share it openly on the Prayer Wall for the community to stand in agreement.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenPrayerModal}
            id="prayer-wall-submit-btn"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Submit Prayer Request</span>
          </button>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold uppercase pr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#F37016] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-[#F37016]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Requests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.map((req) => {
            const hasPrayed = prayedIds[req.id];
            return (
              <div
                key={req.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#F37016] transition-all flex flex-col justify-between"
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

                  <p className="text-slate-800 text-sm leading-relaxed mb-4 font-normal">
                    "{req.request}"
                  </p>

                  {req.scriptureRef && (
                    <div className="flex items-center gap-1.5 text-xs text-[#F37016] font-mono mb-4 bg-orange-50/70 px-2.5 py-1 rounded-md w-fit">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Scripture: {req.scriptureRef}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#0A2240] text-white flex items-center justify-center text-xs font-bold font-mono">
                      {req.name.charAt(0)}
                    </div>
                    <span className="text-xs font-medium text-slate-700">
                      {req.name}
                    </span>
                  </div>

                  <button
                    onClick={() => handlePrayForRequest(req.id)}
                    disabled={hasPrayed}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                      hasPrayed
                        ? 'bg-green-100 text-green-800 border border-green-300'
                        : 'bg-orange-50 hover:bg-orange-100 text-[#D95304] border border-orange-200'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${hasPrayed ? 'fill-green-600 text-green-600' : 'fill-orange-500 text-orange-500'}`} />
                    <span>{hasPrayed ? 'Prayed' : 'I Prayed'}</span>
                    <span className="text-[11px] font-mono px-1.5 py-0.2 bg-white rounded-full text-slate-700">
                      {req.prayingCount}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom encouragement */}
        <div className="mt-12 text-center text-xs text-slate-500 font-serif italic">
          "The effectual fervent prayer of a righteous man availeth much." — James 5:16
        </div>

      </div>
    </section>
  );
};
