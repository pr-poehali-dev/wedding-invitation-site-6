
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const RsvpForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attendance: 'yes',
    guestCount: '1',
    dietaryRestrictions: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: string) => {
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
              
              <div>
                <Label>Вы придете?</Label>
                <RadioGroup 
                  value={formData.attendance} 
                  onValueChange={handleRadioChange}
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
              
              {formData.attendance === 'yes' && (
                <>
                  <div>
                    <Label htmlFor="guestCount">Количество гостей</Label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange as any}
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
