import { DocumentItem } from '../types';

export const DOCUMENTS_CATALOG: DocumentItem[] = [
  {
    id: 'aadhaar-doc',
    name: {
      en: 'Aadhaar Card / UID Proof',
      te: 'ఆధార్ కార్డ్ / గుర్తింపు పత్రం',
      hi: 'आधार कार्ड / पहचान प्रमाण'
    },
    mandatory: true,
    acceptedFormats: ['PDF', 'JPG', 'PNG'],
    maxSizeMB: 2.0,
    description: {
      en: 'Front and back side scanned clearly on a single page or PDF.',
      te: 'ముందు మరియు వెనుక భాగాలు ఒకే పేజీలో స్పష్టంగా ఉండేలా స్కాన్ చేయాలి.',
      hi: 'सामने और पीछे का भाग एक ही पृष्ठ पर स्पष्ट रूप से स्कैन करें।'
    },
    validityNote: {
      en: 'Must have updated address and un-blurred 12-digit UID number.',
      te: 'తాజా చిరునామా మరియు స్పష్టమైన 12 అంకెల సంఖ్య ఉండాలి.',
      hi: 'अपडेटेड पता और स्पष्ट 12-अंकीय आधार संख्या होनी चाहिए।'
    },
    sampleServices: ['Aadhaar Services', 'PAN Card', 'Passport', 'Income Certificate', 'Scholarship']
  },
  {
    id: 'address-proof',
    name: {
      en: 'Address Proof (Electricity / Gas Bill / Rent Deed)',
      te: 'చిరునామా ధృవీకరణ పత్రం (కరెంట్ బిల్లు / గ్యాస్ బిల్లు)',
      hi: 'पता प्रमाण (बिजली बिल / गैस बिल / किरायानामा)'
    },
    mandatory: true,
    acceptedFormats: ['PDF', 'JPG'],
    maxSizeMB: 2.0,
    description: {
      en: 'Utility bill issued in applicant or parent\'s name.',
      te: 'దరఖాస్తుదారుడు లేదా తల్లిదండ్రుల పేరిట ఉన్న కరెంట్/గ్యాస్ బిల్లు.',
      hi: 'आवेदक या माता-पिता के नाम पर जारी उपयोगिता बिल।'
    },
    validityNote: {
      en: 'Must be issued within the last 3 months (Recent bill).',
      te: 'ఇటీవలి 3 నెలల లోపు జారీ చేయబడినది అయి ఉండాలి.',
      hi: 'पिछली 3 अवधि (3 महीने) के भीतर जारी किया गया होना चाहिए।'
    },
    sampleServices: ['Passport', 'Income Certificate', 'Driving Licence', 'Ration Card']
  },
  {
    id: 'photo-doc',
    name: {
      en: 'Passport Size Photograph',
      te: 'పాస్‌పోర్ట్ సైజ్ ఫోటోగ్రాఫ్',
      hi: 'पासपोर्ट आकार की तस्वीर'
    },
    mandatory: true,
    acceptedFormats: ['JPG', 'PNG'],
    maxSizeMB: 0.5,
    description: {
      en: 'Recent passport photo with light/white background and visible ears.',
      te: 'తెలుపు బ్యాక్‌గ్రౌండ్‌తో ఇటీవల తీయించుకున్న ఫోటో.',
      hi: 'सफेद पृष्ठभूमि और स्पष्ट चेहरे के साथ हाल की फोटो।'
    },
    validityNote: {
      en: 'Photo must be taken within last 6 months. No caps or dark glasses.',
      te: 'చివరి 6 నెలల లోపు తీసినదై ఉండాలి. క్యాప్‌లు లేదా నల్లద్దాలు ఉండకూడదు.',
      hi: 'फोटो 6 महीने से पुरानी न हो। चश्मा या टोपी न पहनें।'
    },
    sampleServices: ['Passport', 'PAN Card', 'Driving Licence', 'Scholarship', 'Pension']
  },
  {
    id: 'income-proof',
    name: {
      en: 'Income Declaration / Salary Slip',
      te: 'ఆదాయ స్వయం ప్రకటన / జీతం రసీదు',
      hi: 'आय स्व-घोषणा / वेतन पर्ची'
    },
    mandatory: false,
    acceptedFormats: ['PDF'],
    maxSizeMB: 2.0,
    description: {
      en: 'Form 16, latest IT return, or notarized income affidavit.',
      te: 'ఫారమ్ 16, ఐటీ రిటర్న్లు లేదా నోటరీ చేసిన ఆదాయ అఫిడవిట్.',
      hi: 'फॉर्म 16, आयकर रिटर्न या नोटरीकृत आय हलफनामा।'
    },
    validityNote: {
      en: 'Financial year must match current year (2025-2026).',
      te: 'ప్రస్తుత ఆర్థిక సంవత్సరానికి సంబంధించినదై ఉండాలి.',
      hi: 'वर्तमान वित्तीय वर्ष से संबंधित होना चाहिए।'
    },
    sampleServices: ['Income Certificate', 'Scholarship', 'Fee Reimbursement']
  },
  {
    id: 'bank-passbook',
    name: {
      en: 'Bank Passbook (DBT / Aadhaar Linked)',
      te: 'బ్యాంక్ పాస్‌బుక్ ప్రతీ (ఆధార్ లింక్ అయినది)',
      hi: 'बैंक पासबुक (डीबीटी / आधार लिंक)'
    },
    mandatory: true,
    acceptedFormats: ['PDF', 'JPG'],
    maxSizeMB: 2.0,
    description: {
      en: 'Front page showing Account Number, IFSC code, Name, and Bank Branch stamp.',
      te: 'ఖాతా సంఖ్య, ఐఎఫ్‌ఎస్‌సి కోడ్, పేరు మరియు బ్యాంక్ ముద్ర ఉన్న మొదటి పేజీ.',
      hi: 'खाता संख्या, IFSC कोड, नाम और बैंक मुहर वाला पहला पृष्ठ।'
    },
    validityNote: {
      en: 'Bank account must be active and linked with NPCI Aadhaar Seeding.',
      te: 'బ్యాంక్ ఖాతా యాక్టివ్‌గా మరియు ఎన్‌పిసిఐ ఆధార్ సీడింగ్ అయి ఉండాలి.',
      hi: 'बैंक खाता सक्रिय और आधार से लिंक होना चाहिए।'
    },
    sampleServices: ['Scholarship', 'Pension', 'LPG Subsidy']
  }
];
