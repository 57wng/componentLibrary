import React from "react";

const Dropdown = ({ label, value, options, setState, customClass }) => {
  if (options !== undefined) {
    options = ["", ...options];
  }

  return (
    <div data-test={'dropdown-component'} className={`dropdown-container ${customClass === undefined ? '' : customClass}`}>
      <label data-test={'label-field'} className={`label ${value !== "" && value !== undefined ? "filled-label": ""}`}>{label !== undefined && label}</label>
      <div className="inner-label">
        <select data-test={'select'}value={value} onChange={(e) => setState(e.target.value)}>
          {options !== undefined &&
            options.map((item, idx) => {
              return (
                <option value={item} key={idx}>
                  {item}
                </option>
              );
            })}
        </select>
        <span className={`underline`}></span>
      </div>
    </div>
  );
};

export default Dropdown;