import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faInfoCircle, faCog, faGlobe, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const menuItems = [
  { to: '/rules', icon: faInfoCircle, label: 'Qaydalar' },
  { to: '/settings', icon: faCog, label: 'Ayarlar' },
  { to: '/language', icon: faGlobe, label: 'Dil' },
  { to: '/support', icon: faQuestionCircle, label: 'Dəstək' },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        type="button"
        aria-label="Toggle menu"
        className="focus:outline-none transform hover:scale-110 transition-transform duration-200"
      >
        <FontAwesomeIcon icon={faBars} className="text-3xl text-black" />
      </button>

      <div
        className={`fixed top-0 left-0 w-[290px] h-full bg-white shadow-lg z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="px-5">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-[#661AD2] font-bungee text-xl tracking-wide">
              EZEFIT
            </h1>
            <button
              onClick={toggleSidebar}
              type="button"
              aria-label="Close menu"
              className="focus:outline-none"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl text-[#661AD2]" />
            </button>
          </div>

          <ul>
            {menuItems.map((item) => (
              <li className="mb-4" key={item.to}>
                <Link to={item.to} className="flex items-center space-x-2 text-black">
                  <FontAwesomeIcon icon={item.icon} className="text-lg" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
