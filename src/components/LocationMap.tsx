
import React from 'react';
import Icon from '@/components/ui/icon';

interface LocationMapProps {
  locationName: string;
  address: string;
  googleMapsUrl: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ 
  locationName, 
  address, 
  googleMapsUrl 
}) => {
  return (
    <section id="location" className="wedding-section">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-cormorant font-semibold mb-4 text-center">
          Место проведения
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-xl mx-auto">
          Как добраться до места проведения нашей свадьбы
        </p>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-md border border-wedding-light/40">
          {/* Имитация карты через iframe - в реальном проекте тут будет Google Maps API */}
          <div className="relative h-64 sm:h-80 bg-wedding-accent/30 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">
                Здесь будет карта с местом проведения свадьбы<br/>
                <span className="text-sm">В финальной версии будет интегрирована Google Maps</span>
              </p>
            </div>
            <div className="absolute inset-0 bg-wedding-light/30 pattern-dots pattern-gray-500 pattern-bg-white pattern-size-6 pattern-opacity-10"></div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-cormorant font-semibold mb-1">{locationName}</h3>
            <p className="text-gray-600 mb-4">{address}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-wedding-primary text-white py-3 px-6 rounded-full transition-all hover:bg-wedding-primary/90 hover:shadow-md"
              >
                <Icon name="MapPin" className="h-5 w-5" />
                <span>Открыть в Google Maps</span>
              </a>
              
              <a 
                href="#"
                className="flex items-center justify-center gap-2 bg-white text-wedding-text border border-wedding-light py-3 px-6 rounded-full transition-all hover:bg-wedding-light/20 hover:shadow-sm"
              >
                <Icon name="Car" className="h-5 w-5" />
                <span>Схема проезда</span>
              </a>
            </div>
            
            <div className="mt-6 pt-6 border-t border-wedding-light/50">
              <h4 className="font-medium mb-2">Парковка</h4>
              <p className="text-gray-600 text-sm">
                Парковочные места доступны для гостей свадьбы. Пожалуйста, следуйте указателям при прибытии.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
