import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();


  const conditionshow=(value)=>{
      if (value === 0) {
        return 'zero';
      }
      return value;
  }


  const Counter = useSelector((state) => state);


  const handleAction = (type, number) => {
    dispatch({ type: type, payload: { val: number } });
  };

  const toggleCounter = () => {
    dispatch({ type: 'TOGGLE_COUNTER' });
  };

  return (
    <>
      <div>Home Page</div>
      <button onClick={toggleCounter}>toggle</button>
      {Counter.chowCounter && (
        <div>

          <p>{conditionshow(Counter.count)}</p>

          <button onClick={() => handleAction('INCREASE', 2)}>+</button>

          <button onClick={() => handleAction('DECREASE', 2)}>-</button>
        </div>
      )}
    </>
  );
};

export default Home;
