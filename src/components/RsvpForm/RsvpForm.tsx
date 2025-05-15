
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRsvpForm } from './useRsvpForm';
import ContactSection from './ContactSection';
import AttendanceSection from './AttendanceSection';
import AdditionalInfoSection from './AdditionalInfoSection';

const RsvpForm: React.FC = () => {
  const {
    formData,
    isSubmitting,
    handleChange,
    handleRadioChange,
    handleSubmit
  } = useRsvpForm();
  
  return (
    <section id="rsvp" className="wedding-section">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-cormorant font-semibold mb-4 text-center">
          Подтвердите присутствие
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-xl mx-auto">
          Пожалуйста, заполните форму до 10 июня 2025 года
        </p>
        
        <div className="bg-white rounded-xl shadow-md border border-wedding-light/40 p-6 sm:p-8 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Контактная информация */}
              <ContactSection 
                formData={formData} 
                handleChange={handleChange} 
              />
              
              {/* Секция подтверждения присутствия */}
              <AttendanceSection 
                formData={formData} 
                handleChange={handleChange} 
                handleRadioChange={handleRadioChange} 
              />
              
              {/* Дополнительная информация */}
              <AdditionalInfoSection 
                formData={formData} 
                handleChange={handleChange} 
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-6 bg-wedding-primary hover:bg-wedding-primary/90 text-white"
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RsvpForm;
