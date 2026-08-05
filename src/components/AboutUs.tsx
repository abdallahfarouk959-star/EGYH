import React from 'react';
// استيراد هوك الترجمة
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  // تشغيل الهوك
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            {t('about.title')}
          </h1>
          <p className="text-xl text-emerald-700 font-medium">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Our Journey Section */}
        <div className="bg-white rounded-[2.5rem] shadow-sm p-8 md:p-12 mb-16 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
            {t('about.journey_title')}
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>{t('about.journey_p1')}</p>
            <p>{t('about.journey_p2')}</p>
            <p>{t('about.journey_p3')}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center mb-16">
          <div className="bg-emerald-600 text-white rounded-3xl px-12 py-8 shadow-xl text-center transform hover:scale-105 transition-transform">
            <span className="text-6xl font-bold block mb-2">20+</span>
            <span className="text-sm uppercase tracking-widest font-semibold">
              {t('about.years_exp')}
            </span>
          </div>
        </div>

        {/* Our Values & Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">
              {t('about.values_title')}
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-emerald-600 mb-2">
                  {t('about.val_auth')}
                </h4>
                <p className="text-gray-600">{t('about.val_auth_desc')}</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-600 mb-2">
                  {t('about.val_exc')}
                </h4>
                <p className="text-gray-600">{t('about.val_exc_desc')}</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-600 mb-2">
                  {t('about.val_com')}
                </h4>
                <p className="text-gray-600">{t('about.val_com_desc')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">
              {t('about.why_choose')}
            </h3>
            <ul className="space-y-6 text-gray-600 text-lg">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-4 text-xl">✓</span>
                {t('about.why_1')}
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-4 text-xl">✓</span>
                {t('about.why_2')}
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-4 text-xl">✓</span>
                {t('about.why_3')}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;