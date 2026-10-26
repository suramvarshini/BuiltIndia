import { ApplicationRecord } from '../types';

export const DEMO_APPLICATIONS: ApplicationRecord[] = [
  {
    id: 'GOV202608291245',
    serviceId: 'income-cert',
    serviceName: {
      en: 'Income Certificate',
      te: 'ఆదాయ ధృవీకరణ పత్రం',
      hi: 'आय प्रमाणपत्र'
    },
    applicantName: 'Ramesh Kumar',
    submissionDate: '24 Aug 2026',
    lastUpdated: '28 Aug 2026',
    status: 'action_required',
    statusBadge: {
      label: {
        en: 'Action Required',
        te: 'చర్య అవసరం',
        hi: 'कार्रवाई आवश्यक'
      },
      color: 'red'
    },
    problemSummary: {
      en: 'Address Proof Rejected: Uploaded electricity bill was over 6 months old and unreadable.',
      te: 'చిరునామా పత్రం తిరస్కరించబడింది: అప్‌లోడ్ చేసిన కరెంట్ బిల్లు 6 నెలల కంటే పాతది మరియు అస్పష్టంగా ఉంది.',
      hi: 'पता प्रमाण अस्वीकृत: अपलोड किया गया बिजली बिल 6 महीने से अधिक पुराना और अस्पष्ट था।'
    },
    whatThisMeans: {
      en: 'Your application processing is paused because the designated Revenue Inspector cannot verify your current residential address.',
      te: 'రెవెన్యూ ఇన్‌స్పెక్టర్ మీ ప్రస్తుత నివాస చిరునామాను సరిచూడలేక పోవడం వల్ల మీ దరఖాస్తు నిలిపివేయబడింది.',
      hi: 'राजस्व निरीक्षक द्वारा वर्तमान आवासीय पते का सत्यापन न हो पाने के कारण आवेदन रुका हुआ है।'
    },
    whatYouShouldDoNow: {
      en: 'Upload a fresh address proof document (electricity bill under 3 months old, updated Aadhaar, or latest ration card).',
      te: 'ఇటీవలి 3 నెలల లోపు కరెంట్ బిల్లు లేదా కొత్త ఆధార్ కార్డ్‌ను రీ-అప్‌లోడ్ చేయండి.',
      hi: 'नवीनतम 3 महीने के भीतर का बिजली बिल या अपडेटेड आधार कार्ड पुनः अपलोड करें।'
    },
    expectedNextAction: {
      en: 'Once uploaded, verification takes approximately 24 to 48 hours for final certificate issuance.',
      te: 'అప్‌లోడ్ చేసిన 24 నుండి 48 గంటల్లో పత్రం జారీ చేయబడుతుంది.',
      hi: 'अपलोड के बाद अंतिम प्रमाणपत्र जारी होने में 24 से 48 घंटे लगेंगे।'
    },
    timeline: [
      {
        label: {
          en: 'Application Submitted',
          te: 'దరఖాస్తు సమర్పించబడింది',
          hi: 'आवेदन जमा हुआ'
        },
        date: '24 Aug 2026',
        status: 'completed'
      },
      {
        label: {
          en: 'Fee Payment Confirmed',
          te: 'ఫీజు చెల్లింపు పూర్తయింది',
          hi: 'शुल्क भुगतान सफल'
        },
        date: '24 Aug 2026',
        status: 'completed'
      },
      {
        label: {
          en: 'Documents Verification',
          te: 'పత్రాల తనిఖీ',
          hi: 'दस्तावेज़ सत्यापन'
        },
        date: '27 Aug 2026',
        status: 'failed'
      },
      {
        label: {
          en: 'Field Inspection (VRO)',
          te: 'క్షేత్రస్థాయి పరిశీలన',
          hi: 'मैदानी निरीक्षण'
        },
        status: 'pending'
      },
      {
        label: {
          en: 'Certificate Issued',
          te: 'ధృవీకరణ పత్రం జారీ',
          hi: 'प्रमाणपत्र जारी'
        },
        status: 'pending'
      }
    ],
    documents: [
      { name: 'Aadhaar Card', status: 'uploaded' },
      { name: 'Income Self-Declaration Form', status: 'uploaded' },
      { name: 'Address Proof (Electricity Bill)', status: 'rejected', reason: 'Bill exceeds 6 months validity' }
    ]
  },
  {
    id: 'SCH202609110421',
    serviceId: 'scholarship',
    serviceName: {
      en: 'National Scholarship Application (NSP)',
      te: 'నేషనల్ స్కాలర్‌షిప్ దరఖాస్తు',
      hi: 'राष्ट्रीय छात्रवृत्ति आवेदन'
    },
    applicantName: 'Ananya Sharma',
    submissionDate: '26 Aug 2026',
    lastUpdated: '29 Aug 2026',
    status: 'payment_pending',
    statusBadge: {
      label: {
        en: 'Payment Verification Pending',
        te: 'చెల్లింపు పరిశీలనలో ఉంది',
        hi: 'भुगतान सत्यापन जारी'
      },
      color: 'amber'
    },
    problemSummary: {
      en: 'Registration fee deducted from bank account (UTR: 32918821094), but status shows confirmation pending.',
      te: 'బ్యాంక్ నుండి డబ్బులు కట్ అయ్యాయి (UTR: 32918821094), కానీ పోర్టల్‌లో కన్ఫర్మేషన్ పెండింగ్‌లో ఉంది.',
      hi: 'बैंक से पैसे कट चुके हैं (UTR: 32918821094), लेकिन पोर्टल पर स्थिति लंबित दिख रही है।'
    },
    whatThisMeans: {
      en: 'The payment gateway is undergoing automated reconciliation with your bank server. Money is safe and held in gateway escrow.',
      te: 'బ్యాంక్ సర్వర్ మరియు ప్రభుత్వ చెల్లింపు గేట్‌వే మధ్య ఆటోమేటిక్ పరిశీలన జరుగుతోంది. మీ డబ్బు సురక్షితంగా ఉంది.',
      hi: 'गेटवे और बैंक सर्वर के बीच स्वचालित मिलान चल रहा है। आपके पैसे सुरक्षित हैं।'
    },
    whatYouShouldDoNow: {
      en: 'Do NOT pay again. Wait for 24-48 hours for status auto-update or click "Verify Payment Status".',
      te: 'మళ్లీ చెల్లించవద్దు. 24-48 గంటలు వేచి ఉండండి లేదా "Verify Payment" బటన్ నొక్కండి.',
      hi: 'पुनः भुगतान न करें। 24-48 घंटे प्रतीक्षा करें या "वेरिफाई पेमेंट" पर क्लिक करें।'
    },
    expectedNextAction: {
      en: 'Automatic payment confirmation expected within 12 hours.',
      te: '12 గంటల్లో ఆటోమేటిక్ చెల్లింపు ధృవీకరణ పూర్తవుతుంది.',
      hi: '12 घंटे के भीतर स्वचालित भुगतान पुष्टि अपेक्षित है।'
    },
    timeline: [
      {
        label: {
          en: 'Application Submitted',
          te: 'దరఖాస్తు సమర్పించబడింది',
          hi: 'आवेदन जमा हुआ'
        },
        date: '26 Aug 2026',
        status: 'completed'
      },
      {
        label: {
          en: 'Payment Verification',
          te: 'చెల్లింపు పరిశీలన',
          hi: 'भुगतान सत्यापन'
        },
        date: '26 Aug 2026',
        status: 'current'
      },
      {
        label: {
          en: 'Institute Verification',
          te: 'కళాశాల సరిపోలిక',
          hi: 'संस्थान सत्यापन'
        },
        status: 'pending'
      },
      {
        label: {
          en: 'District Welfare Officer Verification',
          te: 'జిల్లా సంక్షేమ అధికారి తనిఖీ',
          hi: 'जिला कल्याण अधिकारी सत्यापन'
        },
        status: 'pending'
      }
    ],
    documents: [
      { name: '10th Marks Memo', status: 'uploaded' },
      { name: 'College Admission Receipt', status: 'uploaded' },
      { name: 'Bank Passbook Copy (DBT Linked)', status: 'uploaded' }
    ]
  },
  {
    id: 'BRT202607148892',
    serviceId: 'birth-cert',
    serviceName: {
      en: 'Birth Certificate Application',
      te: 'జనన ధృవీకరణ దరఖాస్తు',
      hi: 'जन्म प्रमाणपत्र आवेदन'
    },
    applicantName: 'Priya & Suresh Nair',
    submissionDate: '15 Aug 2026',
    lastUpdated: '20 Aug 2026',
    status: 'under_review',
    statusBadge: {
      label: {
        en: 'Application Under Review',
        te: 'పరిశీలనలో ఉంది',
        hi: 'समीक्षाधीन'
      },
      color: 'blue'
    },
    whatThisMeans: {
      en: 'Your application has been received and is currently being cross-verified with official hospital records by Municipal Registrar.',
      te: 'మీ దరఖాస్తు స్వీకరించబడింది మరియు మున్సిపల్ రిజిస్ట్రార్ ద్వారా ఆసుపత్రి రికార్డులతో సరిచూడబడుతోంది.',
      hi: 'आपका आवेदन प्राप्त हो चुका है और अस्पताल रिकॉर्ड के साथ सत्यापन जारी है।'
    },
    whatYouShouldDoNow: {
      en: 'No action is required at this moment. You will be notified via SMS if additional documents are needed.',
      te: 'ప్రస్తుతం మీరు ఏమీ చేయవలసిన అవసరం లేదు. ఏవైనా పత్రాలు అవసరమైతే ఎస్ఎమ్‌ఎస్ వస్తుంది.',
      hi: 'इस समय किसी कार्रवाई की आवश्यकता नहीं है। आवश्यकता होने पर आपको एसएमएस मिलेगा।'
    },
    expectedNextAction: {
      en: 'Expected certificate issue date: 02 Sep 2026.',
      te: 'అంచనా జారీ తేదీ: 02 సెప్టెంబర్ 2026.',
      hi: 'संभावित जारी करने की तिथि: 02 सितंबर 2026।'
    },
    timeline: [
      {
        label: {
          en: 'Application Submitted',
          te: 'దరఖాస్తు సమర్పించబడింది',
          hi: 'आवेदन जमा हुआ'
        },
        date: '15 Aug 2026',
        status: 'completed'
      },
      {
        label: {
          en: 'Hospital Record Cross-Check',
          te: 'ఆసుపత్రి రికార్డుల సరిపోలిక',
          hi: 'अस्पताल रिकॉर्ड मिलान'
        },
        date: '18 Aug 2026',
        status: 'completed'
      },
      {
        label: {
          en: 'Registrar Final Approval',
          te: 'రిజిస్ట్రార్ ఆమోదం',
          hi: 'रजिस्ट्रार अंतिम स्वीकृति'
        },
        status: 'current'
      },
      {
        label: {
          en: 'Digital Certificate Ready',
          te: 'డిజిటల్ పత్రం సిద్ధం',
          hi: 'डिजिटल प्रमाणपत्र तैयार'
        },
        status: 'pending'
      }
    ],
    documents: [
      { name: 'Hospital Discharge Summary', status: 'uploaded' },
      { name: 'Parents Aadhaar Cards', status: 'uploaded' }
    ]
  },
  {
    id: 'CST202605021109',
    serviceId: 'caste-cert',
    serviceName: {
      en: 'Caste Certificate (OBC/BC)',
      te: 'కుల ధృవీకరణ పత్రం (OBC/BC)',
      hi: 'जाति प्रमाणपत्र (OBC/BC)'
    },
    applicantName: 'K. Venkatesh',
    submissionDate: '10 May 2026',
    lastUpdated: '18 May 2026',
    status: 'approved',
    statusBadge: {
      label: {
        en: 'Approved & Certificate Available',
        te: 'ఆమోదించబడింది - పత్రం సిద్ధంగా ఉంది',
        hi: 'स्वीकृत - प्रमाणपत्र डाउनलोड हेतु उपलब्ध'
      },
      color: 'green'
    },
    whatThisMeans: {
      en: 'Your Caste Certificate application was successfully approved and digitally signed by the competent Revenue Tehsildar.',
      te: 'మీ కుల ధృవీకరణ దరఖాస్తు ఆమోదించబడింది మరియు తహశీల్దార్ డిజిటల్ సంతకం చేయబడింది.',
      hi: 'आपका जाति प्रमाणपत्र स्वीकृत हो गया है और तहसीलदार द्वारा डिजिटल रूप से हस्ताक्षरित है।'
    },
    whatYouShouldDoNow: {
      en: 'Download your official QR-verified PDF certificate. Valid across all central & state institutions.',
      te: 'మీ అధికారిక క్యూఆర్ కోడ్ ఉన్న PDF సర్టిఫికేట్‌ను డౌన్‌లోడ్ చేసుకోండి.',
      hi: 'क्यूआर कोड वाला अपना आधिकारिक पीडीएफ प्रमाणपत्र डाउनलोड करें।'
    },
    expectedNextAction: {
      en: 'Download certificate copy anytime or link to DigiLocker.',
      te: 'ఎప్పుడైనా సర్టిఫికేట్‌ను డౌన్‌లోడ్ చేసుకోండి లేదా డిజిలాకర్‌కు అనుసంధానించండి.',
      hi: 'प्रमाणपत्र डाउनलोड करें या डिजीलॉकर से लिंक करें।'
    },
    timeline: [
      {
        label: {
          en: 'Application Submitted',
          te: 'దరఖాస్తు సమర్పించబడింది',
          hi: 'आवेदन जमा हुआ'
        },
        date: '10 May 2026',
        status: 'completed'
      },
      {
        label: {
          en: 'VRO & RI Field Report',
          te: 'విఆర్‌ఓ పరిశీలన నివేదిక',
          hi: 'वीआरओ रिपोर्ट'
        },
        date: '14 May 2026',
        status: 'completed'
      },
      {
        label: {
          en: 'Tehsildar Digital Signature',
          te: 'తహశీల్దార్ సంతకం',
          hi: 'तहसीलदार डिजिटल हस्ताक्षर'
        },
        date: '18 May 2026',
        status: 'completed'
      },
      {
        label: {
          en: 'Certificate Ready for Download',
          te: 'డౌన్‌లోడ్ కోసం పత్రం సిద్ధం',
          hi: 'डाउनलोड के लिए उपलब्ध'
        },
        date: '18 May 2026',
        status: 'completed'
      }
    ],
    documents: [
      { name: 'Father Caste Proof', status: 'uploaded' },
      { name: 'School Leaving Certificate', status: 'uploaded' },
      { name: 'Aadhaar Card', status: 'uploaded' }
    ]
  }
];
