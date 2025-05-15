
import React from 'react';
import Icon from '@/components/ui/icon';

interface ContactItem {
  name: string;
  phone: string;
  role: string;
}

interface FooterProps {
  brideAndGroom: string;
  contactItems: ContactItem[];
}

const Footer: React.FC<FooterProps> = ({ brideAndGroom, contactItems }) => {
  return (
    <footer className="bg-white py-12 border-t border-wedding-light/30 mt-12">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-cormorant font-semibold mb-2">
            {brideAndGroom}
          </h2>
          <p className="text-gray-600 mb-4">Будем ждать встречи с вами!</p>
        </div>
        
        <div className="bg-wedding-accent/20 rounded-xl p-6 mb-8">
          <h3 className="font-medium mb-4">По всем вопросам обращайтесь:</h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 bg-wedding-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="h-4 w-4 text-wedding-primary" />
                </div>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-wedding-primary text-sm">{item.phone}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center gap-3 mb-6">
          <a href="#" className="text-gray-500 hover:text-wedding-primary transition-colors">
            <Icon name="Instagram" className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-wedding-primary transition-colors">
            <Icon name="Facebook" className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-wedding-primary transition-colors">
            <Icon name="Heart" className="h-5 w-5" />
            <span className="sr-only">Свадебный хэштег</span>
          </a>
        </div>
        
        <div className="text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Свадебное приглашение</p>
          <p className="mt-1">
            С любовью создано для особенного дня
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
