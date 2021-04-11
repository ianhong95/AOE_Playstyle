import React from 'react'
import NextButton from './NextButton'
import Header from './Header'
import SubHeader from './SubHeader'
import AnswerButton from './AnswerButton'

const answers = ['Aggressive', 'Booming (Economical)']

const Question1 = () => {

    return (
        <div className='jumbotron cttext'>
            <Header title='Question 1' />
            <SubHeader subText='Select your preferred style' />
            {answers.map(answer =>(
                <AnswerButton Answer={answer}/>
            ))}
            <hr/>
        </div>
    )
}

export default Question1
