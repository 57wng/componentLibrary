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
      }
      ${severity !== undefined ? severity : "primary"}`}
    >
      {options !== undefined &&
        options.length > 0 &&
        options.map((alert, idx) => {
          return (
            <div className={`alert-options ${alert.severity !== undefined ? alert.severity : "primary"}`} key={idx}>
              <div className="close" data-test={"alert"}>
                <div className='option1'>
                  <div className="title">
                    {alert.title != undefined && alert.title}
                  </div>
                  <div className="body">
                    {alert.body != undefined && alert.body}
                  </div>
                </div>
                <i
                  onClick={(event) => {
                    onClose(event);
                  }}
                  className="far fa-times-circle"
                ></i>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Alert;
