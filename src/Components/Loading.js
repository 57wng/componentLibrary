import React from 'react';

const Loading = ({ customClass }) => {
  return (
    <div

      data-test={'loading-component'}
      className={`loading-container ${customClass === undefined ? '' : customClass}`}
    >
      <svg className="loader" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle className="internal-circle" cx="60" cy="60" r="30"></circle>
        <circle className="external-circle" cx="60" cy="60" r="50"></circle>
      </svg>
    </div>
  );
};

export default Loading;
