import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer'
import Question1 from './components/Question1'
import { useState } from 'react'

// Find bootstrap template details on https://bootswatch.com/cyborg/

function App() {

  // console.log(MainContainer.NextButton.state)

  return (
    <div>
      <MainContainer />
      {/* <Question1 /> */}
    </div>
  );
}

export default App;
