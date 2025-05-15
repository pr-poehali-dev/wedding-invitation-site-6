
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FormSectionProps } from './types';

const ContactSection: React.FC<FormSectionProps> = ({ formData, handleChange }) => {
  return (
    <>
      <div>
        <Label htmlFor="fullName">Ваше имя и фамилия</Label>
        <Input
          id="fullName"
          name="fullName"
          placeholder="Иван Иванов"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="wedding-input mt-1"
        />
      </div>
      
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ivan@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="wedding-input mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+7 (999) 123-45-67"
            value={formData.phone}
            onChange={handleChange}
            required
            className="wedding-input mt-1"
          />
        </div>
      </div>
    </>
  );
};

export default ContactSection;
