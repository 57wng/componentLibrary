import React from 'react';

const Avatar = ({
  image,
  size,
  customClass
}) => {
  return /*#__PURE__*/React.createElement("div", {
    "data-test": 'avatar-component',
    className: `avatar-container ${customClass === undefined ? '' : customClass}`
  }, /*#__PURE__*/React.createElement("img", {
    src: image === undefined ? 'https://57-wing-spark.s3.us-east-2.amazonaws.com/defaultProfile.jpg' : image,
    alt: image === undefined ? 'https://57-wing-spark.s3.us-east-2.amazonaws.com/defaultProfile.jpg' : image,
    className: `${size === undefined ? 'lg' : size}`
  }));
};

export default Avatar;