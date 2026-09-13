import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  Printer, 
  Copy, 
  Check, 
  BookOpen, 
  ShieldCheck, 
  ExternalLink,
  Layers,
  Sparkles,
  PenTool
} from 'lucide-react';
import { ARTICLES_SLIDES_DATA } from '../data/churchData';
import { ArticleSlide } from '../types/church';

export const ArticlesOfAssociationViewer: React.FC = () => {
  const [viewMode, setViewMode] = useState<'continuous' | 'slides'>('continuous');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1); // 0-indexed, slide 2 is foundational
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedDoc, setCopiedDoc] = useState<boolean>(false);

  const categories = [
    'All',
    'Foundations',
    'Identity',
    'Doctrine',
    'Membership',
    'Leadership',
    'Meetings',
    'Finances',
    'Governance'
  ];

  const filteredSlides = useMemo(() => {
    return ARTICLES_SLIDES_DATA.filter((slide) => {
      const matchesCategory = selectedCategory === 'All' || slide.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q || (
        slide.title.toLowerCase().includes(q) ||
        (slide.articleNumber && slide.articleNumber.toLowerCase().includes(q)) ||
        (slide.subtitle && slide.subtitle.toLowerCase().includes(q)) ||
        slide.contentLines.some(line => line.toLowerCase().includes(q)) ||
        (slide.keyScriptures && slide.keyScriptures.some(sc => sc.toLowerCase().includes(q)))
      );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopyFullText = () => {
    const fullText = ARTICLES_SLIDES_DATA.map(s => {
      return `--- Slide ${s.slideNumber}: ${s.title} ---\n${s.articleNumber ? s.articleNumber + '\n' : ''}${s.contentLines.join('\n')}\n`;
    }).join('\n\n');

    navigator.clipboard.writeText(fullText);
    setCopiedDoc(true);
    setTimeout(() => setCopiedDoc(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const activeSlide = ARTICLES_SLIDES_DATA[currentSlideIndex] || ARTICLES_SLIDES_DATA[0];

  return (
    <section id="articles" className="py-20 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#F37016] text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-[#F37016]" />
            <span>Constitutional Governance Document</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A2240] tracking-tight">
            Articles of Association for GPGM
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-serif italic">
            "Ensuring that the group operates in alignment with its purpose, values, and spiritual goals." — Slide 23
          </p>
        </div>

        {/* Toolbar Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search across all 23 slides, articles, scriptures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-[#F37016] focus:bg-white"
            />
          </div>

          {/* Mode Switcher & Actions */}
          <div className="flex flex-wrap items-center gap-2.5 justify-end">
            <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200">
              <button
                onClick={() => setViewMode('continuous')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === 'continuous'
                    ? 'bg-white text-[#0A2240] shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-[#F37016]" />
                <span>Document View</span>
              </button>
              <button
                onClick={() => setViewMode('slides')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === 'slides'
                    ? 'bg-white text-[#0A2240] shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#F37016]" />
                <span>Slide Deck View</span>
              </button>
            </div>

            <button
              onClick={handleCopyFullText}
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-200"
              title="Copy complete text of Articles"
            >
              {copiedDoc ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-700 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-200"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0A2240] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#F37016]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Mode 1: Slide Deck Presentation Mode */}
        {viewMode === 'slides' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md relative min-h-[480px] flex flex-col justify-between">
              
              {/* Slide Top Meta */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-orange-100 text-[#F37016] font-mono font-bold text-xs">
                      Slide {activeSlide.slideNumber} of {ARTICLES_SLIDES_DATA.length}
                    </span>
                    {activeSlide.articleNumber && (
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs font-semibold">
                        {activeSlide.articleNumber}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {activeSlide.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2240] mb-2">
                  {activeSlide.title}
                </h3>
                {activeSlide.subtitle && (
                  <div className="text-xs font-mono font-medium text-[#F37016] mb-6">
                    {activeSlide.subtitle}
                  </div>
                )}

                {/* Content Lines */}
                <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed font-serif">
                  {activeSlide.contentLines.map((line, i) => (
                    <p key={i} className="leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>

                {/* Key Scriptures Badges */}
                {activeSlide.keyScriptures && activeSlide.keyScriptures.length > 0 && (
                  <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-500">Scriptural Citations:</span>
                    {activeSlide.keyScriptures.map(sc => (
                      <span key={sc} className="px-2 py-0.5 rounded bg-orange-50 text-orange-900 border border-orange-200 text-xs font-mono">
                        {sc}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentSlideIndex === 0}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Slide</span>
                </button>

                <div className="text-xs font-mono text-slate-500">
                  {currentSlideIndex + 1} / {ARTICLES_SLIDES_DATA.length}
                </div>

                <button
                  onClick={() => setCurrentSlideIndex(prev => Math.max(0, Math.min(ARTICLES_SLIDES_DATA.length - 1, prev + 1)))}
                  disabled={currentSlideIndex === ARTICLES_SLIDES_DATA.length - 1}
                  className="px-4 py-2 rounded-xl bg-[#F37016] hover:bg-[#D95304] disabled:opacity-40 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>Next Slide</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* View Mode 2: Continuous Document Mode */}
        {viewMode === 'continuous' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {filteredSlides.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
                No matching articles or slides found for "{searchQuery}". Try clearing search.
              </div>
            ) : (
              filteredSlides.map((slide) => (
                <div
                  key={slide.slideNumber}
                  className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs hover:border-[#F37016] transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-orange-50 text-[#F37016] border border-orange-200">
                        Slide #{slide.slideNumber}
                      </span>
                      {slide.articleNumber && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {slide.articleNumber}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">
                      {slide.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#0A2240] mb-2">
                    {slide.title}
                  </h3>
                  {slide.subtitle && (
                    <div className="text-xs font-mono text-[#F37016] mb-4">
                      {slide.subtitle}
                    </div>
                  )}

                  <div className="space-y-3 text-slate-700 text-sm sm:text-base font-serif leading-relaxed">
                    {slide.contentLines.map((line, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>

                  {slide.slideNumber === 22 && (
                    <div className="mt-6 pt-4 border-t border-slate-200 bg-orange-50/60 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <PenTool className="w-5 h-5 text-[#F37016]" />
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-[#0A2240]">
                            Ratified by Foundational Signatories
                          </div>
                          <div className="text-xs text-slate-600">
                            Roland Tewure Fominyam (Lead Coordinator/G.O) • Celine Atarah Ekanem (Assistant Coordinator) • Agwa Brenda Chick (Trustee)
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 bg-white rounded-md border border-[#F37016] text-[#F37016] font-bold">
                        Slide 22 Verified
                      </span>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </section>
  );
};
