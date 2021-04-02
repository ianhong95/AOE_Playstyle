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
      setQuestion(0)
      display = <MainContainer />
      break;
  }

  console.log(question)

  return (
    <div>
      { display }
      <button 
            type="button" 
            className="btn btn-outline-success btn-lg btn-block"
            onClick={() =>
              setQuestion(question+1)
            }
        >Next</button>
    </div>
  );
}

export default App;
