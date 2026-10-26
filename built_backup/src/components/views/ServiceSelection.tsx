import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GOV_SERVICES } from '../../data/servicesData';
import { ServiceCategory } from '../../types';
import { 
  Search, 
  ArrowRight, 
  Fingerprint, 
  CreditCard, 
  Globe, 
  Car, 
  FileText, 
  Award, 
  Baby, 
  Home, 
  GraduationCap, 
  HeartHandshake, 
  Utensils, 
  Landmark, 
  HelpCircle,
  Filter
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Fingerprint: <Fingerprint className="w-7 h-7 text-blue-600" />,
  CreditCard: <CreditCard className="w-7 h-7 text-emerald-600" />,
  Globe: <Globe className="w-7 h-7 text-indigo-600" />,
  Car: <Car className="w-7 h-7 text-amber-600" />,
  FileText: <FileText className="w-7 h-7 text-purple-600" />,
  Award: <Award className="w-7 h-7 text-red-600" />,
  Baby: <Baby className="w-7 h-7 text-pink-600" />,
  Home: <Home className="w-7 h-7 text-teal-600" />,
  GraduationCap: <GraduationCap className="w-7 h-7 text-blue-600" />,
  HeartHandshake: <HeartHandshake className="w-7 h-7 text-rose-600" />,
  Utensils: <Utensils className="w-7 h-7 text-amber-700" />,
  Landmark: <Landmark className="w-7 h-7 text-cyan-600" />,
  HelpCircle: <HelpCircle className="w-7 h-7 text-slate-600" />
};

export const ServiceSelection: React.FC = () => {
  const { selectServiceAndProceed, language, t } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');

  const categories: { id: ServiceCategory; labelKey: string }[] = [
    { id: 'all', labelKey: 'catAll' },
    { id: 'identity', labelKey: 'catIdentity' },
    { id: 'certificates', labelKey: 'catCertificates' },
    { id: 'welfare', labelKey: 'catWelfare' },
    { id: 'financial', labelKey: 'catFinancial' },
    { id: 'property', labelKey: 'catProperty' }
  ];

  const filteredServices = GOV_SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const name = service.name[language] || service.name['en'];
    const desc = service.description[language] || service.description['en'];
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 py-4">
      <div className="space-y-2 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
          {t('selectServiceTitle')}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          {t('selectServiceSubtitle')}
        </p>
      </div>

      <div className="space-y-4 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-base font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {filteredServices.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
          <HelpCircle className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-xl font-bold text-slate-800">No matching services found</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Try searching for general portal errors or select "Other Government Services" below.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="civic-btn-secondary mx-auto text-sm"
          >
            Reset Search Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => selectServiceAndProceed(service.id)}
              className="civic-card-interactive p-6 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {ICON_MAP[service.iconName] || <FileText className="w-7 h-7 text-blue-600" />}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-extrabold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                    {service.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.name[language] || service.name['en']}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description[language] || service.description['en']}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-bold">
                <span>Select & Choose Problem</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
