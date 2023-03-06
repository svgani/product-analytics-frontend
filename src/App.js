import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import FormEvent from './components/FormEvent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetCount from './events/CountEvent';

function App() {
  return (
    <div className='App'>
      <div className="header">
        <h1>
          <a className="link" href="/">Product Analytics</a>
        </h1>
      </div>
      <FormEvent />
        <Routes>
          <Route exact path="/getCount/*" element={<GetCount/>} />
        </Routes>
    </div>
  );
}

export default App;
