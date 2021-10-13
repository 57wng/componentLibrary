import React, { useEffect, useState } from 'react';
import { Button } from './Components/Button';
import Input from './Components/Input';
import Textarea from './Components/Textarea';
import Modal from './Components/Modal';
import Avatar from './Components/Avatar';

const App = () => {
  const [text, setText] = useState('');

  const buttonTest = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div data-test="app-component" className="App">
      <Avatar
        customClass={'avatar-class'}
        size={'lg'}
        image={
          'https://www.participate.nyc.gov/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg'
        }
      />
      <Button value={'Button Text'} color={'primary'} onClick={() => buttonTest()} />
      <Input
        type={'text'}
        placeholder={'Text'}
        value={text}
        onChange={(e) => setText(e)}
        required={true}
      />
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>
      <h6>H6</h6>
      <p>p</p>
    </div>
  );
};

export default App;
