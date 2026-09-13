import React from 'react';

interface ChurchLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
  title?: string;
  showSubtitle?: boolean;
}

export const ChurchLogo: React.FC<ChurchLogoProps> = ({ 
  className = '', 
  size = 'md',
  withText = true,
  title = 'GPRM',
  showSubtitle = false
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className={`${sizeMap[size]} shrink-0 relative drop-shadow-md`}>
        <img 
          src="/logo.png" 
          alt="Grace Prayer Group Ministries Logo" 
          className="w-full h-full object-contain"
          width={112}
          height={112}
        />
      </div>

      {withText && (
        <div className="flex flex-col text-left">
          <span className="font-heading font-black text-lg sm:text-xl tracking-wider text-slate-100 group-hover:text-orange-400 transition-colors leading-none">
            {title}
          </span>
          {showSubtitle && (
            <span className="text-[10px] text-orange-400 font-semibold tracking-wider uppercase mt-1">
              Grace Prayer Group Ministries
            </span>
          )}
        </div>
      )}
    </div>
  );
};
