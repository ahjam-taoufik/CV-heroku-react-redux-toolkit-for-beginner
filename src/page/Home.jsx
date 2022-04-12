import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const count = useSelector((state) =>{
      if(state.count===0){
        return 'zero'
      }
      
      return state.count;
     });


  const showCounter = useSelector((state) => state.chowCounter);

  console.log(showCounter);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: 'INCREASE', payload: { val: 1 } });
  };

  const decrease = () => {
    dispatch({ type: 'DECREASE', payload: { val: 1 } });
  };

    const toggleCounter = () => {
    dispatch({ type: 'TOGGLE_COUNTER' });
    };


  return (
    <>
      <div>Home Page</div>
      <button onClick={toggleCounter}>toggle</button>
      {showCounter && (
        <div>
          <p>{count}</p>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
      )}
    </>
  );
};

export default Home;
