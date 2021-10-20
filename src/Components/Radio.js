import React from 'react';

const Radio = ({ options, name, inline, onChange, state, customClass }) => {
  return (
    options !== undefined && (
      <div data-test="radio-component" className={`radio-container  ${inline ? 'inline' : ''}  ${customClass === undefined ? '' : customClass}`}>
        {options.map((input, idx) => {
          return (
            <div className={`radio-input ${inline ? 'inline' : ''}`} key={idx}>
              <label htmlFor={idx} data-test="radio-intput-component">
                <input
                  type="radio"
                  onClick={(e) => onChange(e.target.value)}
                  className={`${input}`}
                  id={idx}
                  name={name !== undefined ? name : 'no-value'}
                  value={input}
                />
                <div className={'circle'}>
                  <div className={`${input} ${state === input && 'checked'}`}></div>
                </div>
                {input}
              </label>
            </div>
          );
        })}
      </div>
    )
  );
};

export default Radio;
