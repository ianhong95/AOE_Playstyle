import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer'
import Question1 from './components/Question1'
import React, { useState } from 'react';

// Find bootstrap template details on https://bootswatch.com/cyborg/

function App() {

  const [visible, setVisible] = useState(true);

  return (
    <div>
      {/* <MainContainer /> */}
      {{visible} ? <Question1 /> : null}
    </div>
  );
}

export default App;
