import React from 'react';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import CounterReducer from './CounterReducer';
import ReducerSample from './ReducerSample';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div>
      <Greetings name="Nams" onClick={onClick} />;
      <Counter />
      ==============
      <CounterReducer />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />
    </div>
  );
};

export default App;
