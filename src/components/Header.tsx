import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  BookOpen, 
  Heart, 
  Calendar, 
  Users, 
  FileText, 
  HandHeart,
  ChevronRight,
  Mail,
  Flame
} from 'lucide-react';
import { ChurchLogo } from './ChurchLogo';

interface HeaderProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
  onOpenPrayerModal: () => void;
  onOpenMembershipModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenPrayerModal,
  onOpenMembershipModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Flame },
    { id: 'about', label: 'About', icon: BookOpen },
    { id: 'prayer', label: 'Prayer', icon: Heart },
    { id: 'gatherings', label: 'Gatherings', icon: Calendar },
    { id: 'marriage', label: 'Marriage', icon: Heart },
    { id: 'leadership', label: 'Leadership', icon: FileText },
    { id: 'membership', label: 'Membership', icon: Users },
    { id: 'donate', label: 'Donate', icon: HandHeart },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#06162A]/95 backdrop-blur-md text-slate-100 border-b border-[#F37016]/25 shadow-lg transition-all">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Official Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            id="brand-logo-btn"
          >
            <ChurchLogo size="sm" withText={true} title="GPGM" showSubtitle={false} />
          </button>

          {/* Desktop Navigation Links (One Word per page) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    isActive 
                      ? 'text-orange-400 bg-[#0F2C52] border border-[#F37016]/40 shadow-xs' 
                      : 'text-slate-200 hover:text-white hover:bg-[#0A2240]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenPrayerModal}
              id="header-submit-prayer-btn"
              className="px-3.5 py-2 rounded-lg text-xs font-bold bg-[#F37016] hover:bg-[#D95304] text-white shadow-md transition-all flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Pray</span>
            </button>
            <button
              onClick={onOpenMembershipModal}
              id="header-join-fellowship-btn"
              className="px-3 py-2 rounded-lg text-xs font-semibold border border-[#F37016]/40 text-orange-200 hover:bg-[#0A2240] transition-colors"
            >
              Join
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenPrayerModal}
              className="sm:hidden px-2.5 py-1.5 rounded-md text-xs font-bold bg-[#F37016] text-white"
            >
              Pray
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#0A2240] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#06162A] border-b border-[#F37016]/30 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-link-${item.id}`}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-[#0F2C52] text-orange-400 font-semibold border border-[#F37016]/40' 
                      : 'text-slate-200 hover:bg-[#0A2240] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-orange-400" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onOpenPrayerModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg text-xs font-bold bg-[#F37016] text-white text-center shadow"
            >
              Submit Prayer
            </button>
            <button
              onClick={() => {
                onOpenMembershipModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg text-xs font-bold border border-[#F37016]/40 text-orange-300 text-center"
            >
              Join Fellowship
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
