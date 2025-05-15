
export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  attendance: 'yes' | 'no';
  guestCount: string;
  dietaryRestrictions: string;
  message: string;
}

export interface FormSectionProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export interface AttendanceRadioProps extends FormSectionProps {
  handleRadioChange: (value: 'yes' | 'no') => void;
}
