import react from 'react';

import './App.css';
import Container from './components/Container'; 



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/photos/TOLogo.png" className="App-logo" alt="logo" /> 
      </header>
      <body>
        <Container />
      </body>
    </div>
  );
}

export default App;
