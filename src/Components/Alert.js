import React from "react";

export const Alert = ({
  options,
  title,
  severity,
  onClose,
  onChange,
  customClass,
}) => {
  return (
    <div
      data-test={"alert-component"}
      className={`alert-container ${
        customClass === undefined ? "" : customClass
      }`}
    >
      <div className="close"></div>
    </div>
  );
};

export default Alert;
