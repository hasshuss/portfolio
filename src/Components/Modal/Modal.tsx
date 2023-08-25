import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import vector from '../../images/Vectorlight.png';

interface ModalProps {
  content: JSX.Element;
  initialIsOpen: boolean;
  contentLink: string;   // Marqué comme optionnel car il n'est pas utilisé actuellement.
}

const Modal: React.FC<ModalProps> = ({ content, initialIsOpen, contentLink }) => {
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
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleToggle();
    }
  };

  if (!modalRoot) return null;

  return (
    <>
      <div className='LinkContainer' onClick={handleToggle}>
        <div className='TextLink Link'>{contentLink}</div>
        <Image
          src={vector}
          alt='Vector icon'
          className={"vector"}
          width={10}
          height={16}
        />
      </div>

      {isOpen && ReactDOM.createPortal(
        <>
          <div className="backdrop" onClick={handleToggle}></div>
          <div className={`ModalContainer`}>
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