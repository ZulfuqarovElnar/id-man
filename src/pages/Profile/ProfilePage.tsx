import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center bg-white h-screen">
      <div className="w-full flex items-center p-4 mb-6 shadow-lg">
        <button
          onClick={goBack}
          aria-label="Go back"
          className="focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-black" />
        </button>
        <h1 className="ml-4 text-2xl font-semibold">Profile</h1>
      </div>

      <div className="flex flex-col items-center sm:items-start sm:flex-row gap-5">
        <img
          src="assets/images/profile.svg" 
          alt="Profile"
          className="w-36 h-36 rounded-full mb-4"
        />
        <div className='sm:py-4 text-center sm:text-left'>
            <h2 className="text-xl font-semibold">Zakir Ağayev</h2>
            <p className="text-gray-600">zakiragayev99@gmail.com</p>
            <p className="text-gray-600">+994 00 000 00 00</p>
        </div>
        
      </div>
    </div>
  );
};

export default ProfilePage;
