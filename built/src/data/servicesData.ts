import { GovService, ProblemItem } from '../types';

export const GOV_SERVICES: GovService[] = [
  {
    id: 'aadhaar',
    name: {
      en: 'Aadhaar Services',
      te: 'ఆధార్ సేవలు',
      hi: 'आधार सेवाएं'
    },
    category: 'identity',
    iconName: 'Fingerprint',
    description: {
      en: 'Address update, mobile linking, PVC card request, biometric unlock.',
      te: 'చిరునామా మార్పు, మొబైల్ అనుసంధానం, పివిసి కార్డ్, బయోమెట్రిక్ సేవలు.',
      hi: 'पता अपडेट, मोबाइल लिंकिंग, पीवीसी कार्ड, बायोमेट्रिक सेवाएं।'
    },
    popular: true,
    requiredDocsCount: 3,
    officialPortal: 'uidai.gov.in'
  },
  {
    id: 'pan',
    name: {
      en: 'PAN Card Services',
      te: 'పాన్ కార్డ్ సేవలు',
      hi: 'पैन कार्ड सेवाएं'
    },
    category: 'identity',
    iconName: 'CreditCard',
    description: {
      en: 'New PAN application, photo/name correction, PAN-Aadhaar linking.',
      te: 'కొత్త పాన్ దరఖాస్తు, పేరు/ఫోటో దిద్దుబాట్లు, పాన్-ఆధార్ లింకింగ్.',
      hi: 'नया पैन आवेदन, नाम/फोटो सुधार, पैन-आधार लिंकिंग।'
    },
    popular: true,
    requiredDocsCount: 3,
    officialPortal: 'tin-nsdl.com'
  },
  {
    id: 'passport',
    name: {
      en: 'Passport Application',
      te: 'పాస్‌పోర్ట్ దరఖాస్తు',
      hi: 'पासपोर्ट आवेदन'
    },
    category: 'identity',
    iconName: 'Globe',
    description: {
      en: 'Fresh passport issue, renewal, Tatkaal application, police verification.',
      te: 'కొత్త పాస్‌పోర్ట్, రీన్యూవల్, తత్కాల్ మరియు పోలీస్ వెరిఫికేషన్.',
      hi: 'नया पासपोर्ट, नवीनीकरण, तत्काल आवेदन और पुलिस सत्यापन।'
    },
    popular: true,
    requiredDocsCount: 4,
    officialPortal: 'passportindia.gov.in'
  },
  {
    id: 'driving-licence',
    name: {
      en: 'Driving Licence (DL/LLR)',
      te: 'డ్రైవింగ్ లైసెన్స్ సేవలు',
      hi: 'ड्राइविंग लाइसेंस सेवाएं'
    },
    category: 'certificates',
    iconName: 'Car',
    description: {
      en: 'Learner licence (LLR), permanent DL test, DL renewal, address change.',
      te: 'లర్నర్ లైసెన్స్ (LLR), పర్మనెంట్ DL, లైసెన్స్ రీన్యూవల్.',
      hi: 'लर्नर लाइसेंस, स्थायी डीएल टेस्ट, नवीनीकरण व पता परिवर्तन।'
    },
    popular: true,
    requiredDocsCount: 4,
    officialPortal: 'parivahan.gov.in'
  },
  {
    id: 'income-cert',
    name: {
      en: 'Income Certificate',
      te: 'ఆదాయ ధృవీకరణ పత్రం',
      hi: 'आय प्रमाणपत्र'
    },
    category: 'certificates',
    iconName: 'FileText',
    description: {
      en: 'Revenue income certificate for scholarship, EWS quota, & fee reimbursement.',
      te: 'స్కాలర్‌షిప్‌లు, ఈడబ్ల్యూఎస్ మరియు ఫీజు రీయింబర్స్‌మెంట్ కోసం ఆదాయ పత్రం.',
      hi: 'छात्रवृत्ति, ईडब्ल्यूएस और शुल्क प्रतिपूर्ति के लिए आय प्रमाणपत्र।'
    },
    popular: true,
    requiredDocsCount: 3,
    officialPortal: 'meeseva.gov.in'
  },
  {
    id: 'caste-cert',
    name: {
      en: 'Caste / Community Certificate',
      te: 'కుల ధృవీకరణ పత్రం',
      hi: 'जाति प्रमाणपत्र'
    },
    category: 'certificates',
    iconName: 'Award',
    description: {
      en: 'SC/ST/OBC/BC community certificate & validity certificate application.',
      te: 'ఎస్సీ/ఎస్టీ/ఓబీసీ కుల ధృవీకరణ పత్రం మరియు వ్యాలిడిటీ సర్టిఫికేట్.',
      hi: 'अनुसूचित जाति/जनजाति/ओबीसी जाति प्रमाणपत्र व वैधता आवेदन।'
    },
    popular: true,
    requiredDocsCount: 4,
    officialPortal: 'edistrict.gov.in'
  },
  {
    id: 'birth-cert',
    name: {
      en: 'Birth Certificate',
      te: 'జనన ధృవీకరణ పత్రం',
      hi: 'जन्म प्रमाणपत्र'
    },
    category: 'certificates',
    iconName: 'Baby',
    description: {
      en: 'New birth registration, hospital record matching, corrections, duplicate copy.',
      te: 'జనన నమోదు, ఆసుపత్రి రికార్డుల సరిపోలిక, పేరు చేర్పు.',
      hi: 'जन्म पंजीकरण, अस्पताल रिकॉर्ड मिलान, सुधार व प्रतिलिपि।'
    },
    popular: false,
    requiredDocsCount: 3,
    officialPortal: 'crsorgi.gov.in'
  },
  {
    id: 'residence-cert',
    name: {
      en: 'Residence / Domicile Certificate',
      te: 'నివాస ధృవీకరణ పత్రం',
      hi: 'निवास / मूल निवासी प्रमाणपत्र'
    },
    category: 'certificates',
    iconName: 'Home',
    description: {
      en: 'State domicile proof for education admissions & government employment.',
      te: 'విద్య మరియు ప్రభుత్వ ఉద్యోగాల కోసం రాష్ట్ర నివాస ధృవీకరణ పత్రం.',
      hi: 'शिक्षा और सरकारी नौकरियों के लिए राज्य मूल निवासी प्रमाणपत्र।'
    },
    popular: false,
    requiredDocsCount: 3,
    officialPortal: 'services.india.gov.in'
  },
  {
    id: 'scholarship',
    name: {
      en: 'Scholarship Application (NSP)',
      te: 'స్కాలర్‌షిప్ దరఖాస్తు',
      hi: 'छात्रवृत्ति आवेदन'
    },
    category: 'financial',
    iconName: 'GraduationCap',
    description: {
      en: 'Post-matric, pre-matric scholarships, NSP portal verification, bank link.',
      te: 'పోస్ట్-మెట్రిక్, ప్రీ-మెట్రిక్ స్కాలర్‌షిప్‌లు, బ్యాంక్ అకౌంట్ సీడింగ్.',
      hi: 'पोस्ट-मैट्रिक, प्री-मैट्रिक छात्रवृत्ति, बैंक खाता लिंकिंग।'
    },
    popular: true,
    requiredDocsCount: 5,
    officialPortal: 'scholarships.gov.in'
  },
  {
    id: 'pension',
    name: {
      en: 'Government Pension Scheme',
      te: 'ప్రభుత్వ పింఛను పథకాలు',
      hi: 'सरकारी पेंशन योजनाएं'
    },
    category: 'welfare',
    iconName: 'HeartHandshake',
    description: {
      en: 'Old age pension, widow pension, disability financial support & DLC renewal.',
      te: 'వృద్ధాప్య పింఛను, వితంతు పింఛను, దివ్యాంగుల పింఛను మరియు లైఫ్ సర్టిఫికేట్.',
      hi: 'वृद्धावस्था पेंशन, विधवा पेंशन, दिव्यांग पेंशन व जीवन प्रमाण।'
    },
    popular: false,
    requiredDocsCount: 4,
    officialPortal: 'nsap.nic.in'
  },
  {
    id: 'ration-card',
    name: {
      en: 'Ration Card / Food Security',
      te: 'రేషన్ కార్డ్ సేవలు',
      hi: 'राशन कार्ड सेवाएं'
    },
    category: 'welfare',
    iconName: 'Utensils',
    description: {
      en: 'Adding family member, splitting card, address change, e-KYC verification.',
      te: 'కుటుంబ సభ్యుల చేర్పు, కార్డ్ విడదీయుట, ఇ-కెవైసి తనిఖీ.',
      hi: 'नया सदस्य जोड़ना, कार्ड विभाजन, ई-केवाईसी सत्यापन।'
    },
    popular: true,
    requiredDocsCount: 3,
    officialPortal: 'nfsa.gov.in'
  },
  {
    id: 'property',
    name: {
      en: 'Property & Land Records',
      te: 'ఆస్తి మరియు రెవెన్యూ రికార్డులు',
      hi: 'संपत्ति व भू-अभिलेख'
    },
    category: 'property',
    iconName: 'Landmark',
    description: {
      en: 'Encumbrance Certificate (EC), Dharani/Bhulekh 1B ROR search, mutation.',
      te: 'ఎన్‌కంబరెన్స్ సర్టిఫికేట్ (EC), భూలేఖ్ / 1B రికార్డులు, మ్యుటేషన్.',
      hi: 'भारमुक्त प्रमाणपत्र (EC), भूलेख/खसरा विवरण, नामंतरण।'
    },
    popular: false,
    requiredDocsCount: 4,
    officialPortal: 'landrecords.gov.in'
  },
  {
    id: 'other-services',
    name: {
      en: 'Other Government Services',
      te: 'ఇతర ప్రభుత్వ సేవలు',
      hi: 'अन्य सरकारी सेवाएं'
    },
    category: 'all',
    iconName: 'HelpCircle',
    description: {
      en: 'General portal error recovery, payment gateways, and status inquiries.',
      te: 'సాధారణ పోర్టల్ లోపాల సమగ్ర రికవరీ మరియు మార్గదర్శకత్వం.',
      hi: 'सामान्य पोर्टल त्रुटि सुधार और भुगतान संबंधी सहायता।'
    },
    popular: false,
    requiredDocsCount: 2,
    officialPortal: 'india.gov.in'
  }
];

export const PROBLEMS_CATALOG: ProblemItem[] = [
  {
    id: 'payment-failed',
    title: {
      en: 'Payment Failed / Money Deducted',
      te: 'చెల్లింపు విఫలమైంది / డబ్బులు కట్ అయ్యాయి',
      hi: 'भुगतान विफल / पैसे कट गए'
    },
    description: {
      en: 'Amount deducted from bank account but portal shows payment unsuccessful.',
      te: 'ఖాతా నుండి డబ్బులు కట్ అయ్యాయి కానీ పోర్టల్ విఫలమైందని చూపిస్తోంది.',
      hi: 'खाते से पैसे कट गए लेकिन पोर्टल पर भुगतान असफल दिख रहा है।'
    },
    iconName: 'CreditCard',
    severity: 'critical'
  },
  {
    id: 'app-rejected',
    title: {
      en: 'Application Rejected',
      te: 'దరఖాస్తు తిరస్కరించబడింది',
      hi: 'आवेदन अस्वीकृत हुआ'
    },
    description: {
      en: 'Application status shows rejected without a clear, easy-to-understand reason.',
      te: 'సరైన స్పష్టమైన కారణం లేకుండా దరఖాస్తు తిరస్కరించబడింది.',
      hi: 'स्पष्ट कारण बताए बिना आवेदन अस्वीकृत कर दिया गया है।'
    },
    iconName: 'XCircle',
    severity: 'critical'
  },
  {
    id: 'doc-rejected',
    title: {
      en: 'Document Rejected / Unclear',
      te: 'పత్రం తిరస్కరించబడింది / అస్పష్టంగా ఉంది',
      hi: 'दस्तावेज़ अस्वीकृत / अस्पष्ट'
    },
    description: {
      en: 'Officer rejected uploaded document due to format, clarity, or mismatch.',
      te: 'అప్‌లోడ్ చేసిన పత్రం అస్పష్టంగా ఉందని అధికారి తిరస్కరించారు.',
      hi: 'अधिकारी ने अस्पष्टता या विसंगति के कारण दस्तावेज़ अस्वीकृत कर दिया।'
    },
    iconName: 'FileX',
    severity: 'warning'
  },
  {
    id: 'upload-failed',
    title: {
      en: 'Document Upload Failed',
      te: 'పత్రం అప్‌లోడ్ విఫలమైంది',
      hi: 'दस्तावेज़ अपलोड विफल'
    },
    description: {
      en: 'Portal gives file size limit error or unsupported file format error.',
      te: 'ఫైల్ సైజు పెద్దదిగా ఉందనో లేదా ఫార్మాట్ తప్పు అనో ఎర్రర్ వస్తోంది.',
      hi: 'फ़ाइल का आकार बड़ा होने या गलत प्रारूप का एरर आ रहा है।'
    },
    iconName: 'UploadCloud',
    severity: 'warning'
  },
  {
    id: 'status-pending',
    title: {
      en: 'Application Pending / Stuck',
      te: 'దరఖాస్తు నిలిచిపోయింది / పెండింగ్‌లో ఉంది',
      hi: 'आवेदन लंबित / अटका हुआ'
    },
    description: {
      en: 'Status has not updated for weeks and shows under review continuously.',
      te: 'వారాలు గడుస్తున్నా స్టేటస్ అప్‌డేట్ కాకుండా పెండింగ్‌లోనే ఉంది.',
      hi: 'हफ्तों से स्थिति अपडेट नहीं हुई है और लगातार समीक्षाधीन दिख रही है।'
    },
    iconName: 'Clock',
    severity: 'info'
  },
  {
    id: 'otp-issue',
    title: {
      en: 'OTP / Mobile Verification Problem',
      te: 'ఓటీపీ (OTP) రావడం లేదు',
      hi: 'ओटीपी / मोबाइल सत्यापन समस्या'
    },
    description: {
      en: 'OTP not received on registered mobile or mobile number expired/changed.',
      te: 'నమోదిత మొబైల్ సంఖ్యకు ఓటీపీ రావడం లేదు లేదా నంబర్ మారింది.',
      hi: 'पंजीकृत मोबाइल नंबर पर ओटीपी नहीं मिल रहा है।'
    },
    iconName: 'Smartphone',
    severity: 'warning'
  },
  {
    id: 'incorrect-details',
    title: {
      en: 'Incorrect Details Entered',
      te: 'తప్పు వివరాలు నమోదు చేశాను',
      hi: 'गलत विवरण दर्ज हो गया'
    },
    description: {
      en: 'Spelling error in name, wrong date of birth, or incorrect address submitted.',
      te: 'పేరు స్పెల్లింగ్ లోపం, పుట్టిన తేదీ లేదా చిరునామా తప్పుగా నమోదు చేశాను.',
      hi: 'नाम की वर्तनी, जन्म तिथि या पते में गलती दर्ज हो गई है।'
    },
    iconName: 'Edit3',
    severity: 'warning'
  },
  {
    id: 'tech-error',
    title: {
      en: 'Technical Error / Gateway Timeout',
      te: 'సాంకేతిక లోపం / పోర్టల్ టైమ్‌అవుట్',
      hi: 'तकनीकी त्रुटि / सर्वर टाइमआउट'
    },
    description: {
      en: 'Server error 500, blank white screen, or session expired message.',
      te: 'సర్వర్ ఎర్రర్ 500, వైట్ స్క్రీన్ లేదా సెషన్ ముగిసిందని వస్తోంది.',
      hi: 'सर्वर एरर 500, सफेद स्क्रीन या सत्र समाप्त होने का संदेश।'
    },
    iconName: 'AlertTriangle',
    severity: 'critical'
  },
  {
    id: 'appointment-issue',
    title: {
      en: 'Appointment Booking Problem',
      te: 'అపాయింట్‌మెంట్ బుకింగ్ సమస్య',
      hi: 'अपॉइंटमेंट बुकिंग की समस्या'
    },
    description: {
      en: 'No slots available, appointment token missing, or date missed.',
      te: 'స్లాట్లు ఖాళీ లేవు లేదా అపాయింట్‌మెంట్ టోకెన్ రాలేదు.',
      hi: 'स्लॉट उपलब्ध नहीं हैं या अपॉइंटमेंट रसीद नहीं मिली है।'
    },
    iconName: 'Calendar',
    severity: 'info'
  },
  {
    id: 'other-issue',
    title: {
      en: 'Other / Unclear Portal Error',
      te: 'ఇతర / అర్థంకాని పోర్టల్ లోపం',
      hi: 'अन्य / अस्पष्ट पोर्टल त्रुटि'
    },
    description: {
      en: 'Generic error code or unexpected portal behavior.',
      te: 'అర్థం కాని ఎర్రర్ కోడ్ లేదా సర్వీస్ సమస్య.',
      hi: 'सामान्य एरर कोड या अज्ञात तकनीकी समस्या।'
    },
    iconName: 'HelpCircle',
    severity: 'info'
  }
];
