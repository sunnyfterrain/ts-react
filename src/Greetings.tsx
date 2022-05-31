import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string; // 있어도 되고? 없어도 되고
};

// React.FC는 타입을 Generics 사용
const Greetings = ({ name, mark }: GreetingsProps) => {
  return (
    <div>
      Greetings, {name} {mark}
    </div>
  );
};

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
