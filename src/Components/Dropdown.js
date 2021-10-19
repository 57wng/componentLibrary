import React from "react";

const Dropdown = ({ label, value, options, setState, customClass }) => {
  if (options !== undefined) {
    options = ["", ...options];
  }

  return (
    <div className={`dropdown-container ${customClass === undefined ? '' : customClass}`}>
      <label className={`label ${value !== "" && value !== undefined ? "filled-label": ""}`}>{label !== undefined && label}</label>
      <div className="inner-label">
        <select value={value} onChange={(e) => setState(e.target.value)}>
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
