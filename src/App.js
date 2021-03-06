import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer'
import Question1 from './components/Question1'
import Finish from './components/Finish'
import React, { useState, useEffect, useRef } from 'react';

// Find bootstrap template details on https://bootswatch.com/cyborg/

function App() {

  const [question, setQuestion] = useState(0)
  const [notClicked, setNotClicked] = useState(true)

  const [selected, setSelected] = useState([])
  const prevSelRef = useRef()
  useEffect(() => {
    prevSelRef.current = selected
  })
  const prevSelected = prevSelRef.current

  var display = <MainContainer />

  var answers = []
  const answers1 = ['Aggressive', 'Booming (Economical)']
  const answers2 = ['1v1', 'Team games']
  const answers3 = ['Infantry', 'Siege', 'Cavalry', 'Monks', 'Archers', 'Gunpowder']
  const answers4 = ['Economy', 'Military', 'Discount', 'Defense']
  const answers5 = ['Walls', 'Castle', 'Random Buildings', 'Tower', 'Bombard Tower', 'I just fight with vils']

  switch(question) {
    case 1:
      console.log('Loading question 1')
      display = <Question1 
        title='Question 1'
        subText='Select your favourite playstyle'
        answers={answers1}
        />
      answers = answers1
      break;
    case 2:
      console.log('Loading question 2')
      display = <Question1
        title='Question 2'
        subText='What scale of games do you like to play?'
        answers={answers2}
        />
      answers = answers2
      break;
    case 3:
      console.log('Loading question 3')
      display = <Question1
        title='Question 3'
        subText='Select your favourite unit type:'
        answers={answers3}
        />
      answers = answers3
      break;
    case 4:
      console.log('Loading question 4')
      display = <Question1
        title='Question 4'
        subText='What kind of civ bonuses do you like?'
        answers={answers4}
        />
      answers = answers4
      break;
    case 5:
      console.log('Loading question 5')
      display = <Question1
        title='Question 5'
        subText='What is your favourite defensive structure?'
        answers={answers5}
        />
      answers = answers5
      break;
    case 6:
      console.log('Done!')
      display = <Finish />
      break;
    case 7:
      setSelected([])
      setQuestion(0)
      display = <MainContainer />
      break;
  }

  const goBack = () => {
    if (question > 1) {
      setSelected(selected.pop())
      setQuestion(question-1)
      setNotClicked(true)
    } else {
      setQuestion(0)
    }
  }

  const goForward = () => {
    if (question < 6) {
      setQuestion(question + 1)
      setNotClicked(true)
    } else if (question===6)  {
      setQuestion(question + 1)
      setNotClicked(false)
    } else  {
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

  // Need separate states for answers within a question and answers between questions
  function selectAnswer (answerList, selectedAnswer) {
    if (selected.includes(selectedAnswer)) {
      return null
    } else if (answerList.some(item => selected.includes(item)) & !selected.includes(selectedAnswer)) {
      setSelected(selected.pop())
      setSelected([...selected, selectedAnswer])
    } else  {
      setSelected([selected,selectedAnswer])
    }
  }

  return (
      <div className='jumbotron cttext'>

        { display }

        {answers.map(answer =>(
          <button type="button" 
          className="btn btn-outline-primary"
          onClick={() => {
            selectAnswer(answers, answer)
            setNotClicked(false)
          }}>{answer}</button>))}

        <p>{selected}</p>

        <hr></hr>

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
              disabled={question===0 || question===6 ? false : notClicked}
          >{setBtnText()}</button>
      </div>

  );
}

export default App;
