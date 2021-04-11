import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer'
import intro from './components/intro'
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Question3 from './components/Question3'
import Question4 from './components/Question4'
import Question5 from './components/Question5'
import Finish from './components/Finish'
import NextButton from './components/NextButton'
import React, { useState } from 'react';

// Find bootstrap template details on https://bootswatch.com/cyborg/

function App() {

  const chosen = ['a','b','c']
  const [question, setQuestion] = useState(0)
  var display = <MainContainer />

  switch(question) {
    case 1:
      console.log('Loading question 1')
      display = <Question1 />
      break;
    case 2:
      console.log('Loading question 2')
      display = <Question2 />
      break;
    case 3:
      console.log('Loading question 3')
      display = <Question3 />
      break;
    case 4:
      console.log('Loading question 4')
      display = <Question4 />
      break;
    case 5:
      console.log('Loading question 5')
      display = <Question5 />
      break;
    case 6:
      console.log('Done!')
      display = <Finish />
      break;
    case 7:
      setQuestion(0)
      display = <MainContainer />
      break;
  }

  const goBack = () => {
    if (question > 1) {
      setQuestion(question-1)

    } else {
      setQuestion(0)
    }
  }

  const goForward = () => {
    if (question < 7) {
      setQuestion(question + 1)
    } else {
      setQuestion(0)
    }
  }

  const setBtnText = () => {
    if (question === 0) {
      return 'Begin';
    } else if (question > 0 & question < 6) {
      return 'Next';
    } else if (question === 6) {
      return 'Finish';
    } else {
      return null;
    }
  }

  console.log(question)

  return (
    <div>
      { display }
      {/* <NextButton /> */}
      <button 
            type="button" 
            className="btn bbtn btn-outline-success btn-lg btn-block"
            onClick={goBack}
            disabled={question===0}
        >Back</button>
      <button 
            type="button" 
            className="btn btn-outline-success btn-lg btn-block nbtn"
            onClick={goForward}
        >{setBtnText()}</button>
      {chosen.map(choice => (
        <>{choice}</>
      ))}
    </div>
  );
}



export default App;
