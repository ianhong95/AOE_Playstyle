import React from 'react'
import NextButton from './NextButton'
import Header from './Header'
import SubHeader from './SubHeader'
import AnswerButton from './AnswerButton'

const answers = ['1v1', 'Team games']

const Question2 = () => {
    return (
        <div class='jumbotron cttext'>
            <Header title='Question 2' />
            <SubHeader subText='What scale of games do you like to play?' />
            {answers.map(answer =>(
                <AnswerButton Answer={answer}/>
            ))}
            <hr/>
        </div>
    )
}

export default Question2
