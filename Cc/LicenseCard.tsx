import React from 'react';

interface LicenseCardProps {
  title: string;
  issuer: string;
}

const LicenseCard: React.FC<LicenseCardProps> = ({ title, issuer }) => {
  return (
    <div className="relative group bg-gradient-to-r from-white to-[#fafafa] border border-[#C7A969]/30 rounded-lg p-2 sm:px-3 sm:py-2 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center min-h-[48px] sm:min-h-[54px] w-full break-inside-avoid overflow-hidden border-r-4 border-r-[#C7A969]">
      {/* Decorative Stamp Element - Very subtle for compact look */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-[#C7A969]/5 rounded-br-full pointer-events-none"></div>
      
      <div className="relative z-10 text-right">
        <h4 className="text-[#22042C] font-bold text-[11px] sm:text-[13px] leading-tight mb-0.5 line-clamp-1">
          {title}
        </h4>
        
        <div className="flex items-center justify-start gap-1.5">
          <p className="text-[#967d3e] text-[8px] sm:text-[10px] font-bold truncate uppercase tracking-tighter opacity-80">
            {issuer}
          </p>
        </div>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
    </div>
  );
};

export default LicenseCard;