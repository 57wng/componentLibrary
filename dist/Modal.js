import React, { useState } from 'react';
import Button from './Button';

const Modal = ({
  children,
  value,
  customClass
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? /*#__PURE__*/React.createElement("div", {
    "data-test": 'modal-component',
    className: `modal-container ${customClass === undefined ? '' : customClass}`
  }, /*#__PURE__*/React.createElement("div", {
    className: 'overlay',
    onClick: () => setIsOpen(!isOpen)
  }), /*#__PURE__*/React.createElement("div", {
    className: 'modal-container__body'
  }, /*#__PURE__*/React.createElement(Button, {
    "data-test": 'close-button',
    color: 'danger',
    value: 'X',
    onClick: () => setIsOpen(!isOpen)
  }), children)) : /*#__PURE__*/React.createElement("div", {
    "data-test": 'modal-component',
    className: 'modal-container'
  }, /*#__PURE__*/React.createElement(Button, {
    "data-test": 'open-button',
    color: 'primary',
    value: value === undefined ? 'Open' : value,
    onClick: () => setIsOpen(!isOpen)
  }));
};

export default Modal;