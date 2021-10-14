import React, { useState } from 'react';
import Button from './Button';

const Modal = ({ children, value, customClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div
      data-test={'modal-component'}
      className={`modal-container ${customClass === undefined ? '' : customClass}`}
    >
      <div className={'overlay'} onClick={() => setIsOpen(!isOpen)} />
      <div className={'modal-container__body'}>
        <Button
          data-test={'close-button'}
          color={'danger'}
          value={'X'}
          onClick={() => setIsOpen(!isOpen)}
        />
        {children}
      </div>
    </div>
  ) : (
    <div data-test={'modal-component'} className={'modal-container'}>
      <Button
        data-test={'open-button'}
        color={'primary'}
        value={value === undefined ? 'Open' : value}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Modal;
