import React, {useState} from 'react';
import Dropdown from "./Components/Dropdown";
import {Input, Alert } from "./Components";

const App = () => {
    const [state, setState] = useState();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
    })

    const {name, address} = formData;

    const change = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return <div data-test="app-component" className="App">

        {/* <Dropdown label={"Testing"} setState={(e) => setState(e)} value={state}
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
        <Input type={"text"}  placeholder={"Name"} onChange={(e) => setState(e)}/>
        <Input type={"text"} value={address} name={"address"} placeholder={"Address"} onChange={(e) => change(e)}/> */}

        <Alert
        options={[1, 2, 3]}/>
    </div>;
};

export default App;