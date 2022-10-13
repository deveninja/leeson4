import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync } from './features/auth/authActions';
import { sayHello } from './features/auth/authSlice';
import Guard from './Guard';

function App() {
  const {isFetching, isSuccess, isError, user, message} = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    (
      async () => {
        // await dispatch(registerAsync({}));
        // await dispatch(sayHello('Chammy'));
      }
    )()
  }, [])



  return (
    <>
      <Guard auth={message}>
        <h1>Mark</h1>
        <h1>Elmer</h1>
        <h1>Ronnie</h1>
        <h1>Jlord</h1>
        <h1>Chammy</h1>
        <h1>Ice</h1>
      </Guard>

      <div className="App">

      </div>
    </>
  );
}

export default App;
