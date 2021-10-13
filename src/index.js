import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Style/import.scss";

const root = document.getElementById('root');

const renderToDOM = () => {
  ReactDOM.render(<App />, root);
};
renderToDOM();
export { renderToDOM };
