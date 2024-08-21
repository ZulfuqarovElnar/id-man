import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QRCodeButton from '../components/user/QRCode/QRCodeButton';
import QRCodeScanner from '../components/user/QRCode/QrCodeScanner';
import PasswordInput from '../components/user/PasswordInput';
import HomePage from '../pages/Home/HomePage';
import ProfilePage from '../pages/Profile/ProfilePage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<QRCodeButton />} />
      <Route path="/scanner" element={<QRCodeScanner />} />
      <Route path="/password" element={<PasswordInput />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
