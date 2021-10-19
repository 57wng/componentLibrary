import React from 'react';

export const Button = ({ value, color, disabled, onClick, customClass }) => {
  const createRipple = (event) => {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <div className={`button-container ${
        customClass === undefined ? '' : customClass
    }`} data-test={'button-component'}>
      <button
        data-test={'button'}
        disabled={disabled === undefined ? false : true}
        onClick={(e) => {
          createRipple(e);
          if (typeof onClick === 'function') {
            onClick();
          }
        }}
        className={`${customClass === undefined ? '' : customClass} ${
          color !== undefined ? color : 'primary'
        }`}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
