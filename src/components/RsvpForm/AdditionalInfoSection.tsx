
import React from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FormSectionProps } from './types';

const AdditionalInfoSection: React.FC<FormSectionProps> = ({ formData, handleChange }) => {
  return (
    <>
      {formData.attendance === 'yes' && (
        <>
          <div>
            <Label htmlFor="guestCount">Количество гостей</Label>
            <select
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              className="wedding-input mt-1"
            >
              <option value="1">1 (только я)</option>
              <option value="2">2 (я и спутник/спутница)</option>
            </select>
          </div>
          
          <div>
            <Label htmlFor="dietaryRestrictions">Есть ли у вас диетические ограничения?</Label>
            <Textarea
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              placeholder="Например: вегетарианство, аллергии..."
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              className="wedding-input mt-1 h-20"
            />
          </div>
        </>
      )}
      
      <div>
        <Label htmlFor="message">Сообщение для нас (необязательно)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Поздравления, вопросы или пожелания..."
          value={formData.message}
          onChange={handleChange}
          className="wedding-input mt-1 h-24"
        />
      </div>
    </>
  );
};

export default AdditionalInfoSection;
