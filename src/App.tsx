import React, { useEffect } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';

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
      <LoginPage />
    </div>
  );
}

export default App;
