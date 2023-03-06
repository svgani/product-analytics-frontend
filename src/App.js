import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import FormEvent from './components/FormEvent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetCount from './events/CountEvent';

// var count = 0;

// async function getCount() {
//   await CurrentDate.test().then(function(value) {
//     console.log("Promise: "+value)
//     setCount(value)
//   });
//   console.log("testing "+count)
// }

// class App extends Component {
  // state = { counter: 0 };

function App() {
  // render() {

  // let {isLoggedIn} = true;

  //   const renderAuthButton = () => {
  //     if (isLoggedIn) {
  //       return <button>Logout</button>;
  //     } else {
  //       return <button>Login</button>;
  //     }
  //   }

  // const [count, setCount] = useState('');

  // async function getCount() {
  //   await CurrentDate.test().then(function(value) {
  //     console.log("Promise: "+value)
  //     setCount(value)
  //   });
  // }

  return (
    <div className='App'>
      <div className="header">
        <h1>
          <a className="link" href="/">Product Analytics</a>
        </h1>
        {/* <p>{count}</p> */}
      </div>
      {/* <button onClick={getCount}>Click Me</button> */}
      {/* <button onClick={CurrentDate.test1}>Don't Click Me</button> */}
      <FormEvent />
      {/* <Router> */}
        <Routes>
          {/* <Route exact path="/" element={<FormEvent/>} /> */}
          <Route exact path="/getCount/*" element={<GetCount/>} />
          {/* <Route exact path=":sd" element={<GetCount/>} /> */}
        </Routes>
      {/* </Router> */}

    </div>
  );
}

export default App;
