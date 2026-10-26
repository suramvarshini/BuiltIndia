import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Language, ViewState } from '../../types';
import { 
  ShieldCheck, 
  Globe, 
  Eye, 
  Bell, 
  Menu, 
  X, 
  Search, 
  Home, 
  FileCheck, 
  HelpCircle, 
  LayoutDashboard,
  Sparkles
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    language, 
    setLanguage, 
    unreadNotificationsCount,
    setIsAccessibilityModalOpen,
    t
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { view: ViewState; labelKey: string; icon: React.ReactNode }[] = [
    { view: 'home', labelKey: 'navHome', icon: <Home className="w-4 h-4" /> },
    { view: 'services', labelKey: 'navServices', icon: <Search className="w-4 h-4" /> },
    { view: 'dashboard', labelKey: 'navMyApplications', icon: <LayoutDashboard className="w-4 h-4" /> },
    { view: 'document-checklist', labelKey: 'navDocChecklist', icon: <FileCheck className="w-4 h-4" /> },
    { view: 'assistant', labelKey: 'navAssistant', icon: <Sparkles className="w-4 h-4 text-amber-500" /> },
    { view: 'faq', labelKey: 'navHelp', icon: <HelpCircle className="w-4 h-4" /> }
  ];

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-40 shadow-md border-b border-slate-800">
      <div className="bg-blue-800 text-blue-100 text-xs sm:text-sm py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
        <span>{t('prominentBanner')}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          <button 
            onClick={() => setCurrentView('home')} 
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white">
                  Seva<span className="text-emerald-400">Fix</span>
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Citizen Recovery
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium hidden sm:block">
                {t('tagline')}
              </p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => setCurrentView(item.view)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  currentView === item.view
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{t(item.labelKey)}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            
            <div className="relative flex items-center bg-slate-800 rounded-lg px-2.5 py-1.5 border border-slate-700">
              <Globe className="w-4 h-4 text-blue-400 mr-1.5 shrink-0" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-white text-xs sm:text-sm font-medium focus:outline-none cursor-pointer pr-1"
                aria-label="Select Language"
              >
                <option value="en" className="bg-slate-900 text-white">English</option>
                <option value="te" className="bg-slate-900 text-white">తెలుగు (Telugu)</option>
                <option value="hi" className="bg-slate-900 text-white">हिन्दी (Hindi)</option>
              </select>
            </div>

            <button
              onClick={() => setIsAccessibilityModalOpen(true)}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 px-3 py-1.5 rounded-lg border border-slate-700 text-xs sm:text-sm font-semibold transition-all"
              title="Open Accessibility Controls"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span className="hidden md:inline">{t('accessibility')}</span>
            </button>

            <button
              onClick={() => setCurrentView('notifications')}
              className={`relative p-2 rounded-lg transition-all ${
                currentView === 'notifications'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
              title="View Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-pulse">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                setCurrentView(item.view);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left text-base font-semibold ${
                currentView === item.view
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              {item.icon}
              <span>{t(item.labelKey)}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
