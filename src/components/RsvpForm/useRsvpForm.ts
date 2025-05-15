
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { FormData } from './types';

export const useRsvpForm = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    attendance: 'yes',
    guestCount: '1',
    dietaryRestrictions: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: 'yes' | 'no') => {
    setFormData(prev => ({ ...prev, attendance: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Спасибо за ответ!",
        description: formData.attendance === 'yes' 
          ? "Мы рады, что вы сможете присутствовать на нашей свадьбе!" 
          : "Жаль, что вы не сможете присутствовать. Мы будем скучать по вам!",
      });
      
      setIsSubmitting(false);
      
      // Сброс формы после успешной отправки
      if (formData.attendance === 'yes') {
        setFormData(prev => ({
          ...prev,
          dietaryRestrictions: '',
          message: ''
        }));
      } else {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          attendance: 'yes',
          guestCount: '1',
          dietaryRestrictions: '',
          message: ''
        });
      }
    }, 1000);
  };
  
  return {
    formData,
    isSubmitting,
    handleChange,
    handleRadioChange,
    handleSubmit
  };
};
