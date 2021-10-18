import React from "react";

const Dropdown = ({ label, value, options, setState }) => {
  if (options !== undefined) {
    options = ["", ...options];
  }

  return (
    <div className={"dropdown-container"}>
      <label className={`label ${value !== "" ? "filled-label": ""}`}>{label !== undefined && label}</label>
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

// {/* <select onChange={(event) => setState(event)}>
//                     {options !== undefined && options.map((item, idx) => {
//                         return (
//                             <option value={item} key={idx}>{item}</option>
//                         )
//                     })}
//                 </select> */}
export default Dropdown;
