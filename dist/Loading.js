import React from 'react';

const Loading = ({
  customClass
}) => {
  return /*#__PURE__*/React.createElement("div", {
    "data-test": 'loading-component',
    className: `loading-container ${customClass === undefined ? '' : customClass}`
  }, /*#__PURE__*/React.createElement("svg", {
    className: "loader",
    viewBox: "0 0 120 120",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "internal-circle",
    cx: "60",
    cy: "60",
    r: "30"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "external-circle",
    cx: "60",
    cy: "60",
    r: "50"
  })));
};

export default Loading; // create test component
// create blank div
// snag from code pen
// create and edit css / html
// import to import.scss
// import and add to App.js to visually/manually test
// import to Components.index.js