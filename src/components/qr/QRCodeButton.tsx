import React from 'react';

const QRCodeButton
: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-4">
      <div className="w-[264px] text-center mb-20 text-[#B9B9B9] font-medium" >
        Zəhmət olmasa "Skan et" düyməsinə toxunun və QR kodunuzu oxudun
      </div>
      <div className="relative mb-24 w-[255px]">
        <div className="bg-white flex justify-center">
          <img
            src="assets/images/image.svg"
            alt="QR Code"
            className="w-48 h-48"
          />
        </div>
        <div className="absolute inset-0 top-24 flex items-center justify-center">
          <div className="w-full h-[5px] bg-[#076AFF] shadow-custom"></div>
        </div>
      </div>
      <button className="bg-[#0064F9] hover:bg-[#1761d1] text-white py-5 px-20 rounded-xl font-bold text-xl">
        Skan et
      </button>
    </div>
  );
};

export default QRCodeButton
;
