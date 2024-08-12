import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QRCodeButton from '../components/user/QRCode/QRCodeButton';
import QRCodeScanner from '../components/user/QRCode/QrCodeScanner';
import PasswordInput from '../components/user/PasswordInput';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<QRCodeButton />} />
      <Route path="/scanner" element={<QRCodeScanner />} />
      <Route path="/password" element={<PasswordInput />} />
    </Routes>
  );
};

export default AppRoutes;
