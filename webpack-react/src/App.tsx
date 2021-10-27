import React, { useState, ReactNode, ReactElement } from 'react';

const Container = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return (
    <div className="container">
      {children}
    </div>
  )
};

type HeaderProps = {
  title: string;
  subtitle: string;
};
const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <h2 className="header__subtitle">{subtitle}</h2>
    </header>
  );
};

const Counter = () => {

  const [ counter, setCounter ] = useState<number>(0);

  const increment = () => setCounter(prev => prev + 1);
  const decrement = () => setCounter(prev => prev - 1);

  return (
    <div>
      <header>
        <p>Current count is:</p>
        <h3>{counter}</h3>
      </header>
      <button
        className="btn"
        onClick={increment}
      >
        +1
      </button>
      <button
        className="btn"
        onClick={decrement}
      >
        -1
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Container>
      <Header
        title="Welcome To React + TypeScript + Webpack"
        subtitle="Let's see how high can you count..."
      />
      <Counter />
    </Container>
  );
};

export default App;
