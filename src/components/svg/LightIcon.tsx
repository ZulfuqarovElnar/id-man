import classNames from 'classnames';
import React from 'react';

interface LightIconProps {
  className?: string;
}

const LightIcon: React.FC<LightIconProps> = ({ className }) => (
  <svg
    width="19"
    height="25"
    viewBox="0 0 19 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(className)}
  >
    <path
      d="M12.5 1.3855L1.63281 14.8164H7.97656L6.41491 23.4018C6.41194 23.4186 6.4127 23.4359 6.41713 23.4524C6.42157 23.469 6.42958 23.4843 6.44059 23.4974C6.4516 23.5105 6.46534 23.521 6.48086 23.5282C6.49638 23.5354 6.51328 23.5391 6.53039 23.5391C6.54859 23.539 6.56653 23.5348 6.58279 23.5266C6.59905 23.5184 6.61318 23.5066 6.62406 23.492L17.4922 10.0586H11.1484L12.7175 1.47223C12.7196 1.45512 12.7181 1.43776 12.713 1.42131C12.7078 1.40485 12.6993 1.38967 12.6878 1.37677C12.6764 1.36388 12.6623 1.35357 12.6466 1.34653C12.6309 1.33949 12.6138 1.33588 12.5966 1.33594C12.5777 1.33601 12.5591 1.34054 12.5423 1.34915C12.5256 1.35776 12.511 1.37022 12.5 1.3855Z"
      stroke="#076AFF"
      strokeWidth="1.58594"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LightIcon;
