import React from 'react';

interface LanguageIconProps {
  language: string;
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ language }) => {
  const greetings: Record<string, string> = {
    spanish: '¡Hola!',
    french: 'Bonjour!',
    japanese: 'こんにちは',
    german: 'Hallo!',
    italian: 'Ciao!',
    mandarin: '你好',
  };

  const greeting = greetings[language.toLowerCase()] || 'Hello';

  return (
    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold shadow-md">
      <div className="text-xl">{greeting}</div>
    </div>
  );
};

export default LanguageIcon; 