import React, { useEffect } from 'react';
import './App.css';
import SignIn from './pages/SignIn';

function App() {
  useEffect(() => {
    fetch('/test')
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Board Game App</h1>
      <SignIn />
    </div>
  );
}

export default App;
