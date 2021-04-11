import React from 'react'
import NextButton from './NextButton'
import Header from './Header'
import SubHeader from './SubHeader'
import AnswerButton from './AnswerButton'

const answers = ['Economy', 'Military', 'Discount', 'Defense']

const Question4 = () => {
    return (
        <div class='jumbotron cttext'>
            <Header title='Question 4' />
            <SubHeader subText='What kind of civ bonuses do you like?' />
            {answers.map(answer =>(
                <AnswerButton Answer={answer}/>
            ))}
            <hr/>
        </div>
    )
}

export default Question4