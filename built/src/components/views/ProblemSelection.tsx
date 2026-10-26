import React from 'react';
import { useApp } from '../../context/AppContext';
import { GOV_SERVICES, PROBLEMS_CATALOG } from '../../data/servicesData';
import { 
  CreditCard, 
  XCircle, 
  FileX, 
  UploadCloud, 
  Clock, 
  Smartphone, 
  Edit3, 
  AlertTriangle, 
  Calendar, 
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';

const PROBLEM_ICON_MAP: Record<string, React.ReactNode> = {
  CreditCard: <CreditCard className="w-8 h-8 text-emerald-600" />,
  XCircle: <XCircle className="w-8 h-8 text-red-600" />,
  FileX: <FileX className="w-8 h-8 text-amber-600" />,
  UploadCloud: <UploadCloud className="w-8 h-8 text-blue-600" />,
  Clock: <Clock className="w-8 h-8 text-indigo-600" />,
  Smartphone: <Smartphone className="w-8 h-8 text-purple-600" />,
  Edit3: <Edit3 className="w-8 h-8 text-rose-600" />,
  AlertTriangle: <AlertTriangle className="w-8 h-8 text-red-700" />,
  Calendar: <Calendar className="w-8 h-8 text-teal-600" />,
  HelpCircle: <HelpCircle className="w-8 h-8 text-slate-600" />
};

export const ProblemSelection: React.FC = () => {
  const { 
    selectedServiceId, 
    setCurrentView, 
    selectProblemAndProceed, 
    language, 
    t 
  } = useApp();

  const currentService = GOV_SERVICES.find(s => s.id === selectedServiceId) || GOV_SERVICES[0];
  const serviceName = currentService.name[language] || currentService.name['en'];

  return (
    <div className="space-y-8 py-4">
      <div className="space-y-4">
        <button
          onClick={() => setCurrentView('services')}
          className="civic-btn-secondary text-xs px-3 py-1.5 font-bold hover:bg-slate-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Change Selected Service</span>
        </button>

        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-lg border border-blue-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-300 font-bold bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              Selected Service
            </div>
            <h2 className="text-2xl font-black text-white">{serviceName}</h2>
            <p className="text-xs text-slate-300">Official portal: {currentService.officialPortal}</p>
          </div>
          <span className="text-xs bg-blue-800/80 text-blue-200 px-3 py-1.5 rounded-lg border border-blue-700 font-semibold">
            {currentService.requiredDocsCount} Required Documents
          </span>
        </div>
      </div>

      <div className="space-y-2 text-center sm:text-left">
        <h1 className="text-3xl font-black text-slate-900">
          {t('selectProblemTitle')}
        </h1>
        <p className="text-slate-600 text-base">
          {t('selectProblemSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROBLEMS_CATALOG.map((prob) => {
          const title = prob.title[language] || prob.title['en'];
          const desc = prob.description[language] || prob.description['en'];

          return (
            <div
              key={prob.id}
              onClick={() => selectProblemAndProceed(prob.id)}
              className="civic-card-interactive p-6 flex items-start gap-5 group"
            >
              <div className="p-3.5 bg-slate-100 rounded-2xl shrink-0 group-hover:scale-105 transition-transform">
                {PROBLEM_ICON_MAP[prob.iconName] || <HelpCircle className="w-8 h-8 text-slate-600" />}
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-blue-700 transition-colors">
                    {title}
                  </h3>
                  {prob.severity === 'critical' && (
                    <span className="text-[10px] uppercase tracking-wider font-extrabold bg-red-100 text-red-700 px-2 py-0.5 rounded">
                      High Priority
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {desc}
                </p>

                <div className="pt-2 flex items-center text-xs text-blue-700 font-bold gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Get Step-by-Step Fix Instructions</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
