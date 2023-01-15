// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
import {Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Homepage';

function App(): JSX.Element {
  // fetch('http://www.boredapi.com/api/activity/')
  // .then(res => res.json())
  // .then(data => console.log(data))

  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>       
    </div>

  );
}

export default App;
