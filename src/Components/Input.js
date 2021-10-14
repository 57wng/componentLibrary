import React from 'react';

const Input = ({ placeholder, value, type, required, onChange, customClass }) => {
  return (
    <div
      data-test={'input-component'}
      className={`input-container form__group field ${
        customClass === undefined ? '' : customClass
      }`}
    >
      <input
        data-test={'input-field'}
        className={'form__field'}
        autoComplete="off"
        id={placeholder}
        type={type === undefined ? 'text' : type}
        value={value}
        required={required === undefined ? false : true}
        placeholder={' '}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={placeholder} className={'form__label'}>
        {placeholder} <span className={'required'}>{required && '*'}</span>
      </label>
      <span className={'underline'}></span>
    </div>
  );
};

export default Input;
