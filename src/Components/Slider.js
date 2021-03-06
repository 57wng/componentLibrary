import React from 'react';

const Slider = ({defaultValue, value, onChange, step, min, max, label, required, size, customClass}) => {

    return (
        <div className={`slider-container vertical ${
            customClass === undefined ? '' : customClass
        }`} data-test={"slider-component"}>
            <p>{label} <span>{required !== undefined && required === true ? "*" : ""}</span></p>
            <input
                className={`slider ${size}`}
                required={required !== undefined ? required : false}
                data-test={"slider-input-component"}
                type="range"
                min={min === undefined ? 0 : min}
                max={max === undefined ? 100 : max}
                value={value}
                onChange={(e) => onChange(e)}
                step={step === undefined ? 0 : step}
                defaultValue={defaultValue === undefined ? 0 : defaultValue}
            >
            </input>
        </div>
    )
}

export default Slider;