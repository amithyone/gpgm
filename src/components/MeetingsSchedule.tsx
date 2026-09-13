import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Flame, 
  Sparkles, 
  BookOpen, 
  ShieldAlert, 
  Share2, 
  Check, 
  Video,
  Bell
} from 'lucide-react';
import { CHURCH_EVENTS } from '../data/churchData';

interface MeetingsScheduleProps {
  onOpenPrayerModal: () => void;
}

export const MeetingsSchedule: React.FC<MeetingsScheduleProps> = ({ onOpenPrayerModal }) => {
  const [copiedEventId, setCopiedEventId] = useState<string | null>(null);
  const [subscribedEventId, setSubscribedEventId] = useState<string | null>(null);

  const handleShareEvent = (event: typeof CHURCH_EVENTS[0]) => {
    const text = `Join Grace Prayer Group Ministries (GPGM):\n${event.title}\nWhen: ${event.day} at ${event.time}\nScripture: ${event.scripture}\nDetails: gpgministries.org`;
    navigator.clipboard.writeText(text);
    setCopiedEventId(event.id);
    setTimeout(() => setCopiedEventId(null), 2500);
  };

  const handleReminder = (id: string) => {
    setSubscribedEventId(id);
    setTimeout(() => setSubscribedEventId(null), 3000);
  };

  return (
    <section id="gatherings" className="py-20 bg-[#06162A] text-slate-100 border-b border-[#0F2C52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F2C52] border border-[#F37016]/30 text-orange-300 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-[#F37016]" />
            <span>Article V: Meetings, Vigils & Retreats</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Times of Worship & Holy Convocations
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-serif italic">
            "Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching." — Hebrews 10:25
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CHURCH_EVENTS.map((event) => (
            <div
              key={event.id}
              className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                event.isSpecial
                  ? 'bg-gradient-to-b from-[#0F2C52] via-[#0A2240] to-[#0A2240] border-[#F37016]/60 shadow-lg shadow-orange-950/20'
                  : 'bg-[#0A2240] border-[#0F2C52] hover:border-slate-600'
              }`}
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-md font-mono ${
                    event.isSpecial
                      ? 'bg-[#F37016] text-white font-bold'
                      : 'bg-[#06162A] text-slate-300 border border-[#0F2C52]'
                  }`}>
                    {event.type}
                  </span>
                  <span className="text-[11px] font-mono text-orange-400 font-medium">
                    {event.scripture}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-white mb-3 leading-snug">
                  {event.title}
                </h3>

                {/* Day & Time */}
                <div className="space-y-2 mb-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2 text-orange-300 font-semibold">
                    <Calendar className="w-4 h-4 text-[#F37016] shrink-0" />
                    <span>{event.day}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-4 font-serif">
                  {event.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0F2C52] flex items-center justify-between gap-2">
                <button
                  onClick={() => handleReminder(event.id)}
                  className="px-3 py-1.5 rounded-lg bg-[#06162A] hover:bg-[#0F2C52] border border-[#0F2C52] text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Bell className="w-3.5 h-3.5 text-[#F37016]" />
                  <span>{subscribedEventId === event.id ? 'Reminder Set!' : 'Remind Me'}</span>
                </button>

                <button
                  onClick={() => handleShareEvent(event)}
                  className="px-3 py-1.5 rounded-lg border border-[#0F2C52] hover:border-orange-400 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
                  title="Share service schedule"
                >
                  {copiedEventId === event.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Article 5.3 Governance & Holy Integrity Note */}
        <div className="bg-[#0A2240] rounded-2xl p-6 sm:p-8 border border-[#F37016]/30 text-slate-300 space-y-3">
          <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider font-mono">
            <ShieldAlert className="w-4 h-4 text-[#F37016]" />
            <span>Article 5.3: Quorum & Spiritual Accountability in Gatherings</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
            "A quorum for regular meetings shall consist of at least one-third of the current members. For elections or major decisions requiring approval, a quorum of two-thirds of the membership is required. In an event where a quorum cannot be reached, the circumstances must clearly be explained, and this must be done so in the spirit of the fear of GOD."
          </p>
          <div className="p-3.5 rounded-xl bg-[#06162A] border border-[#0F2C52] text-xs text-orange-200 font-medium italic">
            Solemn Ratification: "Any meeting organised to manipulate members, the organiser(s) will not be spared by the wrath of GOD." (Article 5.3)
          </div>
        </div>

      </div>
    </section>
  );
};
