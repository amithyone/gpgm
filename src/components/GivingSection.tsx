import React, { useState } from 'react';
import { 
  HandHeart, 
  ShieldCheck, 
  FileText, 
  Heart, 
  Check, 
  Copy, 
  Sparkles, 
  Gift,
  Building
} from 'lucide-react';

export const GivingSection: React.FC = () => {
  const [selectedFund, setSelectedFund] = useState<'general' | 'charity' | 'retreats'>('general');
  const [amount, setAmount] = useState<string>('50');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedBank, setCopiedBank] = useState<boolean>(false);

  const predefinedAmounts = ['25', '50', '100', '250', '500'];

  const handleCopyAccount = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const activeAmount = customAmount || amount;

  return (
    <section id="giving" className="py-20 bg-[#06162A] text-slate-100 border-b border-[#0F2C52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F2C52] border border-[#F37016]/30 text-orange-300 text-xs font-bold uppercase tracking-wider">
            <HandHeart className="w-3.5 h-3.5 text-[#F37016]" />
            <span>Article VI: Finances & Transparent Stewardship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Giving & Kingdom Stewardship
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-serif italic">
            "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver." — 2 Corinthians 9:7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left: Article VI Principles & Bank Details (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Principles of Article VI */}
            <div className="bg-[#0A2240] p-6 sm:p-8 rounded-2xl border border-[#0F2C52] space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-400 font-mono flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>Article 6.1 & 6.2 Constitutional Guarantees</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-white">
                100% Accountable & Voluntary Support
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-serif">
                "The GPGM may collect voluntary donations from its members to support its activities and mission. These funds may be used for operational costs, venue rental, meeting materials, outreach, and charitable relief for vulnerable persons as led by the HOLY SPIRIT."
              </p>
              
              <div className="space-y-2 pt-2 border-t border-[#0F2C52] text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F37016]" />
                  <span><strong>Expenditure Accountability:</strong> Every expense is documented and verified.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                  <span><strong>Member Reporting:</strong> Periodic financial transparency reports delivered to members.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F37016]" />
                  <span><strong>Charity Focus:</strong> Direct relief to distressed, widowed, and vulnerable persons.</span>
                </div>
              </div>
            </div>

            {/* Direct Bank / Online Wire Details */}
            <div className="bg-gradient-to-r from-[#0A2240] via-[#0E2E57] to-[#0A2240] p-6 sm:p-8 rounded-2xl border border-[#F37016]/30 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-300 uppercase">
                  <Building className="w-4 h-4 text-[#F37016]" />
                  <span>Official Ministry Giving Channels</span>
                </div>
                <button
                  onClick={() => handleCopyAccount("Grace Prayer Group Ministries - gpgministries.org")}
                  className="text-xs text-slate-300 hover:text-orange-300 flex items-center gap-1 transition-colors"
                >
                  {copiedBank ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedBank ? 'Copied' : 'Copy Info'}</span>
                </button>
              </div>

              <div className="space-y-3 font-mono text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-[#0F2C52]">
                  <span className="text-slate-400">Account Name:</span>
                  <span className="text-white font-bold">Grace Prayer Group Ministries</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#0F2C52]">
                  <span className="text-slate-400">Designation / Ref:</span>
                  <span className="text-orange-300">Tithe / Offering / Charity Relief</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#0F2C52]">
                  <span className="text-slate-400">Inquiries:</span>
                  <span className="text-slate-200">giving@gpgministries.org</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 font-serif italic pt-1">
                Official receipts and donation acknowledgement letters are issued for all voluntary gifts.
              </p>
            </div>

          </div>

          {/* Right: Online Giving & Seed Pledge Simulator (6 Cols) */}
          <div className="lg:col-span-6 bg-[#0A2240] p-6 sm:p-8 rounded-2xl border border-[#0F2C52] shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-green-500/20 text-green-400 border border-green-500/40 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-heading text-white">
                  God Bless Your Generous Heart!
                </h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{donorName || 'Beloved in Christ'}</strong>. Your voluntary seed of <strong>${activeAmount}</strong> for <strong>{selectedFund === 'charity' ? 'Charitable Relief' : selectedFund === 'retreats' ? 'Retreats & Vigils' : 'General Ministry Operations'}</strong> has been registered.
                </p>
                <div className="p-4 rounded-xl bg-[#06162A] border border-[#0F2C52] text-xs text-orange-300/90 font-serif italic">
                  "Now he that ministereth seed to the sower both minister bread for your food, and multiply your seed sown, and increase the fruits of your righteousness." — 2 Corinthians 9:10
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setDonorName('');
                    setDonorEmail('');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white text-xs font-bold transition-colors"
                >
                  Give Another Gift
                </button>
              </div>
            ) : (
              <form onSubmit={handleDonationSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-2 font-mono">
                    Select Cause / Designation:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedFund('general')}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        selectedFund === 'general'
                          ? 'bg-[#F37016] text-white border-[#F37016] font-bold'
                          : 'bg-[#06162A] border-[#0F2C52] text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      General Operations
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedFund('charity')}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        selectedFund === 'charity'
                          ? 'bg-[#F37016] text-white border-[#F37016] font-bold'
                          : 'bg-[#06162A] border-[#0F2C52] text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      Vulnerable Relief
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedFund('retreats')}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        selectedFund === 'retreats'
                          ? 'bg-[#F37016] text-white border-[#F37016] font-bold'
                          : 'bg-[#06162A] border-[#0F2C52] text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      Retreats & Vigils
                    </button>
                  </div>
                </div>

                {/* Amount selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-2 font-mono">
                    Select Donation Amount ($ USD):
                  </label>
                  <div className="grid grid-cols-5 gap-2 mb-3">
                    {predefinedAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setAmount(amt);
                          setCustomAmount('');
                        }}
                        className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                          amount === amt && !customAmount
                            ? 'bg-[#F37016] text-white border-[#F37016]'
                            : 'bg-[#06162A] border-[#0F2C52] text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    placeholder="Or enter custom amount ($)"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      if (e.target.value) setAmount(e.target.value);
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#06162A] border border-[#0F2C52] text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#F37016]"
                  />
                </div>

                {/* Donor Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-medium text-slate-400 block mb-1">
                      Full Name (or Anonymous):
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Brother Roland"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#06162A] border border-[#0F2C52] text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#F37016]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-400 block mb-1">
                      Email Address:
                    </label>
                    <input
                      type="email"
                      placeholder="For your giving receipt"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#06162A] border border-[#0F2C52] text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#F37016]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  id="giving-submit-btn"
                  className="w-full py-3.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <HandHeart className="w-4 h-4 fill-current" />
                  <span>Give ${activeAmount || '50'} Securely</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Protected under GPGM Financial Transparency Code • Article VI.2
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
