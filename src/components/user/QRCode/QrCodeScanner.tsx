import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import LightIcon from '../../svg/LightIcon';
import { Link } from 'react-router-dom';

const corners = [
  { className: 'corner-top-left' },
  { className: 'corner-top-right' },
  { className: 'corner-bottom-left' },
  { className: 'corner-bottom-right' } 
];

const QRCodeScanner: React.FC = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleLightToggle = () => {
    setIsLightOn(prev => !prev);
  };

  const handleScan = (data: any) => {
    if (data) {
      console.log('QR code scanned:', data);
      // You may want to handle the scanned data here, like saving it or redirecting.
    }
  };

  const handleError = (error: any) => {
    if (error) {
      console.error('QR code scan error:', error);
      // Handle the error appropriately, maybe display an error message.
    }
  };

  return (
    <div className="flex flex-col items-center py-12 px-6 bg-slate-600 h-screen">
      <div className="max-w-[430px] w-full px-3 flex flex-col justify-between h-screen">
        <div className="flex justify-start">
          <Link to="/">
            <button
              className="flex justify-center items-center w-12 h-12 border border-white rounded-full focus:outline-none hover:bg-gray-700"
              title="Close"
              type="button"
            >
              <FontAwesomeIcon className="text-2xl w-6 text-white" icon={faXmark} />
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 relative">
          <div className="relative mb-5 w-60 h-60">
            <QrScanner
              delay={300}
              className={`w-60 h-60 object-cover ${isLightOn ? 'brightness-125' : 'brightness-100'}`}
              onScan={handleScan}
              onError={handleError}
            />
            {corners.map((corner, index) => (
              <div
                key={index}
                className={`absolute w-20 h-20 ${corner.className}`}
              ></div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button
              className={`flex justify-center items-center w-11 h-11 rounded-full ${isLightOn ? 'bg-yellow-300 hover:bg-yellow-400' : 'bg-white'} focus:outline-none hover:bg-gray-200`}
              aria-label="Toggle light"
              type="button"
              onClick={handleLightToggle}
            >
              <LightIcon />
            </button>
          </div>
        </div>
        <Link to="/password">
          <button
            className="flex items-center gap-4 mx-auto bg-gray-800 rounded-xl text-white px-5 py-3.5 mt-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            type="button"
          >
            <FontAwesomeIcon icon={faPen} />
            Şifrə ilə daxil ol
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QRCodeScanner;
