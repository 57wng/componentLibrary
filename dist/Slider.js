import React from 'react';

const Slider = ({
  defaultValue,
  value,
  onChange,
  step,
  min,
  max,
  label,
  required,
  size,
  customClass
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `slider-container vertical ${customClass === undefined ? '' : customClass}`,
    "data-test": "slider-component"
  }, /*#__PURE__*/React.createElement("p", null, label, " ", /*#__PURE__*/React.createElement("span", null, required !== undefined && required === true ? "*" : "")), /*#__PURE__*/React.createElement("input", {
    className: `slider ${size}`,
    required: required !== undefined ? required : false,
    "data-test": "slider-input-component",
    type: "range",
    min: min === undefined ? 0 : min,
    max: max === undefined ? 100 : max,
    value: value,
    onChange: e => onChange(e),
    step: step === undefined ? 0 : step,
    defaultValue: defaultValue === undefined ? 0 : defaultValue
  }));
};

export default Slider;