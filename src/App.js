 import './App.css';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import React from 'react';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div>
            <Header />
            <Home  />
          </div>
        }></Route>
        <Route path='/Cart' element = {
          <div>
            <Header />
            <Cart />
          </div>
        }></Route>
      </Routes>
    </Router>
  );
}

export default App;
