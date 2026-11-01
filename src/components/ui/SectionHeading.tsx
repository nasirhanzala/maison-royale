import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="h-[1px] w-6 bg-[#C6A15B]/60"></span>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium font-sans">
            {eyebrow}
          </span>
          <span className="h-[1px] w-6 bg-[#C6A15B]/60"></span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#F5F1E8] tracking-tight leading-[1.15] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#B8B1A5] font-light leading-relaxed max-w-2xl text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};
