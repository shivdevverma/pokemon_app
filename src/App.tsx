import './App.css';
import Home from './Home';
import Details from './Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
