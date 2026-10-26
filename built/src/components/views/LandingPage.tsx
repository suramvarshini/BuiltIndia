import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GOV_SERVICES } from '../../data/servicesData';
import { 
  ShieldCheck, 
  Search, 
  ArrowRight, 
  FileCheck, 
  Clock, 
  CreditCard, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  Users,
  HelpCircle,
  Fingerprint,
  Globe,
  Car,
  FileText,
  Award,
  GraduationCap,
  Baby,
  Home,
  HeartHandshake,
  Utensils,
  Landmark
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Fingerprint: <Fingerprint className="w-6 h-6 text-blue-600" />,
  CreditCard: <CreditCard className="w-6 h-6 text-emerald-600" />,
  Globe: <Globe className="w-6 h-6 text-indigo-600" />,
  Car: <Car className="w-6 h-6 text-amber-600" />,
  FileText: <FileText className="w-6 h-6 text-purple-600" />,
  Award: <Award className="w-6 h-6 text-red-600" />,
  Baby: <Baby className="w-6 h-6 text-pink-600" />,
  Home: <Home className="w-6 h-6 text-teal-600" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-blue-600" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-rose-600" />,
  Utensils: <Utensils className="w-6 h-6 text-amber-700" />,
  Landmark: <Landmark className="w-6 h-6 text-cyan-600" />,
  HelpCircle: <HelpCircle className="w-6 h-6 text-slate-600" />
};

export const LandingPage: React.FC = () => {
  const { setCurrentView, selectServiceAndProceed, language, t } = useApp();
  const [localSearch, setLocalSearch] = useState('');

  const filteredServices = GOV_SERVICES.filter(service => {
    const name = service.name[language] || service.name['en'];
    const desc = service.description[language] || service.description['en'];
    return name.toLowerCase().includes(localSearch.toLowerCase()) || 
           desc.toLowerCase().includes(localSearch.toLowerCase());
  });

  const popularServices = GOV_SERVICES.filter(s => s.popular);

  return (
    <div className="space-y-16 py-6">
      
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-slate-900 to-slate-900 text-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-slate-800">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-sm font-extrabold px-4 py-1.5 rounded-full border border-emerald-500/40 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t('tagline')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Turn confusing portal errors into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">clear recovery steps</span>.
          </h1>

          <div className="bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-slate-700/80 shadow-inner max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
              “{t('prominentBanner')}”
            </p>
          </div>

          <div className="max-w-2xl mx-auto pt-2">
            <div className="relative flex items-center bg-white text-slate-900 rounded-2xl shadow-2xl p-2 border-2 border-blue-400 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/20 transition-all">
              <Search className="w-6 h-6 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full bg-transparent px-3 py-3 text-base sm:text-lg font-medium text-slate-900 focus:outline-none placeholder-slate-400"
              />
              <button
                onClick={() => {
                  if (filteredServices.length > 0) {
                    selectServiceAndProceed(filteredServices[0].id);
                  } else {
                    setCurrentView('services');
                  }
                }}
                className="civic-btn-primary py-3 px-6 rounded-xl text-base shrink-0 font-bold"
              >
                <span>{t('searchBtn')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-300">
              <span className="font-semibold text-slate-400">Try searching:</span>
              {['Aadhaar Address', 'PAN Link', 'Passport Payment', 'Income Cert', 'NSP Scholarship'].map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setLocalSearch(term);
                    setCurrentView('services');
                  }}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-md border border-slate-700 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setCurrentView('services')}
              className="civic-btn-success text-base sm:text-lg px-8 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-500/20 font-extrabold"
            >
              <Sparkles className="w-5 h-5" />
              <span>{t('startRecovery')}</span>
            </button>

            <button
              onClick={() => setCurrentView('status-tracker')}
              className="civic-btn-secondary text-base sm:text-lg px-6 py-3.5 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-white border-slate-700"
            >
              <Clock className="w-5 h-5 text-blue-400" />
              <span>{t('trackApplication')}</span>
            </button>

            <button
              onClick={() => setCurrentView('document-checklist')}
              className="civic-btn-secondary text-base sm:text-lg px-6 py-3.5 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-white border-slate-700"
            >
              <FileCheck className="w-5 h-5 text-emerald-400" />
              <span>{t('checkDocuments')}</span>
            </button>
          </div>

        </div>
      </section>

      <section className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-black text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            Citizen Recovery Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How SevaFix Resolves Portal Errors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every problem leads to a simple, actionable recovery path. You are never left stranded.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="civic-card p-6 space-y-3 relative border-t-4 border-t-red-500">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-black text-lg">
              1
            </div>
            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              Select Error
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pick your service and select the exact error (e.g. Payment Failed, Document Rejected).
            </p>
          </div>

          <div className="civic-card p-6 space-y-3 relative border-t-4 border-t-amber-500">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-black text-lg">
              2
            </div>
            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-600" />
              Know Why
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Understand the exact root cause in simple language without portal jargon.
            </p>
          </div>

          <div className="civic-card p-6 space-y-3 relative border-t-4 border-t-blue-500">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg">
              3
            </div>
            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-blue-600" />
              Follow Fix Steps
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Get interactive checkable instructions, exact format rules, and required documents.
            </p>
          </div>

          <div className="civic-card p-6 space-y-3 relative border-t-4 border-t-emerald-500">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-lg">
              4
            </div>
            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Complete Action
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Track real-time status and successfully resubmit or download your certificate.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Popular Government Services
            </h2>
            <p className="text-slate-600 text-sm">
              Select any service to begin smart error recovery.
            </p>
          </div>
          <button
            onClick={() => setCurrentView('services')}
            className="civic-btn-secondary text-sm px-4 py-2 font-bold hover:border-blue-500"
          >
            <span>View All 13+ Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularServices.map((service) => (
            <div
              key={service.id}
              onClick={() => selectServiceAndProceed(service.id)}
              className="civic-card-interactive p-6 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {ICON_MAP[service.iconName] || <FileText className="w-6 h-6 text-blue-600" />}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                    {service.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.name[language] || service.name['en']}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {service.description[language] || service.description['en']}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-blue-700 font-bold border-t border-slate-100">
                <span>Start Recovery Guide →</span>
                <span className="text-slate-400 font-normal">{service.requiredDocsCount} Docs required</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-extrabold px-3 py-1 rounded-full border border-amber-500/40">
            <Users className="w-4 h-4" />
            <span>Designed For Every Citizen</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Built specifically for non-technical users, students, and senior citizens.
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Large readable text, simple non-technical language, high-contrast options, and interactive checklists ensure you never feel lost on a government portal.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => setCurrentView('assistant')}
            className="civic-btn-primary px-6 py-3.5 text-base font-bold bg-emerald-600 hover:bg-emerald-700"
          >
            <Sparkles className="w-5 h-5" />
            <span>Try SevaFix AI Assistant</span>
          </button>
          <button
            onClick={() => setCurrentView('faq')}
            className="civic-btn-secondary px-6 py-3 text-sm font-semibold bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
          >
            <span>Read Help & FAQs</span>
          </button>
        </div>
      </section>

    </div>
  );
};
