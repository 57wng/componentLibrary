import React from 'react';

const Input = ({
  placeholder,
  value,
  type,
  required,
  name,
  onChange,
  customClass
}) => {
  return /*#__PURE__*/React.createElement("div", {
    "data-test": 'input-component',
    className: `input-container form__group field ${customClass === undefined ? '' : customClass}`
  }, /*#__PURE__*/React.createElement("input", {
    "data-test": 'input-field',
    className: 'form__field',
    autoComplete: "off",
    id: placeholder,
    name: name,
    type: type === undefined ? 'text' : type,
    value: value,
    required: required === undefined ? false : true,
    placeholder: ' ',
    onChange: name !== undefined ? e => onChange(e) : e => onChange(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: placeholder,
    className: 'form__label'
  }, placeholder, " ", /*#__PURE__*/React.createElement("span", {
    className: 'required'
  }, required && '*')), /*#__PURE__*/React.createElement("span", {
    className: 'underline'
  }));
};

export default Input;