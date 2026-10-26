import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Language, 
  ViewState, 
  GovService, 
  ProblemItem, 
  ApplicationRecord, 
  NotificationItem 
} from '../types';
import { GOV_SERVICES, PROBLEMS_CATALOG } from '../data/servicesData';
import { DEMO_APPLICATIONS } from '../data/demoApplications';
import { translations } from '../data/translations';

interface AppContextType {
  currentView: ViewState;
  setCurrentView: (view: ViewState) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  toggleHighContrast: () => void;
  largeText: boolean;
  setLargeText: (enabled: boolean) => void;
  toggleLargeText: () => void;
  
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
  selectedProblemId: string | null;
  setSelectedProblemId: (id: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  applications: ApplicationRecord[];
  activeApplicationId: string | null;
  setActiveApplicationId: (id: string | null) => void;
  
  notifications: NotificationItem[];
  unreadNotificationsCount: number;
  markNotificationAsRead: (id: string) => void;
  
  isAccessibilityModalOpen: boolean;
  setIsAccessibilityModalOpen: (open: boolean) => void;

  t: (key: string) => string;
  selectServiceAndProceed: (serviceId: string) => void;
  selectProblemAndProceed: (problemId: string) => void;
  startRecoveryWithParams: (serviceId: string, problemId: string) => void;
  trackApplicationWithId: (appId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n1',
    title: {
      en: 'Action Required: Income Certificate',
      te: 'చర్య అవసరం: ఆదాయ ధృవీకరణ పత్రం',
      hi: 'कार्रवाई आवश्यक: आय प्रमाणपत्र'
    },
    message: {
      en: 'Your address proof document was rejected. Please upload a clear bill issued within 3 months.',
      te: 'మీ చిరునామా పత్రం తిరస్కరించబడింది. దయచేసి 3 నెలల లోపు కరెంట్ బిల్లును అప్‌లోడ్ చేయండి.',
      hi: 'आपका पता प्रमाण पत्र अस्वीकृत हो गया। कृपया 3 महीने के भीतर का बिजली बिल अपलोड करें।'
    },
    date: '28 Aug 2026',
    read: false,
    type: 'action',
    actionLabel: {
      en: 'Fix Now',
      te: 'సరిదిద్దండి',
      hi: 'अभी ठीक करें'
    },
    actionView: 'rejection-details',
    applicationId: 'GOV202608291245'
  },
  {
    id: 'n2',
    title: {
      en: 'Payment Verification Pending',
      te: 'చెల్లింపు పరిశీలనలో ఉంది',
      hi: 'भुगतान सत्यापन जारी'
    },
    message: {
      en: 'Scholarship application payment (₹50) is currently undergoing automated reconciliation.',
      te: 'స్కాలర్‌షిప్ చెల్లింపు (₹50) ఆటోమేటిక్ సరిపోలిక జరుగుతోంది.',
      hi: 'छात्रवृत्ति आवेदन भुगतान (₹50) का स्वचालित मिलान चल रहा है।'
    },
    date: '26 Aug 2026',
    read: false,
    type: 'warning',
    actionLabel: {
      en: 'Check Payment',
      te: 'చెల్లింపు తనిఖీ',
      hi: 'भुगतान जांचें'
    },
    actionView: 'status-tracker',
    applicationId: 'SCH202609110421'
  },
  {
    id: 'n3',
    title: {
      en: 'Application Approved! Certificate Ready',
      te: 'దరఖాస్తు ఆమోదించబడింది!',
      hi: 'आवेदन स्वीकृत! प्रमाणपत्र तैयार'
    },
    message: {
      en: 'Your Caste Certificate (OBC) has been digitally signed and is ready for instant download.',
      te: 'మీ కుల ధృవీకరణ పత్రం (OBC) డిజిటల్ సంతకం చేయబడింది మరియు డౌన్‌లోడ్‌కు సిద్ధంగా ఉంది.',
      hi: 'आपका जाति प्रमाणपत्र (OBC) डिजिटल रूप से हस्ताक्षरित है और डाउनलोड के लिए तैयार है।'
    },
    date: '18 May 2026',
    read: true,
    type: 'success',
    actionLabel: {
      en: 'Download Certificate',
      te: 'డౌన్‌లోడ్ చేసుకోండి',
      hi: 'डाउनलोड करें'
    },
    actionView: 'status-tracker',
    applicationId: 'CST202605021109'
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [largeText, setLargeText] = useState<boolean>(false);
  
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>('income-cert');
  const [selectedProblemId, setSelectedProblemId] = useState<string | null>('payment-failed');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [applications, setApplications] = useState<ApplicationRecord[]>(DEMO_APPLICATIONS);
  const [activeApplicationId, setActiveApplicationId] = useState<string | null>('GOV202608291245');
  
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }
  }, [largeText]);

  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const toggleLargeText = () => setLargeText(prev => !prev);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  const selectServiceAndProceed = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentView('problem-select');
  };

  const selectProblemAndProceed = (problemId: string) => {
    setSelectedProblemId(problemId);
    setCurrentView('recovery-result');
  };

  const startRecoveryWithParams = (serviceId: string, problemId: string) => {
    setSelectedServiceId(serviceId);
    setSelectedProblemId(problemId);
    setCurrentView('recovery-result');
  };

  const trackApplicationWithId = (appId: string) => {
    setActiveApplicationId(appId);
    setCurrentView('status-tracker');
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        language,
        setLanguage,
        highContrast,
        setHighContrast,
        toggleHighContrast,
        largeText,
        setLargeText,
        toggleLargeText,
        selectedServiceId,
        setSelectedServiceId,
        selectedProblemId,
        setSelectedProblemId,
        searchQuery,
        setSearchQuery,
        applications,
        activeApplicationId,
        setActiveApplicationId,
        notifications,
        unreadNotificationsCount,
        markNotificationAsRead,
        isAccessibilityModalOpen,
        setIsAccessibilityModalOpen,
        t,
        selectServiceAndProceed,
        selectProblemAndProceed,
        startRecoveryWithParams,
        trackApplicationWithId
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
