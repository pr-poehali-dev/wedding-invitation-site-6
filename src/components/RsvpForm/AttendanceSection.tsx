
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AttendanceRadioProps } from './types';

const AttendanceSection: React.FC<AttendanceRadioProps> = ({ 
  formData, 
  handleRadioChange 
}) => {
  return (
    <div>
      <Label>Вы придете?</Label>
      <RadioGroup 
        value={formData.attendance} 
        onValueChange={value => handleRadioChange(value as 'yes' | 'no')}
        className="flex gap-8 mt-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="attendance-yes" />
          <Label htmlFor="attendance-yes" className="cursor-pointer">С удовольствием приду</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="attendance-no" />
          <Label htmlFor="attendance-no" className="cursor-pointer">К сожалению, не смогу</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default AttendanceSection;
