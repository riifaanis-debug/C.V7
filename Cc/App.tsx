import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SectionHeader from './components/SectionHeader';
import BubbleCard from './components/BubbleCard';
import ExperienceItem from './components/ExperienceItem';
import SkillCard from './components/SkillCard';
import LicenseCard from './components/LicenseCard';
import CoverLetter from './components/CoverLetter';
import { cvData } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const data = cvData[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-200 py-2 sm:py-8 flex flex-col items-center w-full transition-colors duration-500">
      
      {/* Interactive Controls Container */}
      <div className="fixed top-4 left-4 z-50 flex flex-col sm:flex-row gap-2 no-print">
        <button 
          onClick={toggleLang}
          className="bg-[#22042C] text-[#C7A969] px-3.5 py-1.5 rounded-lg font-bold text-xs shadow-lg hover:bg-[#3B0E49] hover:scale-105 transition-all border border-[#C7A969]/30 flex items-center justify-center gap-1.5"
        >
          <span className="text-sm">🌐</span>
          {lang === 'ar' ? 'English' : 'عربي'}
        </button>
        
        <button 
          onClick={handlePrint}
          className="bg-white text-[#22042C] px-3.5 py-1.5 rounded-lg font-bold text-xs shadow-lg hover:bg-gray-50 hover:scale-105 transition-all border border-gray-200 flex items-center justify-center gap-1.5"
        >
          <span className="text-sm">📄</span>
          {lang === 'ar' ? 'تحميل PDF (A4)' : 'Download A4 PDF'}
        </button>
      </div>

      {/* A4 Container - Optimized for printing and mobile view */}
      <div id="cv-paper" className={`w-full max-w-[210mm] min-h-[297mm] mx-auto bg-white shadow-2xl px-3 py-6 sm:px-8 md:px-12 md:py-12 box-border relative ${lang === 'en' ? 'font-poppins' : ''}`}>
        
        <Header data={data} />

        <div className="h-0.5 bg-gradient-to-r from-[#22042C] to-[#C7A969] rounded-full my-6 opacity-80"></div>

        {/* Cover Letter Section */}
        <section className="mb-10 break-inside-avoid">
          <SectionHeader label={data.labels.coverLetter} />
          <CoverLetter content={data.coverLetter} name={data.name} />
        </section>

        {/* Summary Section */}
        <section className="mb-8 break-inside-avoid">
          <SectionHeader label={data.labels.summary} />
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm text-justify text-[#2b2b2b] leading-7 text-[13px]">
            {data.summary}
          </div>
        </section>

        {/* Career Objective Section */}
        <section className="mb-8 break-inside-avoid">
          <SectionHeader label={data.labels.careerObjective} />
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm text-justify text-[#2b2b2b] leading-7 text-[13px]">
            {data.careerObjective}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8 break-inside-avoid">
            <SectionHeader label={data.labels.education} />
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm font-bold text-[#22042C] text-sm leading-relaxed">
                {data.education}
            </div>
        </section>

        {/* Certificates Section - 4 columns */}
        <section className="mb-8">
          <SectionHeader label={data.labels.certificates} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {data.certificates.map((cert, idx) => (
              <div key={idx} className="break-inside-avoid">
                <LicenseCard 
                  title={cert.title}
                  issuer={cert.issuer}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section - Grid 2 columns */}
        <section className="mb-8">
          <SectionHeader label={data.labels.awards} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.awards.map((award, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all break-inside-avoid flex flex-col gap-2 border-r-4 border-r-[#C7A969]">
                <h3 className="font-extrabold text-[#22042C] text-[13px] leading-tight">
                  {award.title}
                </h3>
                <p className="text-gray-600 text-[11px] leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Courses Section - 4 columns */}
        <section className="mb-8">
          <SectionHeader label={data.labels.courses} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {data.courses.map((course, idx) => (
              <div key={idx} className="break-inside-avoid">
                <LicenseCard 
                  title={course.title}
                  issuer={course.issuer}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <SectionHeader label={data.labels.experience} />
          <div className="flex flex-col gap-5">
            {data.experience.map((job, idx) => (
              <div key={idx} className="break-inside-avoid">
                <ExperienceItem 
                  title={job.title}
                  subtitle={job.subtitle}
                  company={job.company}
                  period={job.period}
                  description={job.description}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Skills Section - 4 columns */}
        <section className="mb-8">
          <SectionHeader label={data.labels.specializedSkills} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {data.specializedSkills.map((skill, idx) => (
              <div key={idx} className="break-inside-avoid">
                <SkillCard 
                  title={skill.title}
                  items={skill.items}
                  isList={true}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Personal Skills Section - Updated to 6 columns for smaller size */}
        <section className="mb-8">
          <SectionHeader label={data.labels.personalSkills} />
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {data.personalSkills.map((skill, idx) => (
              <div key={idx} className="break-inside-avoid">
                <SkillCard 
                  title={skill.title}
                  description={skill.description}
                  isList={false}
                />
              </div>
            ))}
          </div>
        </section>

         {/* Languages Section */}
         <section className="mb-8 break-inside-avoid">
            <SectionHeader label={data.labels.languages} />
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                <div className="flex flex-wrap gap-4 items-center justify-start w-full">
                    {data.languages.map((lang, idx) => (
                            <div key={idx} className="w-fit">
                            <BubbleCard title={lang.name} subtitle={lang.level} />
                            </div>
                    ))}
                </div>
            </div>
        </section>

      </div>
      
      {/* Print Instructions for User */}
      <div className="mt-8 text-gray-400 text-[10px] italic no-print text-center px-4 max-w-lg">
        {lang === 'ar' 
          ? 'نصيحة: للتحميل كـ PDF، اضغط زر التحميل ثم اختر "Save as PDF" وتأكد من تفعيل "Background Graphics".' 
          : 'Tip: To download as PDF, click the button then select "Save as PDF" and ensure "Background Graphics" is enabled.'}
      </div>
    </div>
  );
};

export default App;