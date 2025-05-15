
import React from 'react';
import Icon from '@/components/ui/icon';

interface WeddingHeaderProps {
  brideFirstName: string;
  brideLastName: string;
  groomFirstName: string;
  groomLastName: string;
  date: string;
}

const WeddingHeader: React.FC<WeddingHeaderProps> = ({
  brideFirstName,
  brideLastName,
  groomFirstName,
  groomLastName,
  date
}) => {
  return (
    <div className="relative py-16 sm:py-24 overflow-hidden text-center">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-wedding-light blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-72 h-72 rounded-full bg-wedding-accent blur-3xl"></div>
      </div>
      
      <div className="relative z-10 space-y-6">
        <p className="text-wedding-primary font-montserrat text-sm sm:text-base uppercase tracking-[0.25em] font-light opacity-0 animate-fadeIn">
          Приглашение на свадьбу
        </p>
        
        <div className="mt-2 sm:mt-4 opacity-0 animate-fadeIn animate-delay-1">
          <h2 className="font-cormorant text-4xl sm:text-6xl md:text-7xl font-medium text-wedding-text">
            {brideFirstName}
            <span className="px-2 sm:px-4 inline-block">
              <Icon name="Heart" className="w-6 h-6 sm:w-8 sm:h-8 text-wedding-primary animate-pulse" />
            </span>
            {groomFirstName}
          </h2>
          <div className="mt-2 flex items-center justify-center gap-4 text-xl sm:text-2xl text-gray-600">
            <span>{brideLastName}</span>
            <span>&</span>
            <span>{groomLastName}</span>
          </div>
        </div>
        
        <div className="mt-6 opacity-0 animate-fadeIn animate-delay-2">
          <div className="inline-block px-5 py-3 border-t border-b border-wedding-primary/30">
            <p className="font-montserrat text-sm sm:text-base text-wedding-text/80">
              {date}
            </p>
          </div>
        </div>
        
        <div className="mt-8 opacity-0 animate-fadeIn animate-delay-3">
          <div className="relative max-w-xs mx-auto">
            <div className="absolute inset-0 bg-wedding-primary/10 blur-md rounded-full"></div>
            <button className="relative px-8 py-3 bg-wedding-primary text-white rounded-full font-montserrat text-sm sm:text-base transition-all hover:shadow-lg hover:shadow-wedding-primary/20 hover:-translate-y-0.5">
              Подтвердить присутствие
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingHeader;
