import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Header from './components/header';
import { Container } from 'react-bootstrap';
import Appearances from './components/appearances';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Home />
        <Appearances />
      </Container>
    </div>
  );
}

export default App;
