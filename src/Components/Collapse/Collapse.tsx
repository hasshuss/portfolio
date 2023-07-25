import React, { useState } from 'react';
import Image from 'next/image';
import Vector from '../../images/Vector.png';


interface CollapseProps {
  title: string;
  content: string;
  isOpen: boolean;
}

const Collapse: React.FC<CollapseProps> = ({ title, content, isOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(!isOpen);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='collapse'>
      <div onClick={handleToggle} className='title'>
        <div className='titre'>{title}</div>
        <Image
          src={Vector}
          className={`arrow ${isCollapsed ? '' : 'rotate'}`}
          alt='Arrow'
          width={20} // Set the desired width of the image
          height={20} // Set the desired height of the image
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