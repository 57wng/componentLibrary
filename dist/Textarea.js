import React from 'react';

const Textarea = ({
  placeholder,
  value,
  rows,
  required,
  onChange,
  customClass
}) => {
  return /*#__PURE__*/React.createElement("div", {
    "data-test": 'textarea-component',
    style: {
      height: `${rows}rem`
    },
    className: `input-container form__group field ${customClass === undefined ? '' : customClass}`
  }, /*#__PURE__*/React.createElement("textarea", {
    "data-test": 'textarea-field',
    className: 'form__field',
    autoComplete: "off",
    id: placeholder,
    style: {
      height: `${rows === undefined ? 5 : rows}rem`
    },
    value: value,
    required: required === undefined ? false : true,
    placeholder: ' ',
    onChange: e => onChange(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: placeholder,
    className: 'form__label'
  }, placeholder, " ", /*#__PURE__*/React.createElement("span", {
    className: 'required'
  }, required && '*')), /*#__PURE__*/React.createElement("span", {
    className: 'underline'
  }));
};

export default Textarea;