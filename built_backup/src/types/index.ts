export type Language = 'en' | 'te' | 'hi';

export type ViewState = 
  | 'home'
  | 'services'
  | 'problem-select'
  | 'recovery-result'
  | 'status-tracker'
  | 'document-checklist'
  | 'rejection-details'
  | 'dashboard'
  | 'notifications'
  | 'assistant'
  | 'faq'
  | 'profile';

export type ServiceCategory = 
  | 'all'
  | 'identity'
  | 'certificates'
  | 'welfare'
  | 'financial'
  | 'property';

export interface GovService {
  id: string;
  name: Record<Language, string>;
  category: ServiceCategory;
  iconName: string;
  description: Record<Language, string>;
  popular?: boolean;
  requiredDocsCount: number;
  officialPortal: string;
}

export interface ProblemItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  iconName: string;
  severity: 'critical' | 'warning' | 'info';
  commonFor?: string[];
}

export interface RecoveryStep {
  id: number;
  title: Record<Language, string>;
  detail: Record<Language, string>;
  tip?: Record<Language, string>;
}

export interface RecoveryGuide {
  serviceId: string;
  problemId: string;
  problemTitle: Record<Language, string>;
  whatHappened: Record<Language, string>;
  possibleReasons: Record<Language, string>[];
  steps: RecoveryStep[];
  requiredDocs: Record<Language, string>[];
  waitNotice?: Record<Language, string>;
  retryAdvice: Record<Language, string>;
  supportInfo: Record<Language, string>;
  nextStepButtonText: Record<Language, string>;
  nextStepView: ViewState;
}

export interface ApplicationTimelineStep {
  label: Record<Language, string>;
  date?: string;
  status: 'completed' | 'current' | 'pending' | 'failed';
}

export interface ApplicationRecord {
  id: string;
  serviceId: string;
  serviceName: Record<Language, string>;
  applicantName: string;
  submissionDate: string;
  lastUpdated: string;
  status: 'submitted' | 'under_review' | 'action_required' | 'payment_pending' | 'approved' | 'rejected';
  statusBadge: {
    label: Record<Language, string>;
    color: 'green' | 'amber' | 'red' | 'blue';
  };
  problemSummary?: Record<Language, string>;
  whatThisMeans: Record<Language, string>;
  whatYouShouldDoNow: Record<Language, string>;
  expectedNextAction: Record<Language, string>;
  timeline: ApplicationTimelineStep[];
  documents: {
    name: string;
    status: 'uploaded' | 'warning' | 'rejected' | 'missing';
    reason?: string;
  }[];
}

export interface DocumentItem {
  id: string;
  name: Record<Language, string>;
  mandatory: boolean;
  acceptedFormats: string[];
  maxSizeMB: number;
  description: Record<Language, string>;
  validityNote: Record<Language, string>;
  sampleServices: string[];
  status?: 'uploaded' | 'warning' | 'rejected' | 'missing';
}

export interface NotificationItem {
  id: string;
  title: Record<Language, string>;
  message: Record<Language, string>;
  date: string;
  read: boolean;
  type: 'action' | 'warning' | 'success' | 'info';
  actionLabel?: Record<Language, string>;
  actionView?: ViewState;
  applicationId?: string;
}

export interface ChatStructuredResponse {
  problem: string;
  explanation: string;
  recommendedAction: string[];
  nextStep: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  structured?: ChatStructuredResponse;
  quickReplies?: string[];
}
