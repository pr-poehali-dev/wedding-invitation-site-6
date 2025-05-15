
import React from 'react';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

interface VenueInfo {
  ceremony: {
    name: string;
    time: string;
    address: string;
  };
  reception: {
    name: string;
    time: string;
    address: string;
  };
}

interface EventDetailsProps {
  date: string;
  venueInfo: VenueInfo;
}

const EventDetails: React.FC<EventDetailsProps> = ({ date, venueInfo }) => {
  return (
    <section id="details" className="wedding-section">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-cormorant font-semibold mb-4 text-wedding-text">
          Детали торжества
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Мы с радостью приглашаем вас разделить с нами один из самых счастливых дней в нашей жизни
        </p>
        
        <div className="my-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-wedding-light/50 rounded-full">
            <Icon name="Calendar" className="h-5 w-5 text-wedding-primary" />
            <span className="font-medium">{date}</span>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8 mt-12">
          {/* Церемония */}
          <div className="wedding-card opacity-0 animate-fadeIn animate-delay-1">
            <div className="w-12 h-12 bg-wedding-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="HeartHandshake" className="h-6 w-6 text-wedding-primary" />
            </div>
            <h3 className="text-xl font-cormorant font-semibold mb-2">Церемония</h3>
            <p className="text-wedding-primary font-medium mb-2">{venueInfo.ceremony.time}</p>
            <p className="text-gray-700 font-medium mb-1">{venueInfo.ceremony.name}</p>
            <p className="text-gray-600 text-sm">{venueInfo.ceremony.address}</p>
          </div>
          
          {/* Банкет */}
          <div className="wedding-card opacity-0 animate-fadeIn animate-delay-2">
            <div className="w-12 h-12 bg-wedding-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="GlassWater" className="h-6 w-6 text-wedding-primary" />
            </div>
            <h3 className="text-xl font-cormorant font-semibold mb-2">Банкет</h3>
            <p className="text-wedding-primary font-medium mb-2">{venueInfo.reception.time}</p>
            <p className="text-gray-700 font-medium mb-1">{venueInfo.reception.name}</p>
            <p className="text-gray-600 text-sm">{venueInfo.reception.address}</p>
          </div>
        </div>
        
        <div className="mt-12">
          <Separator className="my-6 bg-wedding-light" />
          <p className="text-gray-500 italic">
            Пожалуйста, подтвердите своё присутствие до <span className="font-medium">10 июня 2025</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
