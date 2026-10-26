import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Bell, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Info, 
  ArrowRight, 
  CheckCheck
} from 'lucide-react';

export const NotificationCenter: React.FC = () => {
  const { 
    notifications, 
    markNotificationAsRead, 
    setCurrentView, 
    trackApplicationWithId, 
    language, 
    t 
  } = useApp();

  return (
    <div className="space-y-8 py-4 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <Bell className="w-8 h-8 text-blue-600" />
            <span>{t('navNotifications')}</span>
          </h1>
          <p className="text-slate-600 text-sm">
            Actionable updates regarding your government applications and service recovery.
          </p>
        </div>

        <button
          onClick={() => notifications.forEach(n => markNotificationAsRead(n.id))}
          className="civic-btn-secondary text-xs px-3.5 py-2 font-bold flex items-center gap-1.5"
        >
          <CheckCheck className="w-4 h-4 text-emerald-600" />
          <span>Mark All as Read</span>
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((n) => {
          const title = n.title[language] || n.title['en'];
          const message = n.message[language] || n.message['en'];
          const actionLabel = n.actionLabel ? (n.actionLabel[language] || n.actionLabel['en']) : null;

          let icon = <Info className="w-6 h-6 text-blue-600" />;
          let borderStyle = "border-l-4 border-l-blue-600 bg-white";

          if (n.type === 'action') {
            icon = <AlertCircle className="w-6 h-6 text-red-600" />;
            borderStyle = "border-l-4 border-l-red-600 bg-red-50/40";
          } else if (n.type === 'warning') {
            icon = <Clock className="w-6 h-6 text-amber-600" />;
            borderStyle = "border-l-4 border-l-amber-500 bg-amber-50/40";
          } else if (n.type === 'success') {
            icon = <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
            borderStyle = "border-l-4 border-l-emerald-600 bg-emerald-50/40";
          }

          return (
            <div
              key={n.id}
              onClick={() => markNotificationAsRead(n.id)}
              className={`civic-card p-6 flex flex-col sm:flex-row items-start justify-between gap-4 transition-all ${borderStyle} ${
                !n.read ? 'shadow-md border-r-2 border-r-blue-400' : 'opacity-85'
              }`}
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="p-2.5 rounded-xl bg-slate-100 shrink-0">
                  {icon}
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-extrabold text-lg text-slate-900">
                      {title}
                    </h3>
                    {!n.read && (
                      <span className="bg-blue-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shrink-0">
                        New
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {message}
                  </p>

                  <p className="text-[11px] text-slate-400 font-mono pt-1">
                    Received: {n.date}
                  </p>
                </div>
              </div>

              {actionLabel && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    markNotificationAsRead(n.id);
                    if (n.applicationId) {
                      trackApplicationWithId(n.applicationId);
                    } else if (n.actionView) {
                      setCurrentView(n.actionView);
                    }
                  }}
                  className="civic-btn-primary py-2.5 px-5 text-xs font-extrabold shrink-0 w-full sm:w-auto mt-2 sm:mt-0"
                >
                  <span>{actionLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
