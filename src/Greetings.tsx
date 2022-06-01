import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string; // 있어도 되고? 없어도 되고
  onClick: (name: string) => void; // 함수일 경우 아무것도 리턴하지 않는다.
};

// React.FC는 타입을 Generics 사용
const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Greetings, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>클릭</button>
      </div>
    </div>
  );
};

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
