import React, { useState } from 'react';
import Image from 'next/image';
import Vector from '../../images/Vector.png';

interface CollapseProps {
  title: string | JSX.Element;
  content: string | JSX.Element;
  isOpen: boolean;
}

const Collapse: React.FC<CollapseProps> = ({ title, content, isOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(!isOpen);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapse ${isCollapsed ? '' : 'expanded'}`}>
      <div onClick={handleToggle} className='title'>
        <div className='titre'>{title}</div>
        <Image
          src={Vector}
          className={`arrow ${isCollapsed ? '' : 'rotate'}`}
          alt='Arrow navigation'
          width={20} 
          height={20} 
        />
      </div>
      <div className='content-container'>
        <div className={`content ${isCollapsed ? '' : 'open'}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Collapse;