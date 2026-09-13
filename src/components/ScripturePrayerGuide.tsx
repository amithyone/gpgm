import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  BookOpen, 
  Play, 
  Pause, 
  RotateCcw, 
  Copy, 
  Check, 
  Sparkles, 
  Volume2,
  Flame,
  ArrowRight
} from 'lucide-react';
import { SCRIPTURE_PRAYER_GUIDES } from '../data/churchData';

interface ScripturePrayerGuideProps {
  onOpenPrayerModal: () => void;
}

export const ScripturePrayerGuide: React.FC<ScripturePrayerGuideProps> = ({
  onOpenPrayerModal
}) => {
  const [selectedGuideId, setSelectedGuideId] = useState(SCRIPTURE_PRAYER_GUIDES[0].id);
  const [copied, setCopied] = useState(false);
  
  // Timer State for interactive prayer session
  const [timerDuration, setTimerDuration] = useState<number>(180); // default 3 min (180s)
  const [timeLeft, setTimeLeft] = useState<number>(180);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const currentGuide = SCRIPTURE_PRAYER_GUIDES.find(g => g.id === selectedGuideId) || SCRIPTURE_PRAYER_GUIDES[0];

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const handleSelectGuide = (id: string) => {
    setSelectedGuideId(id);
    setIsTimerRunning(false);
    setTimeLeft(timerDuration);
    setCopied(false);
  };

  const handleSetDuration = (seconds: number) => {
    setTimerDuration(seconds);
    setTimeLeft(seconds);
    setIsTimerRunning(false);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimeLeft(timerDuration);
  };

  const handleCopyPrayer = () => {
    const textToCopy = `[Grace Prayer Group Ministries - Praying The Scriptures]\n\nScripture (${currentGuide.scriptureRef}):\n"${currentGuide.verseKJV}"\n\nPrayer Point:\n${currentGuide.prayerPoint}\n\nConfession of Faith:\n"${currentGuide.confession}"\n\ngpgministries.org`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercentage = ((timerDuration - timeLeft) / timerDuration) * 100;

  return (
    <section id="scripture-prayer" className="py-20 bg-[#06162A] text-slate-100 relative overflow-hidden border-b border-[#0F2C52]">
      {/* Decorative ambient backdrop */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#F37016]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-[#2E7D32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F2C52] border border-[#F37016]/30 text-orange-300 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>Core Ministry Calling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            "We Pray the Scriptures"
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-serif italic">
            "Calling upon the name of the LORD in spirit and in truth, seeking after HIS mercy and grace in pursuit of the righteousness of HIS Kingdom by faith."
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Topics Selector (4 Cols) */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-400/90 mb-3 px-1">
              Select Scriptural Prayer Theme:
            </div>
            {SCRIPTURE_PRAYER_GUIDES.map((guide) => {
              const isSelected = guide.id === currentGuide.id;
              return (
                <button
                  key={guide.id}
                  onClick={() => handleSelectGuide(guide.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#0F2C52] border-[#F37016] text-white shadow-md'
                      : 'bg-[#0A2240] border-[#0F2C52] text-slate-300 hover:bg-[#0F2C52] hover:border-slate-600'
                  }`}
                >
                  <div>
                    <div className={`text-xs font-mono font-semibold mb-1 ${
                      isSelected ? 'text-orange-300' : 'text-slate-400'
                    }`}>
                      {guide.scriptureRef}
                    </div>
                    <div className="font-heading text-sm font-bold leading-snug">
                      {guide.title}
                    </div>
                  </div>
                  <BookOpen className={`w-4 h-4 shrink-0 mt-1 ${
                    isSelected ? 'text-orange-400' : 'text-slate-500'
                  }`} />
                </button>
              );
            })}

            <div className="pt-4">
              <button
                onClick={onOpenPrayerModal}
                className="w-full p-4 rounded-xl border border-dashed border-[#F37016]/40 bg-[#F37016]/5 hover:bg-[#F37016]/10 text-orange-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Heart className="w-4 h-4 fill-current text-[#F37016]" />
                <span>Submit a Personal Prayer Need</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Scriptural Reader & Focus Space (8 Cols) */}
          <div className="lg:col-span-8 bg-[#0A2240] rounded-2xl border border-[#0F2C52] p-6 sm:p-8 shadow-xl relative">
            
            {/* Header bar of reader */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-[#0F2C52]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 block mb-1">
                  Biblical Anchor • KJV
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {currentGuide.title}
                </h3>
              </div>
              <button
                onClick={handleCopyPrayer}
                className="px-3.5 py-2 rounded-lg bg-[#06162A] hover:bg-[#0F2C52] text-slate-200 text-xs font-medium flex items-center gap-1.5 border border-[#0F2C52] transition-colors"
                title="Copy scripture and prayer point"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Prayer</span>
                  </>
                )}
              </button>
            </div>

            {/* Scripture Verse Box */}
            <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-[#06162A] via-[#0F2C52] to-[#06162A] border-l-4 border-[#F37016] border-y border-r border-[#0F2C52]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-orange-400 tracking-wider uppercase font-mono">
                  {currentGuide.scriptureRef}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">King James Version</span>
              </div>
              <p className="text-white text-base sm:text-lg font-serif italic leading-relaxed">
                "{currentGuide.verseKJV}"
              </p>
            </div>

            {/* Prayer Point */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-300 font-mono">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>Scriptural Intercession / Prayer Point:</span>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed bg-[#06162A] p-5 rounded-xl border border-[#0F2C52]">
                {currentGuide.prayerPoint}
              </p>
            </div>

            {/* Confession of Faith */}
            <div className="mb-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-400 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Confession of Faith:</span>
              </div>
              <div className="text-slate-100 text-sm sm:text-base font-serif italic bg-[#2E7D32]/20 p-4 rounded-xl border border-[#2E7D32]/40">
                "{currentGuide.confession}"
              </div>
            </div>

            {/* Interactive Prayer Meditation Timer */}
            <div className="p-5 rounded-xl bg-[#06162A] border border-[#0F2C52]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-3">
                <div>
                  <div className="text-xs font-bold text-white font-heading">
                    Sacred Prayer Timer & Intercession Tarrying
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Dedicate focused time praying this scripture before the Lord
                  </div>
                </div>

                {/* Duration options */}
                <div className="flex items-center gap-1.5">
                  {[60, 180, 300].map((sec) => (
                    <button
                      key={sec}
                      onClick={() => handleSetDuration(sec)}
                      className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors ${
                        timerDuration === sec
                          ? 'bg-[#F37016] text-white font-bold'
                          : 'bg-[#0A2240] text-slate-300 hover:bg-[#0F2C52]'
                      }`}
                    >
                      {sec / 60}m
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-[#0A2240] rounded-full overflow-hidden mb-4">
                <div 
                  className="h-full bg-gradient-to-r from-[#F37016] to-[#FBAE4B] transition-all duration-300 ease-linear"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="font-mono text-2xl font-bold text-orange-400 tracking-wider">
                  {formatTime(timeLeft)}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                      isTimerRunning
                        ? 'bg-[#D95304] text-white'
                        : 'bg-[#F37016] hover:bg-[#D95304] text-white shadow-md'
                    }`}
                  >
                    {isTimerRunning ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Pause Prayer</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Start Tarrying in Prayer</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleResetTimer}
                    className="p-2 rounded-lg bg-[#0A2240] hover:bg-[#0F2C52] text-slate-300 transition-colors"
                    title="Reset timer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {timeLeft === 0 && (
                <div className="mt-3 p-3 rounded-lg bg-[#2E7D32]/20 border border-[#2E7D32]/40 text-green-300 text-xs text-center font-medium">
                  Amen! May the Lord who answers prayer fulfill every petition according to His glorious riches in Christ Jesus.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
