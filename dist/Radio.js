import React, { useState } from 'react';

const Radio = ({
  options,
  name,
  inline,
  onChange,
  state,
  customClass
}) => {
  return options !== undefined && /*#__PURE__*/React.createElement("div", {
    "data-test": "radio-component",
    className: `radio-container  ${inline ? 'inline' : ''}  ${customClass === undefined ? '' : customClass}`
  }, options.map((input, idx) => {
    return /*#__PURE__*/React.createElement("div", {
      className: `radio-input ${inline ? 'inline' : ''}`,
      key: idx
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: idx,
      "data-test": "radio-intput-component"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      value: 'value',
      onClick: e => onChange(e.target.value),
      className: `${input}`,
      id: idx,
      name: name !== undefined ? name : 'no-value',
      value: input
    }), /*#__PURE__*/React.createElement("div", {
      className: 'circle'
    }, /*#__PURE__*/React.createElement("div", {
      className: `${input} ${state === input && 'checked'}`
    })), input));
  }));
};

export default Radio;