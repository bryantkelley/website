import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Header from './components/header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
