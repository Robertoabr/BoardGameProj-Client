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
      <SignIn />
    </div>
  );
}

export default App;
