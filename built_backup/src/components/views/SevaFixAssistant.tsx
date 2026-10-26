import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ChatMessage, ChatStructuredResponse } from '../../types';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw
} from 'lucide-react';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'assistant',
    text: 'Hello! I am your SevaFix Recovery Assistant. How can I help you recover from a government portal error today?',
    timestamp: 'Just now',
    structured: {
      problem: 'Government Portal Error / Application Stalled',
      explanation: 'I convert complex error codes into simple, step-by-step recovery plans so your application never gets stuck.',
      recommendedAction: [
        'Select a quick prompt below or type your question.',
        'Upload error details or application ID for instant diagnosis.',
        'Get clear guidance on documents, payments, and resubmissions.'
      ],
      nextStep: 'Click a suggested prompt below to get started!'
    },
    quickReplies: [
      'Why was my application rejected?',
      'Money deducted but payment failed',
      'Which documents are required?',
      'My application is pending for weeks',
      'Can I resubmit without paying again?'
    ]
  }
];

export const SevaFixAssistant: React.FC = () => {
  const { setCurrentView, trackApplicationWithId, t } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (userText: string) => {
    if (!userText.trim()) return;

    const userMsg: ChatMessage = {
      id: `u_${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let structuredResp: ChatStructuredResponse;
      let replyText = '';

      const lower = userText.toLowerCase();

      if (lower.includes('payment') || lower.includes('deducted') || lower.includes('money')) {
        replyText = "Here is what to do when your payment fails but money is deducted from your bank account:";
        structuredResp = {
          problem: "Payment Failed / Money Deducted from Bank",
          explanation: "The payment gateway session timed out before communicating success to the government server. Money is held safely in gateway escrow.",
          recommendedAction: [
            "1. Do NOT pay again immediately if money was debited.",
            "2. Note down the 12-digit UTR number from your bank SMS.",
            "3. Wait 24 to 48 hours for automated bank reconciliation.",
            "4. Log in and click 'Verify Payment Status' on the service portal."
          ],
          nextStep: "If payment status stays failed after 48 hours, money will be automatically refunded within 3-7 business days."
        };
      } else if (lower.includes('reject') || lower.includes('why rejected')) {
        replyText = "Here is how to analyze and fix a rejected government application:";
        structuredResp = {
          problem: "Application Rejected by Official",
          explanation: "Applications are rejected due to blurry document scans, name/DOB spelling mismatches with Aadhaar, or expired certificates.",
          recommendedAction: [
            "1. Open your application dashboard to read exact officer remarks.",
            "2. Scan a fresh, clear copy of identity/address proof in PDF under 2 MB.",
            "3. Ensure name and DOB match word-for-word with your Aadhaar card.",
            "4. Click 'Fix & Resubmit' within 30 days for free correction."
          ],
          nextStep: "Go to the Rejection Resolution Assistant to upload your corrected document now."
        };
      } else if (lower.includes('pending') || lower.includes('stuck') || lower.includes('status')) {
        replyText = "Here is what your pending status means and what action you should take:";
        structuredResp = {
          problem: "Application Pending / Under Review",
          explanation: "Your file is queued for field inspection (VRO) or municipal registrar approval. Average processing time is 7 to 14 days.",
          recommendedAction: [
            "1. Check the visual progress timeline in our Application Tracker.",
            "2. Ensure no additional document request notification has been issued.",
            "3. If pending over 21 days, file a query on CPGRAMS portal (pgportal.gov.in)."
          ],
          nextStep: "No action required if pending within normal processing timeframe."
        };
      } else if (lower.includes('document') || lower.includes('required') || lower.includes('format')) {
        replyText = "Here are the general document rules for government portals:";
        structuredResp = {
          problem: "Document Upload Rules & Readiness",
          explanation: "Portals enforce strict 2 MB maximum file limits and accept only PDF or JPG formats.",
          recommendedAction: [
            "1. Keep file size under 2.0 MB using standard compressors.",
            "2. Ensure photograph has white background without dark glasses.",
            "3. Utility bills (electricity/gas) must be under 3 months old."
          ],
          nextStep: "Use our interactive Document Readiness Inspector to test your files."
        };
      } else {
        replyText = `Thank you for your question regarding: "${userText}". Here is your structured recovery guide:`;
        structuredResp = {
          problem: "Service Portal Recovery Guidance",
          explanation: "SevaFix provides actionable recovery steps for all major public service portals across India.",
          recommendedAction: [
            "1. Select your specific government service from our Services catalog.",
            "2. Choose the exact error card matching your portal screen.",
            "3. Follow the checkable step-by-step recovery plan."
          ],
          nextStep: "Click 'Start Recovery' to select your service."
        };
      }

      const assistantMsg: ChatMessage = {
        id: `a_${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        structured: structuredResp,
        quickReplies: [
          'Fix my payment error',
          'Fix my rejected document',
          'Track Application Status',
          'Test document file size'
        ]
      };

      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="space-y-6 py-4 max-w-4xl mx-auto flex flex-col h-[calc(100vh-12rem)] min-h-[600px]">
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-5 rounded-2xl border border-slate-800 flex items-center justify-between shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 flex items-center justify-center font-black">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold">{t('assistantTitle')}</h1>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                Active 24/7
              </span>
            </div>
            <p className="text-xs text-slate-300">
              {t('assistantSubtitle')}
            </p>
          </div>
        </div>

        <button
          onClick={() => setMessages(INITIAL_MESSAGES)}
          className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
          title="Reset Chat Conversation"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-slate-100 rounded-2xl border border-slate-200">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 max-w-3xl ${
              msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
            }`}
          >
            <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-white ${
              msg.sender === 'user' ? 'bg-blue-600' : 'bg-slate-900'
            }`}>
              {msg.sender === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5 text-emerald-400" />}
            </div>

            <div className="space-y-3 flex-1">
              <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-xs ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white font-semibold rounded-tr-none'
                  : 'bg-white text-slate-900 border border-slate-200 rounded-tl-none font-medium'
              }`}>
                {msg.text}
              </div>

              {msg.structured && (
                <div className="bg-white rounded-2xl border-2 border-blue-200 p-5 space-y-4 shadow-md animate-fade-in">
                  <div className="bg-red-50 p-3 rounded-xl border border-red-200 text-red-950 font-bold text-xs flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Problem: {msg.structured.problem}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs uppercase font-extrabold text-blue-900 tracking-wider">
                      Why this happened:
                    </span>
                    <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium">
                      {msg.structured.explanation}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs uppercase font-extrabold text-emerald-800 tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Recommended Action Plan:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-800">
                      {msg.structured.recommendedAction.map((act, i) => (
                        <li key={i} className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-200 font-medium flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-900 text-white p-3.5 rounded-xl flex items-center justify-between text-xs font-bold gap-2">
                    <span>Next Step: {msg.structured.nextStep}</span>
                    <button
                      onClick={() => setCurrentView('services')}
                      className="civic-btn-success py-1.5 px-3 text-[11px] font-extrabold shrink-0"
                    >
                      <span>Take Action</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {msg.quickReplies && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {msg.quickReplies.map((reply, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(reply)}
                      className="bg-white hover:bg-blue-50 text-blue-800 border border-blue-300 text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs transition-all flex items-center gap-1"
                    >
                      <span>{reply}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 items-center text-xs text-slate-500 font-bold bg-white p-3 rounded-2xl border border-slate-200 max-w-xs animate-pulse">
            <Bot className="w-5 h-5 text-blue-600" />
            <span>SevaFix Assistant is preparing recovery guidance...</span>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputQuery);
        }}
        className="relative flex items-center bg-white rounded-2xl border-2 border-slate-300 focus-within:border-blue-600 p-2 shadow-lg shrink-0"
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder="Type your portal problem or ask a question..."
          className="w-full bg-transparent px-4 py-2 text-sm font-medium text-slate-900 focus:outline-none"
        />
        <button
          type="submit"
          className="civic-btn-primary py-2.5 px-5 text-sm font-bold shrink-0 rounded-xl"
        >
          <span>Send</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
