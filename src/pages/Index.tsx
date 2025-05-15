
import React from 'react';
import WeddingHeader from '../components/WeddingHeader';
import EventDetails from '../components/EventDetails';
import Timeline from '../components/Timeline';
import RsvpForm from '../components/RsvpForm';
import LocationMap from '../components/LocationMap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Index = () => {
  // Информация о молодоженах
  const weddingInfo = {
    brideFirstName: "Анастасия",
    brideLastName: "Иванова",
    groomFirstName: "Владислав",
    groomLastName: "Петров",
    date: "15 сентября 2025",
    venue: {
      ceremony: {
        name: "ЗАГС №4",
        time: "13:00",
        address: "г. Москва, ул. Живописная, 23"
      },
      reception: {
        name: "Ресторан «Панорама»",
        time: "16:00",
        address: "г. Москва, Красная площадь, 1"
      }
    },
    googleMapsUrl: "https://goo.gl/maps/your-location"
  };
  
  // Программа свадебного дня
  const timelineItems = [
    {
      time: "12:30",
      title: "Сбор гостей",
      description: "Встреча гостей в ЗАГСе перед церемонией",
      icon: "Users"
    },
    {
      time: "13:00",
      title: "Церемония бракосочетания",
      description: "Торжественная церемония с обменом кольцами",
      icon: "Rings"
    },
    {
      time: "14:00",
      title: "Фотосессия",
      description: "Совместная фотосессия с гостями",
      icon: "Camera"
    },
    {
      time: "16:00",
      title: "Праздничный банкет",
      description: "Вкусные блюда, тосты и поздравления",
      icon: "GlassWater"
    },
    {
      time: "19:00",
      title: "Развлекательная программа",
      description: "Конкурсы, танцы и веселье",
      icon: "Music"
    },
    {
      time: "22:00",
      title: "Свадебный торт",
      description: "Разрезание торта и сладкий стол",
      icon: "Cake"
    }
  ];
  
  // Контактная информация
  const contactItems = [
    {
      name: "Настя",
      phone: "+7 (999) 123-45-67",
      role: "Невеста"
    },
    {
      name: "Влад",
      phone: "+7 (999) 987-65-43",
      role: "Жених"
    }
  ];
  
  return (
    <div>
      <Navigation />
      
      <div className="wedding-container">
        <div id="hero">
          <WeddingHeader
            brideFirstName={weddingInfo.brideFirstName}
            brideLastName={weddingInfo.brideLastName}
            groomFirstName={weddingInfo.groomFirstName}
            groomLastName={weddingInfo.groomLastName}
            date={weddingInfo.date}
          />
        </div>
        
        <EventDetails 
          date={weddingInfo.date} 
          venueInfo={weddingInfo.venue} 
        />
        
        <Timeline items={timelineItems} />
        
        <LocationMap 
          locationName={weddingInfo.venue.reception.name}
          address={weddingInfo.venue.reception.address}
          googleMapsUrl={weddingInfo.googleMapsUrl}
        />
        
        <RsvpForm />
      </div>
      
      <Footer 
        brideAndGroom={`${weddingInfo.brideFirstName} и ${weddingInfo.groomFirstName}`}
        contactItems={contactItems}
      />
    </div>
  );
};

export default Index;
