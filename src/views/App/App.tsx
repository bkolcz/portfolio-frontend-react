import React from 'react';
// import logo from './logo.svg';
import '../../styles/app/app.scss';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Backend address: <b>{process.env.REACT_APP_BACKEND}</b>
        </p>
      </header>
      <Login />
    </div>
  );
}

export default App;
