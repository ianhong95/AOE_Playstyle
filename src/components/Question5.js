import React from 'react'
import NextButton from './NextButton'
import Header from './Header'
import SubHeader from './SubHeader'
import AnswerButton from './AnswerButton'

const answers = ['Walls', 'Castle', 'Random Buildings', 'Tower', 'Bombard Tower', 'I just fight with vils']

const Question5 = () => {
    return (
        <div class='jumbotron cttext'>
            <Header title='Question 5' />
            <SubHeader subText='What is your favourite defensive structure?' />
            {answers.map(answer =>(
                <AnswerButton Answer={answer}/>
            ))}
            <hr/>          
        </div>
    )
}

export default Question5