import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  Lock, 
  Globe, 
  Send, 
  Check, 
  BookOpen, 
  ShieldCheck 
} from 'lucide-react';
import { PrayerRequest } from '../types/church';

interface PrayerRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrayerAdded?: (newRequest: PrayerRequest) => void;
}

export const PrayerRequestModal: React.FC<PrayerRequestModalProps> = ({
  isOpen,
  onClose,
  onPrayerAdded
}) => {
  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [category, setCategory] = useState<PrayerRequest['category']>('Healing');
  const [request, setRequest] = useState('');
  const [scriptureRef, setScriptureRef] = useState('');
  const [isConfidential, setIsConfidential] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.trim()) return;

    const newReq: PrayerRequest = {
      id: `pr-${Date.now()}`,
      name: isAnonymous ? 'Anonymous Believer' : name.trim() || 'Fellow Intercessor',
      category,
      request: request.trim(),
      isConfidential,
      prayingCount: 1,
      createdAt: 'Just now',
      scriptureRef: scriptureRef.trim() || undefined
    };

    try {
      const existingStr = localStorage.getItem('gpgm_prayer_requests');
      const existing: PrayerRequest[] = existingStr ? JSON.parse(existingStr) : [];
      const updated = [newReq, ...existing];
      localStorage.setItem('gpgm_prayer_requests', JSON.stringify(updated));
    } catch {
      // storage fallback
    }

    if (onPrayerAdded) {
      onPrayerAdded(newReq);
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setIsAnonymous(false);
    setRequest('');
    setScriptureRef('');
    setIsConfidential(false);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#06162A]/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        
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
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0A2240]">
              Petition Lifted in Faith
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              {isConfidential ? (
                <span>
                  Your request has been securely routed to <strong>Lead Coordinator Roland Tewure Fominyam</strong> and the confidential pastoral prayer team. Per Article 3.3, it will be held with utmost discretion.
                </span>
              ) : (
                <span>
                  Your prayer petition is now on the <strong>Intercessory Prayer Wall</strong>. Our community of believers will intercede with you in spirit and truth!
                </span>
              )}
            </p>
            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-[#0A2240] font-serif italic">
              "Call unto me, and I will answer thee, and show thee great and mighty things, which thou knowest not." — Jeremiah 33:3
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs shadow-md transition-colors"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F37016] mb-2 font-mono">
              <Heart className="w-4 h-4 fill-current text-[#F37016]" />
              <span>Grace Prayer Group Ministries Intercession</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0A2240] mb-2">
              Submit Your Prayer Request
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
              In this house of prayer, we bring every burden before the throne of grace. Romans 8:26 assures us that the Spirit helps our infirmities.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Anonymous toggle */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-[#0A2240]">
                    Your Name
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-slate-500 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded text-[#F37016] focus:ring-[#F37016] w-3.5 h-3.5"
                    />
                    <span>Remain Anonymous</span>
                  </label>
                </div>
                {!isAnonymous && (
                  <input
                    type="text"
                    required={!isAnonymous}
                    placeholder="Enter your name or family name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                  />
                )}
              </div>

              {/* Category */}
              <div>
                <label className="text-xs font-bold text-[#0A2240] block mb-1">
                  Prayer Need Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                >
                  <option value="Healing">Healing & Divine Health</option>
                  <option value="Family & Marriage">Family & Marriage Restoration</option>
                  <option value="Spiritual Growth">Spiritual Growth & Prayer Life</option>
                  <option value="Deliverance & Protection">Deliverance & Spiritual Warfare</option>
                  <option value="Fruit of the Womb">Fruit of the Womb & Children</option>
                  <option value="Financial & Career">Financial Breakthrough & Direction</option>
                  <option value="Thanksgiving">Thanksgiving & Praise Report</option>
                </select>
              </div>

              {/* Request Text */}
              <div>
                <label className="text-xs font-bold text-[#0A2240] block mb-1">
                  Prayer Petition Details *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share what you are believing God for in prayer..."
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                />
              </div>

              {/* Optional Scripture anchor */}
              <div>
                <label className="text-xs font-bold text-[#0A2240] block mb-1">
                  Scriptural Anchor (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jeremiah 33:3, Matthew 6:33, Isaiah 53:5"
                  value={scriptureRef}
                  onChange={(e) => setScriptureRef(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
                />
              </div>

              {/* Confidentiality Option (Article 3.3) */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="text-xs font-bold text-[#0A2240] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                  <span>Privacy Preference (Article 3.3)</span>
                </div>
                <div className="space-y-1.5">
                  <label className="flex items-start gap-2 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="confidentiality"
                      checked={!isConfidential}
                      onChange={() => setIsConfidential(false)}
                      className="text-[#F37016] mt-0.5"
                    />
                    <div>
                      <span className="font-semibold text-[#0A2240]">Publish to Community Prayer Wall</span>
                      <p className="text-[11px] text-slate-500">Allow church members to join in agreement and click "I Prayed".</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2 text-xs text-slate-700 cursor-pointer pt-1">
                    <input
                      type="radio"
                      name="confidentiality"
                      checked={isConfidential}
                      onChange={() => setIsConfidential(true)}
                      className="text-[#F37016] mt-0.5"
                    />
                    <div>
                      <span className="font-semibold text-[#0A2240] flex items-center gap-1">
                        <Lock className="w-3 h-3 text-[#F37016]" />
                        <span>Confidential: Pastoral Leadership Only</span>
                      </span>
                      <p className="text-[11px] text-slate-500">Strictly private for General Overseer Roland Tewure Fominyam and core intercessors.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                id="modal-submit-prayer-btn"
                className="w-full py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit to the House of Prayer</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
