import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AmbientLivingBackground } from './components/AmbientLivingBackground';
import { PrayerRequestModal } from './components/PrayerRequestModal';
import { MembershipModal } from './components/MembershipModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PrayerPage } from './pages/PrayerPage';
import { GatheringsPage } from './pages/GatheringsPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { MembershipPage } from './pages/MembershipPage';
import { DonatePage } from './pages/DonatePage';
import { ContactPage } from './pages/ContactPage';
import { MarriagePage } from './pages/MarriagePage';

export default function App() {
  // Get initial page from hash if present
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').trim().toLowerCase();
    const validPages = [
      'home',
      'about',
      'prayer',
      'gatherings',
      'marriage',
      'leadership',
      'membership',
      'donate',
      'contact'
    ];
    
    // Map legacy or shortcut hashes
    if (hash === 'faith' || hash === 'purpose') return 'about';
    if (hash === 'prayer-wall' || hash === 'scripture-prayer') return 'prayer';
    if (hash === 'articles' || hash === 'governance') return 'leadership';
    if (hash === 'giving' || hash === 'stewardship') return 'donate';
    if (hash === 'vigil' || hash === 'services') return 'gatherings';
    if (hash === 'family' || hash === 'counseling' || hash === 'marriage-counseling') return 'marriage';
    if (hash === 'join') return 'membership';

    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage);
  const [prayerModalOpen, setPrayerModalOpen] = useState<boolean>(false);
  const [membershipModalOpen, setMembershipModalOpen] = useState<boolean>(false);

  // Sync state with browser hash (Back / Forward button support)
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    // Map legacy IDs to new pages
    let targetPage = pageId;
    if (pageId === 'hero') targetPage = 'home';
    if (pageId === 'faith' || pageId === 'about') targetPage = 'about';
    if (pageId === 'scripture-prayer' || pageId === 'prayer-wall') targetPage = 'prayer';
    if (pageId === 'articles') targetPage = 'leadership';
    if (pageId === 'giving') targetPage = 'donate';
    if (pageId === 'family' || pageId === 'counseling' || pageId === 'marriage-counseling') targetPage = 'marriage';

    setCurrentPage(targetPage);
    window.location.hash = `#/${targetPage}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setPrayerModalOpen(true)}
            onOpenMembershipModal={() => setMembershipModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenMembershipModal={() => setMembershipModalOpen(true)}
            onOpenPrayerModal={() => setPrayerModalOpen(true)}
          />
        );
      case 'prayer':
        return (
          <PrayerPage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setPrayerModalOpen(true)}
          />
        );
      case 'gatherings':
        return (
          <GatheringsPage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setPrayerModalOpen(true)}
            onOpenMembershipModal={() => setMembershipModalOpen(true)}
          />
        );
      case 'marriage':
        return (
          <MarriagePage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setPrayerModalOpen(true)}
          />
        );
      case 'leadership':
        return (
          <LeadershipPage
            onNavigate={handleNavigate}
            onOpenMembershipModal={() => setMembershipModalOpen(true)}
            onOpenPrayerModal={() => setPrayerModalOpen(true)}
          />
        );
      case 'membership':
        return (
          <MembershipPage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setPrayerModalOpen(true)}
          />
        );
      case 'donate':
        return (
          <DonatePage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setPrayerModalOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setPrayerModalOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setPrayerModalOpen(true)}
            onOpenMembershipModal={() => setMembershipModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-orange-100 selection:text-orange-950 relative">
      {/* Living Ambient Animated Background */}
      <AmbientLivingBackground />

      {/* Navigation Header */}
      <Header
        activePage={currentPage}
        onNavigate={handleNavigate}
        onOpenPrayerModal={() => setPrayerModalOpen(true)}
        onOpenMembershipModal={() => setMembershipModalOpen(true)}
      />

      {/* Dynamic Page Content with Subtle Motion Transition */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrayerModal={() => setPrayerModalOpen(true)}
        onOpenMembershipModal={() => setMembershipModalOpen(true)}
      />

      {/* Interactive Modals */}
      <PrayerRequestModal
        isOpen={prayerModalOpen}
        onClose={() => setPrayerModalOpen(false)}
      />

      <MembershipModal
        isOpen={membershipModalOpen}
        onClose={() => setMembershipModalOpen(false)}
      />
    </div>
  );
}
