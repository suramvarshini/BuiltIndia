import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { RECOVERY_GUIDES } from '../../data/recoveryData';
import { GOV_SERVICES, PROBLEMS_CATALOG } from '../../data/servicesData';
import { 
  ShieldCheck, 
  CheckSquare, 
  Square, 
  ArrowRight, 
  ArrowLeft, 
  FileText, 
  Clock, 
  PhoneCall, 
  AlertTriangle, 
  HelpCircle,
  Sparkles,
  FileCheck,
  CheckCircle2
} from 'lucide-react';

export const SmartErrorRecovery: React.FC = () => {
  const { 
    selectedServiceId, 
    selectedProblemId, 
    setCurrentView, 
    trackApplicationWithId,
    language, 
    t 
  } = useApp();

  const serviceId = selectedServiceId || 'income-cert';
  const problemId = selectedProblemId || 'payment-failed';

  const service = GOV_SERVICES.find(s => s.id === serviceId) || GOV_SERVICES[0];
  const problemObj = PROBLEMS_CATALOG.find(p => p.id === problemId) || PROBLEMS_CATALOG[0];

  const guide = RECOVERY_GUIDES[problemId] || RECOVERY_GUIDES['payment-failed'];

  const serviceName = service.name[language] || service.name['en'];
  const problemTitle = problemObj.title[language] || problemObj.title['en'];

  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  const toggleStep = (stepId: number) => {
    setCompletedSteps(prev => ({ ...prev, [stepId]: !prev[stepId] }));
  };

  const totalSteps = guide.steps.length;
  const doneCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((doneCount / totalSteps) * 100);

  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentView('problem-select')}
          className="civic-btn-secondary text-xs px-3 py-1.5 font-bold hover:bg-slate-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Select Different Problem</span>
        </button>

        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          {serviceName} • {problemTitle}
        </span>
      </div>

      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-extrabold px-3 py-1 rounded-full border border-emerald-500/40">
            <ShieldCheck className="w-4 h-4" />
            <span>Smart Recovery Plan</span>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Checklist Progress: {doneCount}/{totalSteps} ({progressPercent}%)</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
          {guide.problemTitle[language] || guide.problemTitle['en']}
        </h1>

        <p className="text-slate-300 text-xs sm:text-sm font-medium">
          Follow this recovery workflow to resolve the error and complete your submission.
        </p>

        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <section className="civic-card p-6 space-y-3 border-l-4 border-l-blue-600">
        <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          <span>{t('whatHappened')}</span>
        </h2>
        <p className="text-slate-700 text-base leading-relaxed font-medium bg-blue-50/50 p-4 rounded-xl border border-blue-100">
          {guide.whatHappened[language] || guide.whatHappened['en']}
        </p>
      </section>

      <section className="civic-card p-6 space-y-4 border-l-4 border-l-amber-500">
        <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-500" />
          <span>{t('possibleReasons')}</span>
        </h2>
        <ul className="space-y-3">
          {guide.possibleReasons.map((reason, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
              <span>{reason[language] || reason['en']}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="civic-card p-6 space-y-6 border-l-4 border-l-emerald-600">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <CheckSquare className="w-6 h-6 text-emerald-600" />
              <span>{t('whatToDoNow')}</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Click the checkbox on each step as you complete it.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {guide.steps.map((step) => {
            const isDone = !!completedSteps[step.id];
            const title = step.title[language] || step.title['en'];
            const detail = step.detail[language] || step.detail['en'];
            const tip = step.tip ? (step.tip[language] || step.tip['en']) : null;

            return (
              <div 
                key={step.id} 
                onClick={() => toggleStep(step.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isDone 
                    ? 'bg-emerald-50/80 border-emerald-300 shadow-xs' 
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-xs'
                }`}
              >
                <div className="flex items-start gap-4">
                  <button
                    className={`mt-1 text-2xl transition-colors ${
                      isDone ? 'text-emerald-600' : 'text-slate-300 hover:text-blue-500'
                    }`}
                    aria-label={`Mark step ${step.id} as complete`}
                  >
                    {isDone ? <CheckSquare className="w-6 h-6 fill-emerald-100" /> : <Square className="w-6 h-6" />}
                  </button>

                  <div className="space-y-1.5 flex-1">
                    <h3 className={`text-base sm:text-lg font-extrabold ${isDone ? 'text-emerald-900 line-through' : 'text-slate-900'}`}>
                      {title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDone ? 'text-emerald-800' : 'text-slate-600'}`}>
                      {detail}
                    </p>

                    {tip && (
                      <div className="mt-2 bg-amber-50 text-amber-900 text-xs font-bold px-3 py-2 rounded-lg border border-amber-200 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{tip}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="civic-card p-6 space-y-4">
          <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span>{t('documentsRequired')}</span>
          </h3>
          <ul className="space-y-2.5">
            {guide.requiredDocs.map((doc, i) => (
              <li key={i} className="text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                <span>{doc[language] || doc['en']}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setCurrentView('document-checklist')}
            className="civic-btn-secondary w-full text-xs font-bold py-2.5"
          >
            <FileCheck className="w-4 h-4 text-emerald-600" />
            <span>Open Document Format Inspector</span>
          </button>
        </div>

        <div className="civic-card p-6 space-y-4">
          <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span>{t('waitTimeNotice')}</span>
          </h3>

          {guide.waitNotice && (
            <div className="bg-indigo-50 text-indigo-950 text-xs sm:text-sm font-medium p-3.5 rounded-xl border border-indigo-200">
              {guide.waitNotice[language] || guide.waitNotice['en']}
            </div>
          )}

          <div className="space-y-2 pt-1">
            <div className="text-xs font-bold text-slate-700">{t('supportContact')}</div>
            <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center gap-2 font-mono">
              <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{guide.supportInfo[language] || guide.supportInfo['en']}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-lg font-extrabold text-white">Ready for the Next Action?</h4>
          <p className="text-xs text-slate-300">
            Click below to execute the recommended fix or track your application.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => trackApplicationWithId('GOV202608291245')}
            className="civic-btn-success text-base px-6 py-3 font-extrabold w-full sm:w-auto"
          >
            <span>{guide.nextStepButtonText[language] || guide.nextStepButtonText['en']}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => setCurrentView('assistant')}
            className="civic-btn-secondary text-sm px-4 py-3 bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 font-bold w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Ask Assistant</span>
          </button>
        </div>
      </div>

    </div>
  );
};
