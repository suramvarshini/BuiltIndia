import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  LayoutDashboard, 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  CreditCard
} from 'lucide-react';

export const CitizenDashboard: React.FC = () => {
  const { 
    applications, 
    setCurrentView, 
    trackApplicationWithId, 
    language, 
    t 
  } = useApp();

  const actionRequiredApps = applications.filter(a => a.status === 'action_required');
  const paymentPendingApps = applications.filter(a => a.status === 'payment_pending');
  const underReviewApps = applications.filter(a => a.status === 'under_review');
  const approvedApps = applications.filter(a => a.status === 'approved');

  return (
    <div className="space-y-8 py-4 max-w-6xl mx-auto">
      <div className="space-y-2 text-center sm:text-left">
        <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
          <LayoutDashboard className="w-8 h-8 text-blue-600" />
          <span>{t('dashboardTitle')}</span>
        </h1>
        <p className="text-slate-600 text-base">
          {t('dashboardSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-red-50 p-5 rounded-2xl border border-red-200 space-y-1">
          <div className="flex items-center justify-between text-red-700 font-extrabold text-xs">
            <span>Action Required</span>
            <AlertCircle className="w-5 h-5" />
          </div>
          <p className="text-3xl font-black text-red-950">{actionRequiredApps.length}</p>
          <p className="text-[11px] text-red-800">Requires document fix</p>
        </div>

        <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-1">
          <div className="flex items-center justify-between text-amber-800 font-extrabold text-xs">
            <span>Pending Payments</span>
            <CreditCard className="w-5 h-5" />
          </div>
          <p className="text-3xl font-black text-amber-950">{paymentPendingApps.length}</p>
          <p className="text-[11px] text-amber-800">Reconciliation active</p>
        </div>

        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-1">
          <div className="flex items-center justify-between text-blue-800 font-extrabold text-xs">
            <span>Under Review</span>
            <Clock className="w-5 h-5" />
          </div>
          <p className="text-3xl font-black text-blue-950">{underReviewApps.length}</p>
          <p className="text-[11px] text-blue-800">Officer inspection</p>
        </div>

        <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-1">
          <div className="flex items-center justify-between text-emerald-800 font-extrabold text-xs">
            <span>Completed & Ready</span>
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <p className="text-3xl font-black text-emerald-950">{approvedApps.length}</p>
          <p className="text-[11px] text-emerald-800">Certificates available</p>
        </div>
      </div>

      {actionRequiredApps.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-red-900 font-extrabold text-lg">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span>Applications Requiring Action</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {actionRequiredApps.map((app) => (
              <div key={app.id} className="civic-card p-6 border-l-4 border-l-red-600 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-500">{app.id}</span>
                    <h3 className="font-extrabold text-xl text-slate-900">
                      {app.serviceName[language] || app.serviceName['en']}
                    </h3>
                  </div>
                  <span className="bg-red-100 text-red-800 text-xs font-bold px-2.5 py-1 rounded-md">
                    Action Required
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 bg-red-50 p-3 rounded-xl border border-red-100 font-medium">
                  {app.problemSummary?.[language] || app.problemSummary?.['en']}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500 font-medium">Updated: {app.lastUpdated}</span>
                  <button
                    onClick={() => setCurrentView('rejection-details')}
                    className="civic-btn-primary py-2 px-5 text-xs font-bold bg-red-600 hover:bg-red-700"
                  >
                    <span>Fix Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {paymentPendingApps.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-lg">
            <CreditCard className="w-5 h-5 text-amber-600" />
            <span>Payment Issues & Pending Verification</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentPendingApps.map((app) => (
              <div key={app.id} className="civic-card p-6 border-l-4 border-l-amber-500 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-500">{app.id}</span>
                    <h3 className="font-extrabold text-xl text-slate-900">
                      {app.serviceName[language] || app.serviceName['en']}
                    </h3>
                  </div>
                  <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                    Payment Verification
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 bg-amber-50 p-3 rounded-xl border border-amber-100 font-medium">
                  {app.problemSummary?.[language] || app.problemSummary?.['en']}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500 font-medium">Submitted: {app.submissionDate}</span>
                  <button
                    onClick={() => trackApplicationWithId(app.id)}
                    className="civic-btn-primary py-2 px-5 text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    <span>Check Payment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-4">
        <h2 className="text-xl font-extrabold text-slate-900">
          All Active Applications Tracker
        </h2>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-xs uppercase font-extrabold tracking-wider border-b border-slate-200">
                  <th className="p-4">App ID</th>
                  <th className="p-4">Government Service</th>
                  <th className="p-4">Submission Date</th>
                  <th className="p-4">Current Status</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm font-medium">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-mono font-bold text-slate-900">{app.id}</td>
                    <td className="p-4 text-slate-900 font-bold">
                      {app.serviceName[language] || app.serviceName['en']}
                    </td>
                    <td className="p-4 text-slate-600 text-xs">{app.submissionDate}</td>
                    <td className="p-4">
                      <span className={`text-xs font-extrabold px-2.5 py-1 rounded-md border ${app.statusBadge.color === 'red' ? 'bg-red-100 text-red-800 border-red-200' : app.statusBadge.color === 'amber' ? 'bg-amber-100 text-amber-900 border-amber-200' : app.statusBadge.color === 'green' ? 'bg-emerald-100 text-emerald-900 border-emerald-200' : 'bg-blue-100 text-blue-900 border-blue-200'}`}>
                        {app.statusBadge.label[language] || app.statusBadge.label['en']}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => trackApplicationWithId(app.id)}
                        className="civic-btn-secondary text-xs px-3 py-1.5 font-bold inline-flex items-center gap-1 hover:border-blue-500"
                      >
                        <span>Track</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};
