import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ApplicationRecord } from '../../types';
import { 
  Search, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ArrowRight, 
  FileText, 
  Download, 
  RefreshCw, 
  Building
} from 'lucide-react';

export const ApplicationTracker: React.FC = () => {
  const { 
    applications, 
    activeApplicationId, 
    setActiveApplicationId, 
    setCurrentView, 
    language, 
    t 
  } = useApp();

  const [inputAppId, setInputAppId] = useState(activeApplicationId || 'GOV202608291245');

  const currentApp = applications.find(
    a => a.id.toLowerCase() === inputAppId.trim().toLowerCase()
  ) || applications[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = applications.find(a => a.id.toLowerCase() === inputAppId.trim().toLowerCase());
    if (found) {
      setActiveApplicationId(found.id);
    }
  };

  const getStatusBadge = (status: ApplicationRecord['status']) => {
    switch (status) {
      case 'action_required':
        return {
          bg: 'bg-red-100 text-red-800 border-red-300',
          icon: <AlertCircle className="w-4 h-4 text-red-600" />,
          label: t('statusActionRequired')
        };
      case 'payment_pending':
        return {
          bg: 'bg-amber-100 text-amber-900 border-amber-300',
          icon: <Clock className="w-4 h-4 text-amber-700 animate-spin" />,
          label: t('statusPaymentPending')
        };
      case 'under_review':
        return {
          bg: 'bg-blue-100 text-blue-900 border-blue-300',
          icon: <Clock className="w-4 h-4 text-blue-600" />,
          label: t('statusUnderReview')
        };
      case 'approved':
        return {
          bg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
          label: t('statusApproved')
        };
      case 'rejected':
        return {
          bg: 'bg-rose-100 text-rose-900 border-rose-300',
          icon: <XCircle className="w-4 h-4 text-rose-600" />,
          label: t('statusRejected')
        };
      default:
        return {
          bg: 'bg-slate-100 text-slate-800 border-slate-300',
          icon: <Clock className="w-4 h-4" />,
          label: 'Submitted'
        };
    }
  };

  const badgeInfo = getStatusBadge(currentApp.status);

  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto">
      <div className="space-y-2 text-center sm:text-left">
        <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
          <Clock className="w-8 h-8 text-blue-600" />
          <span>{t('trackerTitle')}</span>
        </h1>
        <p className="text-slate-600 text-base">
          {t('trackerSubtitle')}
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={inputAppId}
              onChange={(e) => setInputAppId(e.target.value)}
              placeholder={t('enterAppId')}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-base font-semibold text-slate-900 uppercase focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button type="submit" className="civic-btn-primary py-3 px-6 text-base font-bold shrink-0">
            <span>Track Status</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="font-bold text-slate-500">Quick Samples:</span>
          {applications.map((app) => (
            <button
              key={app.id}
              onClick={() => {
                setInputAppId(app.id);
                setActiveApplicationId(app.id);
              }}
              className={`px-3 py-1.5 rounded-lg border font-mono font-bold transition-all ${
                currentApp.id === app.id
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
              }`}
            >
              {app.id} ({app.status.replace('_', ' ')})
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
        <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-emerald-400" />
              <span className="text-xs uppercase font-extrabold text-slate-400">
                {currentApp.serviceName[language] || currentApp.serviceName['en']}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Application ID: <span className="font-mono text-emerald-400">{currentApp.id}</span>
            </h2>
            <p className="text-xs text-slate-300 font-medium">
              Applicant: <span className="font-bold text-white">{currentApp.applicantName}</span> • Submitted: {currentApp.submissionDate}
            </p>
          </div>

          <div className={`px-4 py-2 rounded-xl border font-bold text-sm flex items-center gap-2 ${badgeInfo.bg}`}>
            {badgeInfo.icon}
            <span>{badgeInfo.label}</span>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
          <h3 className="text-xs uppercase tracking-widest font-extrabold text-slate-500 mb-6">
            Application Progress Timeline
          </h3>

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-2">
            <div className="hidden sm:block absolute top-5 left-8 right-8 h-1 bg-slate-300 -z-0" />

            {currentApp.timeline.map((step, idx) => {
              const label = step.label[language] || step.label['en'];
              
              let stepIcon = <div className="w-3 h-3 rounded-full bg-slate-400" />;
              let circleStyle = "bg-slate-200 border-slate-300 text-slate-500";

              if (step.status === 'completed') {
                circleStyle = "bg-emerald-600 border-emerald-600 text-white shadow-xs";
                stepIcon = <CheckCircle2 className="w-5 h-5 text-white" />;
              } else if (step.status === 'current') {
                circleStyle = "bg-blue-600 border-blue-600 text-white ring-4 ring-blue-100 shadow-md animate-pulse";
                stepIcon = <Clock className="w-5 h-5 text-white" />;
              } else if (step.status === 'failed') {
                circleStyle = "bg-red-600 border-red-600 text-white shadow-xs";
                stepIcon = <XCircle className="w-5 h-5 text-white" />;
              }

              return (
                <div key={idx} className="relative z-10 flex sm:flex-col items-center gap-3 sm:gap-2 sm:text-center flex-1">
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm shrink-0 ${circleStyle}`}>
                    {stepIcon}
                  </div>

                  <div className="space-y-0.5">
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
                      {label}
                    </p>
                    {step.date && (
                      <p className="text-[11px] font-mono text-slate-500">
                        {step.date}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {currentApp.problemSummary && (
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-red-900 font-extrabold text-base">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span>Issue Flagged by Official</span>
              </div>
              <p className="text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
                {currentApp.problemSummary[language] || currentApp.problemSummary['en']}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="civic-card p-5 space-y-2 bg-blue-50/50 border-blue-200">
              <h4 className="text-xs uppercase font-extrabold text-blue-900 tracking-wider">
                {t('whatThisMeans')}
              </h4>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {currentApp.whatThisMeans[language] || currentApp.whatThisMeans['en']}
              </p>
            </div>

            <div className="civic-card p-5 space-y-2 bg-emerald-50/50 border-emerald-200">
              <h4 className="text-xs uppercase font-extrabold text-emerald-900 tracking-wider">
                {t('actionRequired')}
              </h4>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {currentApp.whatYouShouldDoNow[language] || currentApp.whatYouShouldDoNow['en']}
              </p>
            </div>

            <div className="civic-card p-5 space-y-2 bg-slate-50 border-slate-200">
              <h4 className="text-xs uppercase font-extrabold text-slate-700 tracking-wider">
                {t('expectedNextAction')}
              </h4>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {currentApp.expectedNextAction[language] || currentApp.expectedNextAction['en']}
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h4 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>Associated Application Documents</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentApp.documents.map((doc, idx) => (
                <div key={idx} className="p-3 rounded-xl border bg-slate-50 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-800 truncate pr-2">{doc.name}</span>
                  {doc.status === 'uploaded' ? (
                    <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">
                      ✓ Valid
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded text-[10px]">
                      ⚠️ Action Needed
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            {currentApp.status === 'action_required' && (
              <button
                onClick={() => setCurrentView('rejection-details')}
                className="civic-btn-primary text-base font-extrabold px-6 py-3 bg-red-600 hover:bg-red-700"
              >
                <AlertCircle className="w-5 h-5" />
                <span>Fix Document Issue Now</span>
              </button>
            )}

            {currentApp.status === 'approved' && (
              <button
                onClick={() => alert("Certificate downloaded successfully!")}
                className="civic-btn-success text-base font-extrabold px-6 py-3"
              >
                <Download className="w-5 h-5" />
                <span>Download Official Certificate PDF</span>
              </button>
            )}

            {currentApp.status === 'payment_pending' && (
              <button
                onClick={() => alert("Re-verifying payment with gateway... Status updated!")}
                className="civic-btn-primary text-base font-extrabold px-6 py-3"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Re-verify Gateway Payment</span>
              </button>
            )}

            <button
              onClick={() => setCurrentView('document-checklist')}
              className="civic-btn-secondary text-sm font-bold px-5 py-3"
            >
              <span>Check Document Guidelines</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
