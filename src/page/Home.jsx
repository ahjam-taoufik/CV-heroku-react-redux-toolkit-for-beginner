import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase,toggleCounter } from '../context/redux/CounterReducer';

const Home = () => {
  const dispatch = useDispatch();


  const conditionshow=(value)=>{
      if (value === 0) {
        return 'zero';
      }
      return value;
  }


  const Counter = useSelector((state) => state);


  const handleAction = (type,val) => {
     if(type==='inc'){
        dispatch(increase(val));
     }
     if(type==='dec'){
        dispatch(decrease(val));
     }
    
  };


  const toggleCounterr = () => {
    dispatch(toggleCounter() );
  };

  return (
    <>
      <div>Home Page</div>
      <button onClick={toggleCounterr}>toggle</button>

      {Counter.chowCounter && (
        <div>

          <p>{conditionshow(Counter.count)}</p>

          <button onClick={() => handleAction('inc', 1)}>+</button>

          <button onClick={() => handleAction('dec', 1)}>-</button>
        </div>
      )}
    </>
  );
};

export default Home;
