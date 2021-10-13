import React, { useEffect, useState } from 'react';
import Button from './Components/Button';
import Input from './Components/Input';
import Textarea from './Components/Textarea';
import Modal from './Components/Modal';

const App = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textarea, setTextarea] = useState('');

  const buttonTest = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div data-test="app-component" className="App">
      <Button value={'Button Text'} color={'primary'} onClick={() => buttonTest()} />
      <Button value={'Button Text'} color={'secondary'} />
      <Button value={'Button Text'} color={'success'} />
      <Button value={'Button Text'} color={'warn'} />
      <Button value={'Button Text'} color={'danger'} />
      <Input
        type={'text'}
        placeholder={'Text'}
        value={text}
        onChange={(e) => setText(e)}
        required={true}
      />
      <Input
        type={'number'}
        placeholder={'Number'}
        value={number}
        onChange={(e) => setNumber(e)}
        required={true}
      />
      <Input
        type={'email'}
        placeholder={'Email'}
        value={email}
        onChange={(e) => setEmail(e)}
        required={true}
      />
      <Input
        type={'password'}
        placeholder={'Password'}
        value={password}
        onChange={(e) => setPassword(e)}
        required={true}
      />
      <Textarea
        type={'password'}
        placeholder={'Text Area'}
        rows={10}
        value={textarea}
        onChange={(e) => setTextarea(e)}
        required={true}
      />

      <Modal value={'Modal Open'}>
        <Input
          type={'text'}
          placeholder={'Name'}
          value={text}
          onChange={(e) => setText(e)}
          required={true}
        />
        <Button customClass={'submit-button'} value={'Submit'} color={'success'} />
      </Modal>
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
