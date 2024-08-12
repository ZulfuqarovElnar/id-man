import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PasswordInput: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <button 
        title='go-back'
        type='button'
        onClick={handleGoBack} 
        className="absolute top-6 left-6 focus:outline-none"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-black text-2xl" />
      </button>
      
      <p className="text-center text-lg font-medium text-gray-700 mb-6">
        Zəhmət olmasa sizin üçün nəzərdə tutulmuş şifrəni daxil edin
      </p>
      
      <input 
        type="password" 
        className="border rounded-full w-64 h-12 text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        placeholder="XXXXXXXXXXX" 
      />
      
      <button className="bg-blue-600 text-white px-8 py-3 rounded-full focus:outline-none hover:bg-blue-700">
        Daxil ol
      </button>
    </div>
  );
};

export default PasswordInput;
