import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import icsLogo from '../icsLogo.png';
type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};



export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <ul>
        <li className='disabled'>
          <img className = "icsLogo" src={icsLogo} alt='icsLogo'></img>
        </li>

        <li >
            <div className='iconContainer'>
            <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <p>Place</p>
        </li>



      </ul>
    </div>
  );
};


