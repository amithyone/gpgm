import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  ShieldCheck, 
  BookOpen, 
  Calendar, 
  Check, 
  Clock, 
  Send, 
  Lock, 
  Sparkles, 
  Home, 
  Flame, 
  ArrowRight, 
  Phone, 
  Mail, 
  CheckCircle2, 
  MessageCircle,
  HelpCircle,
  ChevronRight,
  Copy
} from 'lucide-react';

interface MarriagePageProps {
  onNavigate: (page: string) => void;
  onOpenPrayerModal: () => void;
}

export const MarriagePage: React.FC<MarriagePageProps> = ({
  onNavigate,
  onOpenPrayerModal
}) => {
  // Counseling Request Form State
  const [partnerOne, setPartnerOne] = useState('');
  const [partnerTwo, setPartnerTwo] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [counselingType, setCounselingType] = useState('Marriage Restoration');
  const [maritalStatus, setMaritalStatus] = useState('Married');
  const [preferredFormat, setPreferredFormat] = useState('Global Zoom (Private)');
  const [preferredDay, setPreferredDay] = useState('Weekend / Saturday');
  const [details, setDetails] = useState('');
  const [urgent, setUrgent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Scripture Guide Active Tab
  const [activeTab, setActiveTab] = useState<'husbands' | 'wives' | 'family' | 'conflict' | 'covenant'>('covenant');
  const [copiedScripture, setCopiedScripture] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const existingStr = localStorage.getItem('gpgm_counseling_requests');
      const existing = existingStr ? JSON.parse(existingStr) : [];
      const newRequest = {
        id: `counseling-${Date.now()}`,
        partnerOne,
        partnerTwo: partnerTwo || 'Not specified / Single inquiry',
        email,
        phone,
        counselingType,
        maritalStatus,
        preferredFormat,
        preferredDay,
        details,
        urgent,
        submittedAt: new Date().toISOString()
      };
      existing.push(newRequest);
      localStorage.setItem('gpgm_counseling_requests', JSON.stringify(existing));
    } catch {
      // Local fallback
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setPartnerOne('');
    setPartnerTwo('');
    setEmail('');
    setPhone('');
    setDetails('');
    setUrgent(false);
    setSubmitted(false);
  };

  const handleCopyScripture = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScripture(id);
    setTimeout(() => setCopiedScripture(null), 2500);
  };

  const biblicalPillars = [
    {
      title: 'A Sacred Covenant, Not a Contract',
      ref: 'Genesis 2:24 • Malachi 2:14 • Matthew 19:6',
      description: 'Marriage was instituted by God before the fall as an indissoluble spiritual covenant. "What therefore God hath joined together, let not man put asunder." It is a reflection of the sacred bond between Christ and His Church.',
      icon: Heart,
      accent: 'border-[#F37016]/30'
    },
    {
      title: 'Christ-Like Love & Mutual Honor',
      ref: 'Ephesians 5:22–33 • 1 Peter 3:7',
      description: 'Husbands are called to love their wives sacrificially, even as Christ loved the Church and gave Himself for it. Wives are called to reverence and support their husbands in the Lord, walking in spiritual unity.',
      icon: Flame,
      accent: 'border-[#F37016]/30'
    },
    {
      title: 'The Family Altar & Prayer Warfare',
      ref: 'Joshua 24:15 • Matthew 18:19–20',
      description: '"As for me and my house, we will serve the LORD." A family that prays the scriptures together builds an impenetrable spiritual shield against division, worldly corruption, and enemy attacks.',
      icon: Home,
      accent: 'border-[#2E7D32]/40'
    },
    {
      title: 'Nurturing Godly Seed & Heritage',
      ref: 'Malachi 2:15 • Proverbs 22:6 • Psalm 127:3',
      description: 'Children are an heritage of the Lord. Parents are entrusted by God to train children in the fear, reverence, and undiluted truth of His Word, shaping righteous generations for the Kingdom of God.',
      icon: Users,
      accent: 'border-[#2E7D32]/40'
    },
    {
      title: 'Unconditional Grace & Forgiveness',
      ref: 'Colossians 3:12–14 • Ephesians 4:31–32',
      description: '"And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ\'s sake hath forgiven you." No marriage can endure without daily repentance, patience, and supernatural grace.',
      icon: ShieldCheck,
      accent: 'border-[#F37016]/30'
    }
  ];

  const counselingStreams = [
    {
      title: 'Pre-Marital Foundation Course',
      audience: 'Courting & Engaged Couples',
      desc: 'Guided biblical preparation covering spiritual alignment, communication, financial stewardship, in-law boundaries, and understanding God\'s divine design for matrimony before the wedding altar.',
      tag: 'Preparation',
      icon: Sparkles
    },
    {
      title: 'Marital Reconciliation & Healing',
      audience: 'Couples in Distress or Crisis',
      desc: 'Confidential pastoral mediation aimed at breaking cycles of hurt, emotional detachment, infidelity recovery, and healing bitter roots through scripture prayer and the Holy Spirit.',
      tag: 'Restoration',
      icon: Heart
    },
    {
      title: 'Spiritual Intimacy & Enrichment',
      audience: 'Established & Seasoned Marriages',
      desc: 'Rekindling prayer life between husband and wife, learning to wage spiritual warfare together, renewing vows, and elevating physical and emotional intimacy to the glory of God.',
      tag: 'Enrichment',
      icon: Flame
    },
    {
      title: 'Parenting & Christian Family Guidance',
      audience: 'Parents, Guardians & Families',
      desc: 'Equipping fathers and mothers with biblical wisdom to discipline in love, navigate rebellious youth, guide young minds away from worldly traps, and establish regular family prayer altars.',
      tag: 'Family Life',
      icon: Home
    }
  ];

  const scriptureCategories = {
    covenant: {
      title: 'The Divine Covenant of Holy Matrimony',
      verses: [
        {
          id: 'cov-1',
          ref: 'Genesis 2:24 (KJV)',
          text: 'Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.',
          prayer: 'Lord, make our two lives truly one in heart, mind, spirit, and purpose according to Your holy design.'
        },
        {
          id: 'cov-2',
          ref: 'Ecclesiastes 4:12 (KJV)',
          text: 'And if one prevail against him, two shall withstand him; and a threefold cord is not quickly broken.',
          prayer: 'Heavenly Father, be the Third Cord in our marriage. When trials arise, bind our hands in faith.'
        },
        {
          id: 'cov-3',
          ref: 'Hebrews 13:4 (KJV)',
          text: 'Marriage is honourable in all, and the bed undefiled: but whoremongers and adulterers God will judge.',
          prayer: 'Protect the sacred sanctity and purity of our marriage covenant from every trap of the enemy.'
        }
      ]
    },
    husbands: {
      title: 'Scriptural Mandates for Godly Husbands',
      verses: [
        {
          id: 'hus-1',
          ref: 'Ephesians 5:25 (KJV)',
          text: 'Husbands, love your wives, even as Christ also loved the church, and gave himself for it;',
          prayer: 'Lord Jesus, impart into every husband the spirit of sacrificial, tender, and patient leadership.'
        },
        {
          id: 'hus-2',
          ref: '1 Peter 3:7 (KJV)',
          text: 'Likewise, ye husbands, dwell with them according to knowledge, giving honour unto the wife, as unto the weaker vessel, and as being heirs together of the grace of life; that your prayers be not hindered.',
          prayer: 'Help husbands treat their wives with profound respect, that prayer channels to heaven remain unhindered.'
        },
        {
          id: 'hus-3',
          ref: 'Proverbs 5:18–19 (KJV)',
          text: 'Let thy fountain be blessed: and rejoice with the wife of thy youth... and be thou ravished always with her love.',
          prayer: 'Preserve holy affection and joy between husband and wife throughout every stage of life.'
        }
      ]
    },
    wives: {
      title: 'Scriptural Mandates for Godly Wives',
      verses: [
        {
          id: 'wiv-1',
          ref: 'Proverbs 31:10, 12 (KJV)',
          text: 'Who can find a virtuous woman? for her price is far above rubies... She will do him good and not evil all the days of her life.',
          prayer: 'Father, clothe wives with heavenly wisdom, strength, dignity, and faithful devotion to their household.'
        },
        {
          id: 'wiv-2',
          ref: 'Ephesians 5:22–24 (KJV)',
          text: 'Wives, submit yourselves unto your own husbands, as unto the Lord. For the husband is the head of the wife, even as Christ is the head of the church.',
          prayer: 'Grant wives divine grace and honor in spiritual alignment, walking hand-in-hand in reverence for God.'
        },
        {
          id: 'wiv-3',
          ref: '1 Peter 3:3–4 (KJV)',
          text: 'Whose adorning let it not be that outward adorning... But let it be the hidden man of the heart, in that which is not corruptible, even the ornament of a meek and quiet spirit, which is in the sight of God of great price.',
          prayer: 'Cultivate inner beauty of peace, prayerfulness, and unwavering faith in every Christian woman.'
        }
      ]
    },
    family: {
      title: 'Godly Parenting & Family Altar',
      verses: [
        {
          id: 'fam-1',
          ref: 'Joshua 24:15 (KJV)',
          text: 'And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve... but as for me and my house, we will serve the LORD.',
          prayer: 'We declare that our entire family lineage belongs to Jesus Christ. No child of ours will serve darkness!'
        },
        {
          id: 'fam-2',
          ref: 'Proverbs 22:6 (KJV)',
          text: 'Train up a child in the way he should go: and when he is old, he will not depart from it.',
          prayer: 'Holy Spirit, give parents patience, discipline, and godly examples to instill the fear of God in our youth.'
        },
        {
          id: 'fam-3',
          ref: 'Psalm 127:3–5 (KJV)',
          text: 'Lo, children are an heritage of the LORD: and the fruit of the womb is his reward. As arrows are in the hand of a mighty man; so are children of the youth.',
          prayer: 'Make our children mighty arrows for the Kingdom, shining as lights in this generation.'
        }
      ]
    },
    conflict: {
      title: 'Healing Conflict & Restoring Peace',
      verses: [
        {
          id: 'con-1',
          ref: 'Ephesians 4:26, 31–32 (KJV)',
          text: 'Let not the sun go down upon your wrath... Let all bitterness, and wrath, and anger, and clamour, and evil speaking, be put away from you, with all malice: And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ\'s sake hath forgiven you.',
          prayer: 'Uproot every root of bitterness, pride, and unforgiveness in our home. Cleanse our tongues by Your grace.'
        },
        {
          id: 'con-2',
          ref: 'Colossians 3:12–14 (KJV)',
          text: 'Put on therefore, as the elect of God, holy and beloved, bowels of mercies, kindness, humbleness of mind, meekness, longsuffering; Forbearing one another, and forgiving one another... And above all these things put on charity, which is the bond of perfectness.',
          prayer: 'Pour out unconditional agape charity to swallow every strife, argument, and misunderstanding.'
        },
        {
          id: 'con-3',
          ref: '1 Corinthians 13:4, 7–8 (KJV)',
          text: 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up... Beareth all things, believeth all things, hopeth all things, endureth all things. Charity never faileth.',
          prayer: 'Revive our love with that heavenly love which never fails, never gives up, and rejoices in truth.'
        }
      ]
    }
  };

  const counselingFaqs = [
    {
      q: 'Is our marriage counseling session strictly confidential?',
      a: 'Yes, 100%. Under Article 3.3 of Grace Prayer Group Ministries, all pastoral guidance, marriage disclosures, and family counseling are kept in the strictest spiritual confidence with ordained leadership.'
    },
    {
      q: 'Are there any fees for receiving marriage or family counseling?',
      a: 'No. The ministry of the Gospel and pastoral care at GPGM are offered freely in the love of Christ. Our ministers serve as stewards of God\'s grace. The ministry is sustained by voluntary tithes and freewill offerings (Article VI).'
    },
    {
      q: 'Can we attend if we live outside Cameroon or the USA via Zoom?',
      a: 'Absolutely. We regularly conduct confidential counseling sessions with couples across the globe using secure, encrypted Zoom video conferences.'
    },
    {
      q: 'What if my spouse is currently reluctant or unwilling to join counseling?',
      a: 'You can still schedule an individual pastoral session. 1 Peter 3:1 reminds us that even when one spouse is disobedient to the Word, they may without the Word be won by the chaste conversation and prayers of the believing partner. We will stand with you in faith and intercession.'
    }
  ];

  return (
    <div className="space-y-0 bg-slate-50 text-slate-900">
      
      {/* Hero Section */}
      <section className="bg-[#06162A] text-slate-100 py-16 sm:py-24 border-b border-[#F37016]/25 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F37016_1px,transparent_1px)] [background-size:28px_28px] animate-ambient-drift" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F37016]/15 rounded-full blur-3xl pointer-events-none animate-soft-glow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2E7D32]/15 rounded-full blur-3xl pointer-events-none animate-soft-glow [animation-delay:2s]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-orange-400 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#F37016] font-semibold">Marriage</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C52] border border-[#F37016]/30 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
                <Heart className="w-4 h-4 text-[#F37016] fill-current" />
                <span>Grace Prayer Group Ministries • Marriage & Family Care</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Biblical Marriage & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-amber-300">
                  Family Counseling
                </span>
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-serif italic max-w-2xl">
                "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh." — Genesis 2:24 (KJV)
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At Grace Prayer Group Ministries, we believe that godly marriage and family are the primary foundation of both the Church and society. Through undiluted Scripture, fervent intercession, and pastoral care, we help couples heal wounds, rekindle sacred love, and build Christ-centered homes that withstand the storms of life.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#counseling-form-section"
                  id="hero-request-counseling-btn"
                  className="px-6 py-3.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 group"
                >
                  <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Request Counseling Session</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#scripture-guide-section"
                  className="px-6 py-3.5 rounded-xl bg-[#0F2C52] hover:bg-[#163B6B] text-orange-300 hover:text-orange-200 font-semibold text-xs sm:text-sm border border-[#F37016]/40 transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-orange-400" />
                  <span>Marriage Scripture Guide</span>
                </a>

                <button
                  onClick={onOpenPrayerModal}
                  className="px-5 py-3.5 rounded-xl bg-[#0A2240] hover:bg-[#123663] text-slate-200 font-medium text-xs sm:text-sm border border-slate-700/60 transition-colors flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-orange-400 fill-current" />
                  <span>Submit Marriage Petition</span>
                </button>
              </div>

              {/* Security & Confidentiality Tag */}
              <div className="flex items-center gap-2 text-xs text-slate-300 pt-2 font-mono">
                <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                <span>Protected by Pastoral Confidentiality (Article 3.3) • Completely Free in Christ</span>
              </div>
            </div>

            {/* Right Card: Covenant Banner */}
            <div className="lg:col-span-5">
              <div className="bg-[#0A2240] p-7 rounded-3xl border border-[#F37016]/30 shadow-2xl space-y-5 relative">
                <div className="flex items-center justify-between border-b border-[#0F2C52] pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>The Christian Household</span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#2E7D32]/20 text-green-400 border border-[#2E7D32]/40">
                    Joshua 24:15
                  </span>
                </div>

                <blockquote className="text-sm sm:text-base font-serif italic text-slate-200 leading-relaxed">
                  "And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve... but as for me and my house, we will serve the LORD."
                </blockquote>

                <div className="space-y-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span><strong>Pre-Marital Grounding:</strong> Preparing couples to enter holy matrimony spiritually equipped and unified.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span><strong>Marital Warfare & Intercession:</strong> Breaking evil yokes, ancestral curses, and emotional estrangement.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                    <span><strong>Restoration & Forgiveness:</strong> Restoring broken communication, intimacy, and trust by the Holy Spirit.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                    <span><strong>Godly Parenting:</strong> Raising children in the undiluted nurture and admonition of the Lord (Malachi 2:15).</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#06162A] border border-[#0F2C52] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Pastoral Lead</span>
                    <span className="font-bold text-slate-200">Roland Tewure Fominyam</span>
                  </div>
                  <a
                    href="#counseling-form-section"
                    className="text-[#F37016] font-semibold hover:text-orange-300 flex items-center gap-1"
                  >
                    <span>Connect Privately</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* The Importance of Godly Marriage & Family Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#F37016] text-xs font-bold font-mono uppercase tracking-wider border border-orange-200">
              <BookOpen className="w-3.5 h-3.5 text-[#F37016]" />
              <span>Biblical Foundations of the Home</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A2240] tracking-tight">
              Why Godly Marriage & Family Matter to God
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-serif italic leading-relaxed">
              "Except the LORD build the house, they labour in vain that build it: except the LORD keep the city, the watchman waketh but in vain." — Psalm 127:1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {biblicalPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-[#F37016] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100/60 text-[#F37016] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#F37016] uppercase tracking-wider block mb-1">
                        {pillar.ref}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-[#0A2240]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>Pillar {idx + 1} of 5</span>
                    <span className="text-[#2E7D32] font-semibold">Biblical Truth</span>
                  </div>
                </div>
              );
            })}

            {/* Special Highlight Card */}
            <div className="bg-[#0A2240] p-7 rounded-2xl border border-[#F37016]/40 text-slate-100 flex flex-col justify-between shadow-md">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F37016]/20 text-orange-400 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-[#F37016]" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-orange-400 uppercase tracking-wider block mb-1">
                    Malachi 2:15 (KJV)
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white">
                    Seeking a Godly Seed
                  </h3>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-serif italic">
                  "And did not he make one? Yet had he the residue of the spirit. And wherefore one? That he might seek a godly seed. Therefore take heed to your spirit, and let none deal treacherously against the wife of his youth."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0F2C52]">
                <button
                  onClick={onOpenPrayerModal}
                  className="w-full py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>Pray Over Your Children</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Counseling Streams / Services Offered */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F37016] mb-1">
                Care & Counseling Streams
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A2240]">
                How We Walk Alongside Your Family
              </h2>
            </div>
            <a
              href="#counseling-form-section"
              className="px-5 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs flex items-center gap-2 transition-colors self-start md:self-auto shadow-xs"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {counselingStreams.map((stream, i) => {
              const StreamIcon = stream.icon;
              return (
                <div 
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#F37016] flex items-center justify-center">
                        <StreamIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
                        {stream.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-[#0A2240]">
                      {stream.title}
                    </h3>
                    
                    <div className="text-xs font-bold text-[#F37016] font-mono">
                      Target: {stream.audience}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {stream.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[#2E7D32] font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Strictly Confidential
                    </span>
                    <a
                      href="#counseling-form-section"
                      onClick={() => setCounselingType(stream.title)}
                      className="text-[#F37016] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Choose this stream</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive Scripture Guide for Marriages & Families */}
      <section id="scripture-guide-section" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#F37016] text-xs font-bold font-mono uppercase tracking-wider border border-orange-200">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Pray the Scriptures for Your Marriage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A2240]">
              Biblical Scripture & Prayer Guide for Families
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We stand upon God's infallible Word (KJV). Select a category below to meditate, declare, and pray scripture over your spouse, children, and household.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('covenant')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'covenant'
                  ? 'bg-[#0A2240] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-[#F37016]" />
              <span>Marriage Covenant</span>
            </button>

            <button
              onClick={() => setActiveTab('husbands')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'husbands'
                  ? 'bg-[#0A2240] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-[#F37016]" />
              <span>For Husbands</span>
            </button>

            <button
              onClick={() => setActiveTab('wives')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'wives'
                  ? 'bg-[#0A2240] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F37016]" />
              <span>For Wives</span>
            </button>

            <button
              onClick={() => setActiveTab('family')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'family'
                  ? 'bg-[#0A2240] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Home className="w-3.5 h-3.5 text-[#F37016]" />
              <span>Parents & Children</span>
            </button>

            <button
              onClick={() => setActiveTab('conflict')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'conflict'
                  ? 'bg-[#0A2240] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span>Peace & Forgiveness</span>
            </button>
          </div>

          {/* Active Tab Content */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
            <h3 className="text-xl font-bold font-heading text-[#0A2240] flex items-center gap-2 border-b border-slate-200 pb-3">
              <Flame className="w-5 h-5 text-[#F37016]" />
              <span>{scriptureCategories[activeTab].title}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scriptureCategories[activeTab].verses.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-[#F37016]">
                      <span>{item.ref}</span>
                      <button
                        onClick={() => handleCopyScripture(`"${item.text}" — ${item.ref}`, item.id)}
                        className="text-slate-400 hover:text-slate-700 p-1 transition-colors"
                        title="Copy scripture"
                      >
                        {copiedScripture === item.id ? (
                          <span className="text-[10px] text-green-600 font-sans font-bold flex items-center gap-1">
                            <Check className="w-3 h-3" /> Copied
                          </span>
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-800 font-serif italic leading-relaxed">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-orange-50/70 border border-orange-200/60 text-xs">
                    <span className="font-bold text-[#0A2240] block mb-1 font-mono text-[11px]">
                      Prayer Declaration:
                    </span>
                    <p className="text-slate-700 font-serif italic">
                      "{item.prayer}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Counseling Booking Form Section */}
      <section id="counseling-form-section" className="py-20 bg-[#06162A] text-slate-100 border-b border-[#0F2C52]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C52] border border-[#F37016]/40 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
              <Calendar className="w-4 h-4 text-[#F37016]" />
              <span>Confidential Pastoral Appointment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              Request a Biblical Counseling Session
            </h2>

            <p className="text-slate-300 text-sm font-serif italic leading-relaxed">
              "Where no counsel is, the people fall: but in the multitude of counsellors there is safety." — Proverbs 11:14
            </p>
          </div>

          <div className="bg-[#0A2240] p-6 sm:p-10 rounded-3xl border border-[#F37016]/30 shadow-2xl">
            
            {submitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#2E7D32]/20 text-green-400 flex items-center justify-center mx-auto border border-[#2E7D32]/40">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Counseling Request Received in Faith
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                  Thank you, <strong>{partnerOne}</strong>. Your request for <strong>{counselingType}</strong> has been transmitted directly to Lead Coordinator Roland Tewure Fominyam and the pastoral counseling elders. Under Article 3.3, your privacy is inviolably guarded.
                </p>

                <div className="p-4 rounded-xl bg-[#06162A] border border-[#0F2C52] max-w-md mx-auto text-xs text-orange-300 font-serif italic">
                  "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace." — Numbers 6:24–26
                </div>

                <div className="pt-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Partner Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-200 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Brother John Doe"
                        value={partnerOne}
                        onChange={(e) => setPartnerOne(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#06162A] border border-slate-700 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-[#F37016]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-200 block mb-1">
                        Spouse / Fiancé(e) Name (If applicable)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sister Jane Doe (or leave blank if individual)"
                        value={partnerTwo}
                        onChange={(e) => setPartnerTwo(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#06162A] border border-slate-700 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-[#F37016]"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-200 block mb-1">
                        Confidential Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="youremail@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#06162A] border border-slate-700 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-[#F37016]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-200 block mb-1">
                        Phone / WhatsApp (With Country Code) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000 or +237..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#06162A] border border-slate-700 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-[#F37016]"
                      />
                    </div>
                  </div>

                  {/* Counseling Type & Marital Status */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-200 block mb-1">
                        Counseling Service Needed *
                      </label>
                      <select
                        value={counselingType}
                        onChange={(e) => setCounselingType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#06162A] border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-[#F37016]"
                      >
                        <option value="Pre-Marital Foundation">Pre-Marital Preparation Course</option>
                        <option value="Marriage Restoration">Marriage Reconciliation & Healing</option>
                        <option value="Spiritual Enrichment">Spiritual Intimacy & Marriage Enrichment</option>
                        <option value="Parenting & Family Guidance">Parenting & Family Mentorship</option>
                        <option value="Crisis Spiritual Warfare">Crisis Prayer & Urgent Deliverance</option>
                        <option value="Individual Marital Guidance">Individual Guidance (Spouse Absent)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-200 block mb-1">
                        Current Marital Status *
                      </label>
                      <select
                        value={maritalStatus}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#06162A] border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-[#F37016]"
                      >
                        <option value="Engaged / Planning Matrimony">Engaged / Planning Holy Matrimony</option>
                        <option value="Married (1 to 5 Years)">Married (1 to 5 Years)</option>
                        <option value="Married (6 to 15 Years)">Married (6 to 15 Years)</option>
                        <option value="Married (15+ Years)">Married (15+ Years)</option>
                        <option value="Separated / Critical Distress">Separated / Critical Distress</option>
                        <option value="Single Parent">Single Parent Seeking Guidance</option>
                      </select>
                    </div>
                  </div>

                  {/* Format & Day Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-200 block mb-1">
                        Preferred Meeting Format *
                      </label>
                      <select
                        value={preferredFormat}
                        onChange={(e) => setPreferredFormat(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#06162A] border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-[#F37016]"
                      >
                        <option value="Global Zoom (Private)">Global Zoom (Private Video Conference)</option>
                        <option value="WhatsApp Voice / Video">WhatsApp Voice / Video Call</option>
                        <option value="Sanctuary In-Person">Sanctuary In-Person (Scheduled)</option>
                        <option value="Phone Call">Direct Phone Call</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-200 block mb-1">
                        Preferred Day & Time Window *
                      </label>
                      <select
                        value={preferredDay}
                        onChange={(e) => setPreferredDay(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#06162A] border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-[#F37016]"
                      >
                        <option value="Weekend / Saturday Morning">Weekend / Saturday Morning</option>
                        <option value="Weekday Evening">Weekday Evening (Post-Work)</option>
                        <option value="Sunday After Service">Sunday After Service Fellowship</option>
                        <option value="Friday Post-Vigil">Friday Vigil Consultation</option>
                        <option value="Flexible / As Soon As Possible">Flexible / As Soon As Possible</option>
                      </select>
                    </div>
                  </div>

                  {/* Details / Burdens */}
                  <div>
                    <label className="text-xs font-bold text-slate-200 block mb-1">
                      Brief Description of Situation or Specific Prayers Needed
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share as much or as little as you feel comfortable sharing. All details are kept strictly private..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#06162A] border border-slate-700 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-[#F37016]"
                    />
                  </div>

                  {/* Urgent Crisis Toggle */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#06162A] border border-[#0F2C52]">
                    <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={urgent}
                        onChange={(e) => setUrgent(e.target.checked)}
                        className="rounded text-[#F37016] focus:ring-[#F37016] w-4 h-4 bg-[#0A2240]"
                      />
                      <span>Mark this request as <strong>Urgent Marriage / Family Crisis</strong></span>
                    </label>
                    <span className="text-[11px] font-mono text-orange-400">Pastoral Priority</span>
                  </div>

                  {/* Confidentiality Affirmation */}
                  <div className="p-3.5 rounded-xl bg-[#0F2C52]/50 border border-[#F37016]/20 flex items-start gap-2 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                    <span>
                      <strong>Article 3.3 Confidentiality Guarantee:</strong> By submitting this request, your information is routed exclusively to Lead Coordinator Roland Tewure Fominyam and ordained pastoral intercessors. It will never be disclosed or published.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-marriage-counseling-btn"
                    className="w-full py-3.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-950/40 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Counseling Appointment Request</span>
                  </button>

                </form>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Counseling FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A2240]">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Answers regarding our biblical marriage and family counseling ministry.
            </p>
          </div>

          <div className="space-y-4">
            {counselingFaqs.map((faq, i) => (
              <div 
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2"
              >
                <h4 className="text-sm sm:text-base font-bold text-[#0A2240] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#F37016]" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0A2240] text-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#F37016]/30">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-white text-base">Have an immediate prayer need for your home?</h4>
              <p className="text-xs text-slate-300">Submit a confidential request to our pastoral prayer intercessors right now.</p>
            </div>
            <button
              onClick={onOpenPrayerModal}
              className="px-5 py-2.5 rounded-xl bg-[#F37016] hover:bg-[#D95304] text-white font-bold text-xs shrink-0 shadow-md transition-colors flex items-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Submit Prayer Petition</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
