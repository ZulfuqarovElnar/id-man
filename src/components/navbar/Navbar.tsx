import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../sidebar/Sidebar';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="shadow-lg py-3 px-5 flex justify-between items-center bg-white">
      <div className="flex items-center space-x-4">
        <Sidebar />
        <NavLink to="/home">
          <h1 className="text-[#661AD2] font-bungee text-xl tracking-wide">
            EZEFIT
          </h1>
        </NavLink>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="relative transform hover:scale-110 transition-transform duration-200 cursor-pointer">
          <FontAwesomeIcon icon={faBell} className="text-2xl" />
          <span className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 bg-red-600 rounded-full p-[5px] border-2 border-white text-white text-[8px] font-inter font-bold">
            1
          </span>
        </div>

        <div className="rounded-full overflow-hidden w-12 h-12 border-2 border-[#101979] transform hover:scale-110 transition-transform duration-200 cursor-pointer">
          <NavLink to="/profile">
            <img 
              src="assets/images/profile.svg" 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </NavLink>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
