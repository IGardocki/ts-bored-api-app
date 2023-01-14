import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function App(): JSX.Element {
  // fetch('http://www.boredapi.com/api/activity/')
  // .then(res => res.json())
  // .then(data => console.log(data))

  return (
    <div className="App" >
      <Container fluid>
        <h1>
          Are you bored?? You came to the right place!
        </h1>
        <Form>

          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group> */}
        </Form>
      </Container>



      {/* <Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Button>Test Button</Button>
      </Container> */}
    </div>

  );
}

export default App;
