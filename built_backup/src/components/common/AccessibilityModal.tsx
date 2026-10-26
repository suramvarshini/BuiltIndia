import React from 'react';
import { useApp } from '../../context/AppContext';
import { Eye, Type, X, Check, Keyboard } from 'lucide-react';

export const AccessibilityModal: React.FC = () => {
  const { 
    isAccessibilityModalOpen, 
    setIsAccessibilityModalOpen,
    highContrast,
    toggleHighContrast,
    largeText,
    toggleLargeText,
    t 
  } = useApp();

  if (!isAccessibilityModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-fade-in">
      <div className="bg-white text-slate-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-6">
        
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold">{t('accessibilityTitle')}</h3>
              <p className="text-xs text-slate-500">{t('accessibilityDesc')}</p>
            </div>
          </div>
          <button
            onClick={() => setIsAccessibilityModalOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          
          <div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="space-y-1 pr-4">
              <div className="flex items-center gap-2 font-bold text-base text-slate-900">
                <Eye className="w-5 h-5 text-blue-600" />
                <span>{t('highContrast')}</span>
              </div>
              <p className="text-xs text-slate-500">{t('highContrastDesc')}</p>
            </div>
            <button
              onClick={toggleHighContrast}
              className={`w-14 h-8 rounded-full p-1 transition-colors flex items-center ${
                highContrast ? 'bg-emerald-600 justify-end' : 'bg-slate-300 justify-start'
              }`}
              aria-label="Toggle High Contrast"
            >
              <div className="w-6 h-6 rounded-full bg-white shadow-xs flex items-center justify-center text-xs font-extrabold text-slate-800">
                {highContrast && <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />}
              </div>
            </button>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="space-y-1 pr-4">
              <div className="flex items-center gap-2 font-bold text-base text-slate-900">
                <Type className="w-5 h-5 text-indigo-600" />
                <span>{t('largeText')}</span>
              </div>
              <p className="text-xs text-slate-500">{t('largeTextDesc')}</p>
            </div>
            <button
              onClick={toggleLargeText}
              className={`w-14 h-8 rounded-full p-1 transition-colors flex items-center ${
                largeText ? 'bg-emerald-600 justify-end' : 'bg-slate-300 justify-start'
              }`}
              aria-label="Toggle Large Text"
            >
              <div className="w-6 h-6 rounded-full bg-white shadow-xs flex items-center justify-center text-xs font-extrabold text-slate-800">
                {largeText && <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />}
              </div>
            </button>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-xs text-blue-900 space-y-2">
            <div className="font-bold flex items-center gap-2 text-sm text-blue-950">
              <Keyboard className="w-4 h-4 text-blue-700" />
              <span>Keyboard Navigation Tips:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Press <kbd className="bg-white px-1.5 py-0.5 rounded border border-blue-300 font-mono">Tab</kbd> to move between interactive elements.</li>
              <li>Press <kbd className="bg-white px-1.5 py-0.5 rounded border border-blue-300 font-mono">Enter</kbd> or <kbd className="bg-white px-1.5 py-0.5 rounded border border-blue-300 font-mono">Space</kbd> to activate buttons.</li>
              <li>Press <kbd className="bg-white px-1.5 py-0.5 rounded border border-blue-300 font-mono">Esc</kbd> to close any dialog or modal.</li>
            </ul>
          </div>

        </div>

        <div className="pt-2">
          <button
            onClick={() => setIsAccessibilityModalOpen(false)}
            className="civic-btn-primary w-full text-base py-3"
          >
            {t('close')}
          </button>
        </div>

      </div>
    </div>
  );
};
