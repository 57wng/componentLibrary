import React from "react";

const Radio = ({ input1, input2, input3 }) => {
  return (
    <div data-test={"radio-component"} className="radio-container">

      <div class="containerOuter">
        <div class="container">
          <input type="radio" class="hidden" id="input1" name="inputs" />
          <label class="entry" for="input1">
            <div class="circle"></div>
            <div class="entry-label">{input1}</div>
          </label>
          <input type="radio" class="hidden" id="input2" name="inputs" />
          <label class="entry" for="input2">
            <div class="circle"></div>
            <div class="entry-label">{input2}</div>
          </label>
          <input type="radio" class="hidden" id="input3" name="inputs" />
          <label class="entry" for="input3">
            <div class="circle"></div>
            <div class="entry-label">{input3}</div>
          </label>
          <div class="highlight"></div>
          <div class="overlay"></div>
        </div>
      </div>

      <svg className="radio" width="0" height="0" viewBox="0 0 40 140">
        <defs>
          <mask id="holes">
            <rect x="0" y="0" width="100" height="140" fill="white" />
            <circle r="12" cx="20" cy="20" fill="black" />
            <circle r="12" cx="20" cy="70" fill="black" />
            <circle r="12" cx="20" cy="120" fill="black" />
          </mask>
        </defs>
      </svg>
    </div>
  );
};

export default Radio;
