import React, {useState} from 'react';
import Slider from './Components/Slider';
import Input from './Components/Input';

const App = () => {
  const [state, setState] = useState();
    return <div data-test="app-component" className="App">
        <Slider
            customClass={"custom-slider-class"}
            defaultValue={30}
            size={"md"}
            label={"Slider"}
            value={state}
            onChange={(e) => setState(e.target.value)}
            step={4}
            min={0}
            max={100}
        />
        <Input value={state} onChange={(e) => setState(e)} placeholder={"Slider"}/>
    </div>;
};

export default App;
