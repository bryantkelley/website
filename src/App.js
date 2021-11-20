import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Home from './components/home';
import Header from './components/header';
import Appearances from './components/appearances';
import Advent from './components/advent';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Home />
        <Appearances />
        {new Date().getMonth() === 11 && (
          <Advent />
        )}
      </Container>
    </div>
  );
}

export default App;
