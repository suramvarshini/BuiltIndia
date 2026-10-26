import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, PhoneCall, HelpCircle, FileCheck, Search, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, t } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl p-6 sm:p-8 mb-12 border border-blue-800/50 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Platform Mission</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              “Government services should not end with an error message. SevaFix helps citizens understand the problem, fix it, and take the next step.”
            </h3>
          </div>
          <button
            onClick={() => setCurrentView('services')}
            className="civic-btn-success whitespace-nowrap text-base px-6 py-3 shrink-0"
          >
            {t('startRecovery')}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white">SevaFix</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('shortDesc')}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800 p-2.5 rounded-lg border border-slate-700">
              <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t('emergencyHelpline')}</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <Search className="w-4 h-4 text-blue-400" />
              Quick Recovery
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setCurrentView('services')} className="hover:text-white transition-colors">
                  Aadhaar Error Recovery
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('services')} className="hover:text-white transition-colors">
                  PAN Application Fix
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('services')} className="hover:text-white transition-colors">
                  Passport Payment Failed
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('services')} className="hover:text-white transition-colors">
                  Income Certificate Rejection
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('services')} className="hover:text-white transition-colors">
                  Scholarship NSP Payment Refund
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              Citizen Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setCurrentView('status-tracker')} className="hover:text-white transition-colors">
                  Track Application Status
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('document-checklist')} className="hover:text-white transition-colors">
                  Check Required Documents
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('rejection-details')} className="hover:text-white transition-colors">
                  Fix Rejected Application
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('assistant')} className="hover:text-white transition-colors">
                  Ask SevaFix AI Assistant
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              Help & Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setCurrentView('faq')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('dashboard')} className="hover:text-white transition-colors">
                  Citizen Dashboard
                </button>
              </li>
              <li>
                <a href="https://pgportal.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  CPGRAMS Public Grievance Portal ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t('footerDisclaimer')}</p>
          <div className="flex items-center gap-1 text-slate-300">
            <span>Built for Public Good</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 mx-1" />
            <span>SevaFix 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
