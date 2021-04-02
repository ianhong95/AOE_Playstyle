import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer'
import intro from './components/intro'
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Question3 from './components/Question3'
import Question4 from './components/Question4'
import Question5 from './components/Question5'
import React, { useState } from 'react';

// Find bootstrap template details on https://bootswatch.com/cyborg/

function App() {

  const [question, setQuestion] = useState(0)
  // var question = MainContainer;

  console.log(question)
  // switch(qCount) {
  //   case 0:
  //     setQuestion(qCount+1)
  //   case 1:
  //     question = Question1
  //     setQuestion(qCount+1)
  
  //   default:
  //     setQuestion(MainContainer);
  // }

  return (
    <div>
      <question />
    </div>
  );
}

export default App;
