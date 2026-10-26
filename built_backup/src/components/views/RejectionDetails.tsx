import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  XCircle, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowLeft, 
  FileText, 
  UploadCloud, 
  HelpCircle, 
  RefreshCw
} from 'lucide-react';

export const RejectionDetails: React.FC = () => {
  const { setCurrentView, trackApplicationWithId, t } = useApp();
  const [activeTab, setActiveTab] = useState<'fix' | 'why' | 'docs'>('fix');
  const [resubmitted, setResubmitted] = useState(false);

  const handleSimulatedResubmit = () => {
    setResubmitted(true);
    setTimeout(() => {
      trackApplicationWithId('GOV202608291245');
    }, 1500);
  };

  return (
    <div className="space-y-8 py-4 max-w-4xl mx-auto">
      <button
        onClick={() => setCurrentView('dashboard')}
        className="civic-btn-secondary text-xs px-3 py-1.5 font-bold hover:bg-slate-200"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Citizen Dashboard</span>
      </button>

      <div className="bg-red-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-red-800 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-red-600/30 text-red-400 flex items-center justify-center border border-red-500/40">
            <XCircle className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs uppercase font-extrabold text-red-300 tracking-wider">
              Service: Income Certificate (GOV202608291245)
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              Application Action Required
            </h1>
          </div>
        </div>

        <div className="bg-red-900/60 p-4 rounded-2xl border border-red-700/60 text-sm text-red-100 font-medium">
          <strong className="font-extrabold text-white">Officer Rejection Remark: </strong>
          “Uploaded address proof document (electricity bill) could not be verified due to expiration (over 6 months old) and low resolution.”
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveTab('fix')}
          className={`px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all flex items-center gap-2 ${
            activeTab === 'fix'
              ? 'bg-blue-700 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          <span>Fix and Resubmit</span>
        </button>

        <button
          onClick={() => setActiveTab('why')}
          className={`px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all flex items-center gap-2 ${
            activeTab === 'why'
              ? 'bg-blue-700 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Why was this rejected?</span>
        </button>

        <button
          onClick={() => setActiveTab('docs')}
          className={`px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all flex items-center gap-2 ${
            activeTab === 'docs'
              ? 'bg-blue-700 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>What document do I need?</span>
        </button>
      </div>

      {activeTab === 'fix' && (
        <div className="space-y-6 animate-fade-in">
          <section className="civic-card p-6 space-y-4 border-l-4 border-l-emerald-600">
            <h2 className="text-xl font-extrabold text-slate-900">
              How to Fix and Resubmit
            </h2>

            <ol className="space-y-4 text-slate-700 text-sm sm:text-base font-medium">
              <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shrink-0">1</span>
                <div>
                  <strong className="text-slate-900 font-extrabold block">Check document issue date:</strong>
                  Ensure electricity bill or gas bill was issued within the last 3 months.
                </div>
              </li>

              <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shrink-0">2</span>
                <div>
                  <strong className="text-slate-900 font-extrabold block">Scan clearly in PDF/JPG under 2 MB:</strong>
                  Make sure all 4 corners and consumer address text are crisp and legible.
                </div>
              </li>

              <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shrink-0">3</span>
                <div>
                  <strong className="text-slate-900 font-extrabold block">Match name exactly:</strong>
                  Make sure the name on the address proof matches your application entry name.
                </div>
              </li>

              <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shrink-0">4</span>
                <div>
                  <strong className="text-slate-900 font-extrabold block">Replace document & submit:</strong>
                  Upload the replacement file below and click "Resubmit Application".
                </div>
              </li>
            </ol>
          </section>

          <div className="civic-card p-6 space-y-4 bg-emerald-50/50 border-emerald-300">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-emerald-600" />
              <span>Upload Replacement Address Proof Document</span>
            </h3>

            <div className="border-2 border-dashed border-emerald-400 bg-white p-8 rounded-2xl text-center space-y-3">
              <UploadCloud className="w-10 h-10 text-emerald-600 mx-auto" />
              <div>
                <p className="text-sm font-bold text-slate-900">Drag and drop replacement file here, or browse</p>
                <p className="text-xs text-slate-500">Allowed formats: PDF, JPG, PNG (Max 2.0 MB)</p>
              </div>
              <input type="file" className="hidden" id="replace-file" />
              <label htmlFor="replace-file" className="civic-btn-secondary inline-flex text-xs font-bold py-2 px-4 cursor-pointer">
                Select File
              </label>
            </div>

            <button
              onClick={handleSimulatedResubmit}
              disabled={resubmitted}
              className="civic-btn-success w-full py-4 text-base font-extrabold shadow-lg"
            >
              {resubmitted ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Resubmitting Correction... Redirecting to Tracker</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Resubmit Application Now (Free Correction)</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {activeTab === 'why' && (
        <div className="civic-card p-6 space-y-4 border-l-4 border-l-amber-500 animate-fade-in">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            <span>What went wrong?</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-amber-50 p-4 rounded-xl border border-amber-200">
            “The uploaded document may be unclear, outdated, incomplete, or inconsistent with the information entered in the application.”
          </p>

          <h3 className="font-extrabold text-base text-slate-900 pt-2">Common rejection causes for address proof:</h3>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-600">
            <li>Bill date was older than 90 days.</li>
            <li>Address spelling in electricity bill differed from application village/street name.</li>
            <li>Document resolution was below 200 DPI, making consumer number unreadable.</li>
            <li>File uploaded was password-protected by the electricity board.</li>
          </ul>
        </div>
      )}

      {activeTab === 'docs' && (
        <div className="civic-card p-6 space-y-4 border-l-4 border-l-blue-600 animate-fade-in">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            <span>Accepted Alternative Address Proof Documents</span>
          </h2>
          
          <div className="space-y-3">
            {[
              { title: 'Electricity Bill', note: 'Issued within last 3 months (Most recommended)' },
              { title: 'Gas Connection Bill / Passbook', note: 'Issued by HP/Indane/Bharat Gas within 3 months' },
              { title: 'Aadhaar Card with Updated Address', note: 'Must match current residency' },
              { title: 'Registered Rent / Lease Deed', note: 'Notarized and valid for current year' }
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-extrabold text-slate-900">{item.title}</span>
                <span className="text-slate-500 text-xs">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
