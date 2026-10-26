import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AccessibilityModal } from './components/common/AccessibilityModal';

// Views
import { LandingPage } from './components/views/LandingPage';
import { ServiceSelection } from './components/views/ServiceSelection';
import { ProblemSelection } from './components/views/ProblemSelection';
import { SmartErrorRecovery } from './components/views/SmartErrorRecovery';
import { ApplicationTracker } from './components/views/ApplicationTracker';
import { DocumentChecklist } from './components/views/DocumentChecklist';
import { RejectionDetails } from './components/views/RejectionDetails';
import { CitizenDashboard } from './components/views/CitizenDashboard';
import { NotificationCenter } from './components/views/NotificationCenter';
import { SevaFixAssistant } from './components/views/SevaFixAssistant';
import { HelpFaq } from './components/views/HelpFaq';

const MainContent: React.FC = () => {
  const { currentView } = useApp();

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <LandingPage />;
      case 'services':
        return <ServiceSelection />;
      case 'problem-select':
        return <ProblemSelection />;
      case 'recovery-result':
        return <SmartErrorRecovery />;
      case 'status-tracker':
        return <ApplicationTracker />;
      case 'document-checklist':
        return <DocumentChecklist />;
      case 'rejection-details':
        return <RejectionDetails />;
      case 'dashboard':
        return <CitizenDashboard />;
      case 'notifications':
        return <NotificationCenter />;
      case 'assistant':
        return <SevaFixAssistant />;
      case 'faq':
        return <HelpFaq />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans transition-colors duration-200">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderView()}
      </main>
      <Footer />
      <AccessibilityModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
};

export default App;
