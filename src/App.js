import React, {useState} from 'react';
import Card from "./Components/Card";

const App = () => {
    return <div data-test="app-component" className="App">


        <Card
            color={'dark'}
            elevation={5}
            hover={true}
        >
            <h1>H1 h1</h1>
            <h2>H2 h2</h2>
            <h3>H3 h3</h3>
            <h4>H4 h4</h4>
            <h5>H5 h5</h5>
            <h6>H6 h6</h6>
            <p>p p</p>
            <p>Test Body Information</p>
        </Card>

    </div>;
};

export default App;