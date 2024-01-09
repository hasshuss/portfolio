import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import vector from '../../images/Vectorlight.png';

interface ModalProps {
  content: JSX.Element;
  initialIsOpen: boolean;
  contentLink?: string;
  fonction?: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, initialIsOpen, contentLink, fonction }) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    setModalRoot(root);

    return () => {
      document.body.removeChild(root);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
    
  };


  useEffect(() => {
    const root = document.createElement('div');
    const parent = document.getElementById('Portfolio')

    if (parent) {
        parent.appendChild(root);
        setModalRoot(root);

        return () => {
            parent.removeChild(root);
        };
    }
}, []);


  if (!modalRoot) return null;

  return (
    <>
      <div className='LinkContainer' onClick={handleToggle}>
        <div className='TextLink Link' onClick={fonction}>{contentLink}</div>
        <Image
          src={vector}
          alt='Vector icon'
          className={"vector"}
          width={10}
          height={16}
        />
      </div>
  
      {ReactDOM.createPortal(
        <>
          <div 
            className={`backdrop ${isOpen ? 'backdrop-visible' : ''}`} 
            onClick={handleToggle}
          ></div>
          <div aria-hidden="true" className={`ModalContainer ${isOpen ? '' : 'ModalHidden'}`}>
            <div onClick={(e) => e.stopPropagation()} className='CloseIcon'>
              {content}
            </div>
          </div>
        </>,
        modalRoot
      )}
    </>
  );
};

export default Modal;