import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DOCUMENTS_CATALOG } from '../../data/documentsData';
import { 
  FileCheck, 
  UploadCloud, 
  CheckCircle2, 
  XCircle, 
  Info
} from 'lucide-react';

export const DocumentChecklist: React.FC = () => {
  const { selectedServiceId, language, t } = useApp();
  const [testFileName, setTestFileName] = useState<string>('');
  const [testFileSizeMB, setTestFileSizeMB] = useState<number>(0);
  const [testFileExt, setTestFileExt] = useState<string>('');
  const [validationResult, setValidationResult] = useState<{
    valid: boolean;
    messages: string[];
  } | null>(null);

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const name = file.name;
    const sizeMB = parseFloat((file.size / (1024 * 1024)).toFixed(2));
    const ext = name.substring(name.lastIndexOf('.')).toLowerCase();

    setTestFileName(name);
    setTestFileSizeMB(sizeMB);
    setTestFileExt(ext);

    const messages: string[] = [];
    let valid = true;

    if (sizeMB > 2.0) {
      valid = false;
      messages.push(`File size (${sizeMB} MB) exceeds maximum allowed limit of 2.0 MB.`);
    } else {
      messages.push(`File size (${sizeMB} MB) is within allowed limit.`);
    }

    const allowed = ['.pdf', '.jpg', '.jpeg', '.png'];
    if (!allowed.includes(ext)) {
      valid = false;
      messages.push(`Format (${ext}) is not allowed. Only PDF, JPG, and PNG are accepted.`);
    } else {
      messages.push(`Format (${ext.toUpperCase()}) is supported.`);
    }

    setValidationResult({ valid, messages });
  };

  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto">
      <div className="space-y-2 text-center sm:text-left">
        <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
          <FileCheck className="w-8 h-8 text-emerald-600" />
          <span>{t('docChecklistTitle')}</span>
        </h1>
        <p className="text-slate-600 text-base">
          {t('docChecklistSubtitle')}
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-800 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">Interactive Document Format & Size Tester</h2>
            <p className="text-xs text-slate-300">Test your file here before uploading to the government portal to avoid upload errors!</p>
          </div>
        </div>

        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-4">
          <label className="block text-xs font-extrabold uppercase text-slate-300 tracking-wider">
            Select a document file to test size & format compatibility:
          </label>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <label className="civic-btn-success cursor-pointer py-3 px-6 text-sm font-bold w-full sm:w-auto">
              <UploadCloud className="w-5 h-5" />
              <span>Choose File to Test</span>
              <input 
                type="file" 
                onChange={handleSimulatedFileUpload}
                accept=".pdf,.jpg,.jpeg,.png,.docx,.heic"
                className="hidden" 
              />
            </label>

            {testFileName && (
              <div className="text-xs font-mono text-slate-300 bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-700 w-full sm:w-auto truncate">
                Selected: <span className="text-emerald-400 font-bold">{testFileName}</span> ({testFileSizeMB} MB)
              </div>
            )}
          </div>

          {validationResult && (
            <div className={`p-4 rounded-xl border space-y-2 ${
              validationResult.valid 
                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200' 
                : 'bg-red-950/80 border-red-500 text-red-200'
            }`}>
              <div className="flex items-center gap-2 font-extrabold text-base">
                {validationResult.valid ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>✓ Ready for Upload! Document matches portal requirements.</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span>❌ Document Will Be Rejected by Portal. Please fix below errors:</span>
                  </>
                )}
              </div>

              <ul className="space-y-1 text-xs font-medium pl-7 list-disc">
                {validationResult.messages.map((msg, i) => (
                  <li key={i}>{msg}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Required Documents Master Checklist
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOCUMENTS_CATALOG.map((doc) => {
            const name = doc.name[language] || doc.name['en'];
            const desc = doc.description[language] || doc.description['en'];
            const note = doc.validityNote[language] || doc.validityNote['en'];

            return (
              <div key={doc.id} className="civic-card p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded ${
                        doc.mandatory ? 'bg-red-100 text-red-800' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {doc.mandatory ? 'Mandatory' : 'Optional'}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-lg text-slate-900">{name}</h3>
                  </div>

                  <span className="text-xs font-mono font-bold bg-blue-50 text-blue-800 px-2.5 py-1 rounded-lg border border-blue-200">
                    Max {doc.maxSizeMB} MB
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center justify-between text-slate-700 font-semibold">
                    <span>Accepted Formats:</span>
                    <div className="flex gap-1">
                      {doc.acceptedFormats.map(fmt => (
                        <span key={fmt} className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-mono font-bold">
                          .{fmt.toLowerCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 text-amber-900 p-3 rounded-xl border border-amber-200 flex items-start gap-2">
                    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong className="font-bold">Validity Rule:</strong> {note}</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500">
                  Used in: <span className="font-semibold text-slate-700">{doc.sampleServices.join(', ')}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
