import { RecoveryGuide } from '../types';

export const RECOVERY_GUIDES: Record<string, RecoveryGuide> = {
  'payment-failed': {
    serviceId: 'general',
    problemId: 'payment-failed',
    problemTitle: {
      en: 'Payment Failed / Money Deducted',
      te: 'చెల్లింపు విఫలమైంది / డబ్బులు కట్ అయ్యాయి',
      hi: 'भुगतान विफल / पैसे कट गए'
    },
    whatHappened: {
      en: 'Your payment was not successfully confirmed by the government service portal, even though money may have been debited from your bank account or UPI app.',
      te: 'మీ బ్యాంక్ ఖాతా లేదా యుపిఐ యాప్ నుండి డబ్బులు డెబిట్ అయినప్పటికీ, ప్రభుత్వ సేవా పోర్టల్ మీ చెల్లింపును ధృవీకరించలేదు.',
      hi: 'आपके बैंक खाते या यूपीआई ऐप से पैसे कट जाने के बाद भी सरकारी पोर्टल ने भुगतान की पुष्टि नहीं की है।'
    },
    possibleReasons: [
      {
        en: 'Bank transaction was interrupted during the gateway redirect back to the government portal.',
        te: 'ప్రభుత్వ పోర్టల్‌కు తిరిగి వచ్చే సమయంలో బ్యాంక్ సర్వర్ కనెక్షన్ విరిగిపోయింది.',
        hi: 'सरकारी पोर्टल पर वापस रिडायरेक्ट होते समय बैंक सर्वर का कनेक्शन टूट गया।'
      },
      {
        en: 'Payment gateway session timed out before the government server received the success callback.',
        te: 'పోర్టల్ సర్వర్‌కు కన్ఫర్మేషన్ అందకముందే చెల్లింపు సెషన్ టైమ్‌అవుట్ అయ్యింది.',
        hi: 'सरकारी सर्वर को पुष्टि मिलने से पहले भुगतान सत्र समाप्त (टाइमआउट) हो गया।'
      },
      {
        en: 'Interbank settlement processing is pending (common during bank maintenance hours between 11 PM - 4 AM).',
        te: 'రాాత్రి సమయాల్లో బ్యాంక్ మెయింటెనెన్స్ వల్ల నిధుల బదిలీ ప్రాసెసింగ్‌లో ఉంది.',
        hi: 'रात के समय बैंक रखरखाव के कारण अंतर-बैंक हस्तांतरण लंबित है।'
      }
    ],
    steps: [
      {
        id: 1,
        title: {
          en: '1. Check Bank SMS & UPI App History',
          te: '1. బ్యాంక్ మెసేజ్ & యుపిఐ హిస్టరీ చూడండి',
          hi: '1. बैंक एसएमएस व यूपीआई इतिहास जांचें'
        },
        detail: {
          en: 'Verify whether the exact application fee amount was debited and note down the 12-digit UTR / Bank Reference Number.',
          te: 'డబ్బులు కట్ అయ్యాయో లేదో చూసి 12 అంకెల UTR / బ్యాంక్ రెఫరెన్స్ నంబర్‌ను గురుతు పెట్టుకోండి.',
          hi: 'जांचें कि पैसे कटे हैं या नहीं और 12 अंकों का UTR/बैंक संदर्भ नंबर नोट करें।'
        },
        tip: {
          en: 'Do NOT make a second payment immediately if the money was debited!',
          te: 'డబ్బులు కట్ అయితే వెంటనే రెండోసారి చెల్లించవద్దు!',
          hi: 'पैसे कटने पर तुरंत दोबारा भुगतान न करें!'
        }
      },
      {
        id: 2,
        title: {
          en: '2. Wait 24 to 48 Hours for Reconciliation',
          te: '2. 24 నుండి 48 గంటలు వేచి ఉండండి',
          hi: '2. 24 से 48 घंटे तक प्रतीक्षा करें'
        },
        detail: {
          en: 'Government payment gateways run automated reconciliation batch jobs every 12-24 hours. The portal status frequently updates to "SUCCESS" automatically.',
          te: 'ప్రభుత్వ చెల్లింపు గేట్‌వేలు ప్రతి 12-24 గంటలకు ఆటోమేటిక్ సరిపోలిక చేస్తాయి. స్టేటస్ తానంతట తానే "SUCCESS"గా మారుతుంది.',
          hi: 'सरकारी भुगतान गेटवे हर 12-24 घंटे में स्वचालित मिलान करते हैं। स्थिति स्वतः "सफल" हो जाती है।'
        }
      },
      {
        id: 3,
        title: {
          en: '3. Check Portal "Verify Payment Status" Link',
          te: '3. పోర్టల్‌లో "Verify Payment" బటన్ తనిఖీ చేయండి',
          hi: '3. पोर्टल पर "वेरिफाई पेमेंट" लिंक जांचें'
        },
        detail: {
          en: 'Log in to the government portal, open your application history, and click on "Re-verify Payment" or "Check Transaction Status".',
          te: 'ప్రభుత్వ పోర్టల్‌లోకి లాగిన్ అయి "Re-verify Payment" లేదా "Check Status" బటన్ నొక్కండి.',
          hi: 'सरकारी पोर्टल पर लॉग इन करें और "री-वेरिफाई पेमेंट" बटन पर क्लिक करें।'
        }
      },
      {
        id: 4,
        title: {
          en: '4. Automatic Auto-Refund Check',
          te: '4. ఆటోమేటిక్ రీఫండ్ చెక్',
          hi: '4. स्वचालित रिफंड जांच'
        },
        detail: {
          en: 'If the portal confirms payment failed permanently, the deducted amount will be auto-refunded to your original bank account within 3 to 7 working days.',
          te: 'పోర్టల్ చెల్లింపు పూర్తిగా విఫలమైందని నిర్ధారిస్తే, మీ డబ్బు 3 నుండి 7 పని దినాల్లో మీ బ్యాంక్ ఖాతాకు తిరిగి వస్తుంది.',
          hi: 'यदि भुगतान स्थायी रूप से विफल रहता है, तो पैसे 3 से 7 कार्य दिवसों में मूल खाते में वापस आ जाएंगे।'
        }
      }
    ],
    requiredDocs: [
      {
        en: 'Application Reference ID / Acknowledgement Number',
        te: 'దరఖాస్తు రెఫరెన్స్ ఐడీ / రసీదు సంఖ్య',
        hi: 'आवेदन संदर्भ आईडी / पावती संख्या'
      },
      {
        en: '12-digit UTR Number / UPI Transaction ID',
        te: '12 అంకెల UTR నంబర్ / యుపిఐ ట్రాన్సాక్షన్ ఐడీ',
        hi: '12-अंकीय UTR नंबर / यूपीआई ट्रांजैक्शन आईडी'
      },
      {
        en: 'Bank Statement / Payment Receipt screenshot showing deduction date and time',
        te: 'డబ్బులు కట్ అయిన తేదీ మరియు సమయం తెలిపే బ్యాంక్ స్టేట్‌మెంట్ స్కిన్ షాట్',
        hi: 'बैंक स्टेटमेंट या भुगतान स्क्रीनशॉट (तिथि व समय के साथ)'
      }
    ],
    waitNotice: {
      en: 'Wait 24-48 hours before retrying payment. 92% of pending transactions get auto-resolved.',
      te: 'మళ్లీ చెల్లించే ముందు 24-48 గంటలు వేచి ఉండండి. 92% సమస్యలు ఆటోమేటిక్‌గా పరిష్కారమవుతాయి.',
      hi: 'पुनः भुगतान से पहले 24-48 घंटे प्रतीक्षा करें। 92% मामले स्वतः सुलझ जाते हैं।'
    },
    retryAdvice: {
      en: 'Only retry payment if the transaction status explicitly shows "FAILED" and the UTR is marked invalid.',
      te: 'ట్రాన్సాక్షన్ స్పష్టంగా "FAILED" అని వచ్చిన తర్వాత మాత్రమే మళ్లీ చెల్లించండి.',
      hi: 'केवल तभी पुनः भुगतान करें जब स्थिति स्पष्ट रूप से "विफल" दिखाए।'
    },
    supportInfo: {
      en: 'Government Payment Gateway Helpdesk Toll-Free: 1800-11-22-33 | Email: pg-helpdesk@gov.in',
      te: 'ప్రభుత్వ చెల్లింపు గేట్‌వే హెల్ప్‌లైన్: 1800-11-22-33 | ఈమెయిల్: pg-helpdesk@gov.in',
      hi: 'सरकारी पेमेंट हेल्पडेस्क टोल-फ्री: 1800-11-22-33 | ईमेल: pg-helpdesk@gov.in'
    },
    nextStepButtonText: {
      en: 'Track Payment Status Now',
      te: 'చెల్లింపు స్థితి చూడండి',
      hi: 'भुगतान स्थिति अभी ट्रैक करें'
    },
    nextStepView: 'status-tracker'
  },

  'app-rejected': {
    serviceId: 'general',
    problemId: 'app-rejected',
    problemTitle: {
      en: 'Application Rejected',
      te: 'దరఖాస్తు తిరస్కరించబడింది',
      hi: 'आवेदन अस्वीकृत हुआ'
    },
    whatHappened: {
      en: 'Your application was reviewed by the designated officer and rejected due to errors, missing mandatory documentation, or demographic data mismatches.',
      te: 'మీ దరఖాస్తును అధికారి పరిశీలించి, వివరాల్లో తప్పులు లేదా అసంపూర్ణ పత్రాల కారణంగా తిరస్కరించారు.',
      hi: 'अधिकारी ने समीक्षा के बाद त्रुटियों या अधूरी जानकारी के कारण आपका आवेदन अस्वीकृत कर दिया है।'
    },
    possibleReasons: [
      {
        en: 'Name, Date of Birth, or Father\'s name in the application form does not match the uploaded proof document.',
        te: 'దరఖాస్తులో రాసిన పేరు, పుట్టిన తేదీ పత్రాల్లో ఉన్న వివరాలతో సరిపోలడం లేదు.',
        hi: 'आवेदन पत्र में दर्ज नाम या जन्म तिथि अपलोड किए गए दस्तावेज़ से मेल नहीं खाती।'
      },
      {
        en: 'Uploaded certificate is expired, missing stamp/signature, or from an unauthorized jurisdiction.',
        te: 'అప్‌లోడ్ చేసిన సర్టిఫికేట్ గడువు ముగిసింది లేదా అధికారి సంతకం లేదు.',
        hi: 'अपलोड किया गया प्रमाणपत्र पुराना (एक्सपायर) है या उस पर अधिकारी के हस्ताक्षर नहीं हैं।'
      },
      {
        en: 'Uploaded document image was blurry, cropped, password-protected, or unreadable.',
        te: 'అప్‌లోడ్ చేసిన ఫోటో/పత్రం సరిగా కనిపించడం లేదు లేదా పాస్‌వర్డ్ లాక్ అయి ఉంది.',
        hi: 'अपलोड किया गया दस्तावेज़ धुंधला, कटा हुआ या पासवर्ड से सुरक्षित था।'
      }
    ],
    steps: [
      {
        id: 1,
        title: {
          en: '1. Read the Officer Rejection Remarks',
          te: '1. అధికారి తిరస్కరణ రిమార్క్స్ చదవండి',
          hi: '1. अधिकारी की अस्वीकृति टिप्पणी पढ़ें'
        },
        detail: {
          en: 'Check the exact rejection code/reason in your application dashboard. Common codes include "DOC_UNCLEAR", "NAME_MISMATCH", or "EXPIRED_PROOF".',
          te: 'మీ దరఖాస్తు డాష్‌బోర్డ్‌లో స్పష్టమైన రిమార్క్స్ చూడండి. ఉదాహరణకు "DOC_UNCLEAR" లేదా "NAME_MISMATCH".',
          hi: 'अपने आवेदन डैशबोर्ड में सटीक कारण पढ़ें, जैसे "DOC_UNCLEAR" या "NAME_MISMATCH"।'
        }
      },
      {
        id: 2,
        title: {
          en: '2. Verify & Match Exact Spelling',
          te: '2. పేరు స్పెల్లింగ్ సరి చూసుకోండి',
          hi: '2. नाम व वर्तनी का सटीक मिलान करें'
        },
        detail: {
          en: 'Ensure your full name, Aadhaar number, and address match word-for-word between the form entries and the identity document.',
          te: 'మీ పేరు, ఆధార్ నంబర్ మరియు చిరునామా దరఖాస్తులో మరియు ఆధార్ కార్డ్‌లో ఒకేలా ఉండేలా చూసుకోండి.',
          hi: 'सुनिश्चित करें कि नाम, आधार संख्या और पता आवेदन व दस्तावेज़ दोनों में बिल्कुल समान हों।'
        }
      },
      {
        id: 3,
        title: {
          en: '3. Scan Document in HD (300 DPI, PDF format)',
          te: '3. పత్రాన్ని హెచ్‌డిలో స్కాన్ చేయండి (PDF ఫార్మాట్)',
          hi: '3. स्पष्ट एचडी स्कैन (300 DPI, पीडीएफ) तैयार करें'
        },
        detail: {
          en: 'Use a free document scanner app or computer scanner. Ensure all 4 corners are visible, text is crisp, and file size is under 2 MB.',
          te: 'పత్రం 4 మూలలు స్పష్టంగా కనిపించేలా, 2 MB కంటే తక్కువ పరిమాణంలో PDF గా స్కాన్ చేయండి.',
          hi: 'दस्तावेज़ के चारों कोने दिखने चाहिए, टेक्स्ट स्पष्ट हो और फ़ाइल साइज़ 2 MB से कम हो।'
        }
      },
      {
        id: 4,
        title: {
          en: '4. Click "Fix & Resubmit Application"',
          te: '4. "సరిదిద్ది మళ్లీ సమర్పించండి" బటన్ నొక్కండి',
          hi: '4. "ठीक करके पुनः जमा करें" पर क्लिक करें'
        },
        detail: {
          en: 'Most portals allow free correction within 30 days without charging a new application fee.',
          te: 'చాలా పోర్టళ్లు 30 రోజుల్లోపు ఎటువంటిదనపు రుసుము లేకుండా సరిదిద్దడానికి అనుమతిస్తాయి.',
          hi: 'अधिकांश पोर्टल 30 दिनों के भीतर बिना अतिरिक्त शुल्क के सुधार की अनुमति देते हैं।'
        }
      }
    ],
    requiredDocs: [
      {
        en: 'Updated Clear Identity Proof (Aadhaar / Voter ID / PAN)',
        te: 'స్పష్టమైన గుర్తింపు పత్రం (ఆధార్ / వోటర్ ఐడీ / పాన్)',
        hi: 'स्पष्ट पहचान पत्र (आधार / वोटर आईडी / पैन)'
      },
      {
        en: 'Valid Address Proof matching application address',
        te: 'చిరునామా ధృవీకరణ పత్రం',
        hi: 'वैध पता प्रमाण (आवेदन पते से मेल खाता हुआ)'
      },
      {
        en: 'Recent passport size photo (White background, light clothing)',
        te: 'ఇటీవలి పాస్‌పోర్ట్ సైజు ఫోటో',
        hi: 'हाल की पासपोर्ट साइज फोटो (सफेद बैकग्राउंड)'
      }
    ],
    retryAdvice: {
      en: 'Correct the flagged mistake and resubmit using the correction workflow.',
      te: 'తప్పుగా ఉన్న వివరాలను సరిచేసి రికవరీ ఆప్షన్ ద్వారా మళ్లీ సమర్పించండి.',
      hi: 'गलती सुधारें और संशोधन विकल्प के माध्यम से पुनः सबमिट करें।'
    },
    supportInfo: {
      en: 'Public Grievance Portal CPGRAMS: pgportal.gov.in | Service Portal Helpline: 1800-425-0000',
      te: 'పబ్లిక్ గ్రీవెన్స్ పోర్టల్: pgportal.gov.in | హెల్ప్‌లైన్: 1800-425-0000',
      hi: 'नागरिक शिकायत पोर्टल CPGRAMS: pgportal.gov.in | हेल्पलाइन: 1800-425-0000'
    },
    nextStepButtonText: {
      en: 'View Rejection Fix Checklist',
      te: 'తిరస్కరణ సరిదిద్దే మార్గదర్శి చూడండి',
      hi: 'अस्वीकृति सुधार चेकलिस्ट देखें'
    },
    nextStepView: 'rejection-details'
  }
};
