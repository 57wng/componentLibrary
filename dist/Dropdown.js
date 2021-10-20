import React from "react";

const Dropdown = ({
  label,
  value,
  options,
  setState,
  customClass
}) => {
  if (options !== undefined) {
    options = ["", ...options];
  }

  return /*#__PURE__*/React.createElement("div", {
    "data-test": 'dropdown-component',
    className: `dropdown-container ${customClass === undefined ? '' : customClass}`
  }, /*#__PURE__*/React.createElement("label", {
    "data-test": 'label-field',
    className: `label ${value !== "" && value !== undefined ? "filled-label" : ""}`
  }, label !== undefined && label), /*#__PURE__*/React.createElement("div", {
    className: "inner-label"
  }, /*#__PURE__*/React.createElement("select", {
    "data-test": 'select',
    value: value,
    onChange: e => setState(e.target.value)
  }, options !== undefined && options.map((item, idx) => {
    return /*#__PURE__*/React.createElement("option", {
      value: item,
      key: idx
    }, item);
  })), /*#__PURE__*/React.createElement("span", {
    className: `underline`
  })));
};

export default Dropdown;