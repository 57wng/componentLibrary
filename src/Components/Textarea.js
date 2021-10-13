import React from 'react';

const Textarea = ({ placeholder, value, type, rows, required, onChange, customClass }) => {
  return (
    <div
      data-test={'textarea-component'}
      style={{
        height: `${rows}rem`,
      }}
      className={`input-container form__group field ${
        customClass === undefined ? '' : customClass
      }`}
    >
      <textarea
        data-test={'textarea-field'}
        className={'form__field'}
        autoComplete="off"
        id={placeholder}
        style={{
          height: `${rows}rem`,
        }}
        value={value}
        required={required && true}
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

export default Textarea;
