
import React from 'react';
import Icon from '@/components/ui/icon';

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  icon: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <section id="timeline" className="wedding-section">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-cormorant font-semibold mb-4 text-center text-wedding-text">
          Программа дня
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-xl mx-auto">
          План нашего свадебного дня
        </p>
        
        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-wedding-light/80"></div>
          
          {/* События */}
          <div className="space-y-12">
            {items.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col sm:flex-row gap-8 sm:gap-0 items-start sm:items-center opacity-0 animate-fadeIn`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Для мобильных устройств, маркер и контент идут сверху вниз */}
                <div className="flex sm:hidden items-start gap-4">
                  <div className="w-10 h-10 bg-wedding-accent rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-md z-10">
                    <Icon name={item.icon} className="h-5 w-5 text-wedding-primary" />
                  </div>
                  <div className="pt-1">
                    <span className="block text-sm font-medium text-wedding-primary mb-1">{item.time}</span>
                  </div>
                </div>
                
                {/* Для десктопа, контент слева или справа от маркера */}
                <div className={`hidden sm:block sm:w-1/2 sm:pr-8 ${index % 2 === 0 ? 'text-right' : 'sm:order-last sm:pl-8 sm:pr-0'}`}>
                  <div className="wedding-card">
                    <h3 className="text-xl font-cormorant font-semibold mb-1">{item.title}</h3>
                    <span className="block text-sm font-medium text-wedding-primary mb-2">{item.time}</span>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="hidden sm:flex sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:items-center sm:justify-center">
                  <div className="w-10 h-10 bg-wedding-accent rounded-full flex items-center justify-center border-2 border-white shadow-md z-10">
                    <Icon name={item.icon} className="h-5 w-5 text-wedding-primary" />
                  </div>
                </div>
                
                {/* Мобильная карточка события */}
                <div className="sm:hidden wedding-card w-full">
                  <h3 className="text-xl font-cormorant font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
                <div className={`hidden sm:block sm:w-1/2 ${index % 2 !== 0 ? 'text-right' : 'sm:order-first sm:pr-8'}`}>
                  {index % 2 !== 0 && (
                    <div className="wedding-card">
                      <h3 className="text-xl font-cormorant font-semibold mb-1">{item.title}</h3>
                      <span className="block text-sm font-medium text-wedding-primary mb-2">{item.time}</span>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
