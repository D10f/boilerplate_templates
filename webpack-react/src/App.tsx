import React from 'react';

import Counter from './Counter';
import image from './lvm.png';
import logo from './logo.svg';

const App = () => {

  return (
    <>
      <h1>Hello World!</h1>
      <img src={image} width="300" />
      <img src={logo} width="300" />
      <Counter />
    </>
  );
};

export default App;
