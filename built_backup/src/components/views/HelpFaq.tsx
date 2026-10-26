import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    category: 'Payment Failures',
    question: 'My money was deducted from my bank account, but payment failed. What should I do?',
    answer: 'Do not pay again immediately! In 92% of cases, government payment gateways auto-reconcile within 24 to 48 hours. If the status remains failed after 48 hours, the deducted amount will be auto-refunded to your bank account within 3 to 7 working days.'
  },
  {
    category: 'Payment Failures',
    question: 'Where can I find my UTR or Bank Reference Number?',
    answer: 'The UTR (Unique Transaction Reference) is a 12-digit number found in your bank SMS receipt or your UPI app transaction history (Google Pay, PhonePe, Paytm). Keep this handy when contacting support.'
  },
  {
    category: 'Document Errors',
    question: 'Why does the portal say my file upload failed?',
    answer: 'Government portals strictly enforce file size limits (usually max 2 MB or 500 KB) and format rules (.pdf, .jpg, .png only). Use our interactive Document Readiness Inspector tool to test and compress your file before uploading.'
  },
  {
    category: 'Document Errors',
    question: 'How old can my electricity bill or address proof be?',
    answer: 'Utility bills used as address proof must be issued within the last 3 months (90 days). Older bills will be rejected by designated revenue inspectors.'
  },
  {
    category: 'Application Rejections',
    question: 'Can I resubmit my application after it has been rejected?',
    answer: 'Yes! Most government portals allow free correction and resubmission within 30 days of rejection. Use our Rejection Resolution Assistant to identify the exact officer remark and upload the corrected document.'
  },
  {
    category: 'OTP & Verification',
    question: 'I am not receiving OTP on my registered mobile number. How to fix?',
    answer: 'Check that your mobile number is active and has SMS incoming validity. If using Aadhaar OTP, ensure your mobile is linked at an Aadhaar Seva Kendra. Try resending after 3 minutes or clearing browser cache.'
  }
];

export const HelpFaq: React.FC = () => {
  const { setCurrentView, t } = useApp();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-8 py-4 max-w-4xl mx-auto">
      <div className="space-y-2 text-center sm:text-left">
        <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
          <HelpCircle className="w-8 h-8 text-blue-600" />
          <span>{t('navHelp')}</span>
        </h1>
        <p className="text-slate-600 text-base">
          Frequently Asked Questions and citizen recovery guidance.
        </p>
      </div>

      <div className="space-y-4">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIdx === idx;

          return (
            <div
              key={idx}
              className="civic-card overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-base text-slate-900 hover:bg-slate-50 focus:outline-none"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {item.category}
                  </span>
                  <div className="text-base sm:text-lg">{item.question}</div>
                </div>
                <div className="p-2 text-slate-400">
                  {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-sm text-slate-700 font-medium leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl font-extrabold text-white">Still stuck or have a specific portal error?</h3>
          <p className="text-xs text-slate-300">
            Ask our SevaFix AI Assistant for instant, structured step-by-step guidance.
          </p>
        </div>
        <button
          onClick={() => setCurrentView('assistant')}
          className="civic-btn-success text-base font-extrabold px-6 py-3 shrink-0"
        >
          <Sparkles className="w-5 h-5 text-emerald-300" />
          <span>Ask SevaFix Assistant</span>
        </button>
      </div>
    </div>
  );
};
