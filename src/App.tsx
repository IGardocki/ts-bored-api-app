import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { ActivityInfo } from './components/ActivityInfo';
import { useEffect, useState } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { activityState } from './components/recoil/atoms';



function App(): JSX.Element {


  const [activity, setActivity] = useRecoilState(activityState);

  useEffect(() => {
    fetch('http://www.boredapi.com/api/activity/')
      .then(res => res.json())
      .then(data => setActivity(data))
  }, [])

  return (
    // <RecoilRoot>
    <div className="App" >
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
    // </RecoilRoot>
  );
}

export default App;
