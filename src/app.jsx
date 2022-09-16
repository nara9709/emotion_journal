import * as React from 'react';
import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
