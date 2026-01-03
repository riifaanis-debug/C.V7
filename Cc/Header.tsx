import React from 'react';
import { CVData } from '../types';

interface HeaderProps {
  data: CVData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  // القائمة المحددة من المستخدم للتراخيص في الهيدر
  const licenseList = [
    "International Certificate in IT Skills Foundation",
    "Retail Banking Foundations",
    "Cybersecurity Essentials",
    "Professional Collector Program",
    "Collection Skills",
    "Introduction to Securities and Investment (CME-1)"
  ];

  const profileImageUrl = "https://l.top4top.io/p_3640zcx0m1.jpg";

  return (
    <header className="relative bg-white border border-gray-100 rounded-3xl p-4 sm:p-6 md:p-10 shadow-2xl shadow-gray-200/50 mb-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7A969]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#22042C]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="flex flex-col items-center relative z-10 w-full">
        
        {/* Profile Image - Centered */}
        <div className="relative group shrink-0 mb-6">
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#C7A969] to-[#22042C] rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative">
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-[1.8rem] overflow-hidden border-[4px] border-white shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src={profileImageUrl} 
                alt={data.name} 
                className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22042C]/20 to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-white p-1 rounded-2xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-[#C7A969] to-[#967d3e] text-white px-3 py-1.5 rounded-xl flex items-center gap-1.5 border border-white/20">
                <span className="text-xs">🏆</span>
                <span className="text-[9px] font-bold uppercase tracking-wider">Certified Specialist</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Name - Centered */}
        <div className="w-full text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#22042C] mb-2 leading-tight tracking-tight">
            {data.name}
          </h1>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-100 mb-8"></div>

        {/* Rest of Info - Right Aligned */}
        <div className="w-full text-right flex flex-col items-start px-2">
          
          {/* Titles Section - Right Aligned */}
          <div className="mb-6 w-full">
            <div className="text-[#C7A969] font-bold text-base md:text-lg flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#C7A969]/30"></span>
              {data.jobTitle}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {data.secondaryTitles.map((t, i) => (
                <span key={i} className="font-poppins text-gray-400 text-[11px] md:text-xs font-medium tracking-wide flex items-center gap-2">
                  {i > 0 && <span className="w-1 h-1 bg-gray-300 rounded-full"></span>}
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Row - Right Aligned */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 w-full">
            <a href={`tel:${data.contact.phone.replace(/\s/g, '')}`} className="group flex items-center gap-2.5 text-[10px] text-gray-600 hover:text-[#22042C] transition-all whitespace-nowrap">
              <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-[#22042C] group-hover:bg-[#22042C] group-hover:text-[#C7A969] shadow-sm transition-all">
                📞
              </div>
              <span dir="ltr" className="font-bold tracking-tighter">{data.contact.phone}</span>
            </a>

            <a href={`mailto:${data.contact.email}`} className="group flex items-center gap-2.5 text-[10px] text-gray-600 hover:text-[#22042C] transition-all whitespace-nowrap">
              <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-[#22042C] group-hover:bg-[#22042C] group-hover:text-[#C7A969] shadow-sm transition-all">
                ✉️
              </div>
              <span className="font-poppins font-medium">{data.contact.email}</span>
            </a>

            <a href={`https://www.linkedin.com/${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2.5 text-[10px] text-gray-600 hover:text-[#22042C] transition-all whitespace-nowrap">
               <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-[#22042C] group-hover:bg-[#22042C] group-hover:text-[#C7A969] shadow-sm transition-all">
                🔗
              </div>
              <span className="font-poppins font-medium">{data.contact.linkedin.replace('in/', '')}</span>
            </a>

            <div className="group flex items-center gap-2.5 text-[10px] text-gray-600 whitespace-nowrap">
               <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-[#22042C] shadow-sm">
                📍
              </div>
              <span className="font-medium">{data.contact.location}</span>
            </div>
          </div>

          {/* Bottom Licenses Row - Right Aligned */}
          <div className="flex flex-wrap gap-2 w-full">
             {licenseList.map((lic, idx) => (
               <span key={idx} className="text-[8.5px] text-[#967d3e] bg-[#C7A969]/5 hover:bg-[#C7A969]/10 px-2.5 py-0.5 rounded border border-[#C7A969]/10 font-bold transition-colors cursor-default">
                 📜 {lic}
               </span>
             ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;