import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>

    <Route path='/' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>


   </Routes>
   </BrowserRouter>
  );
}

export default App;
