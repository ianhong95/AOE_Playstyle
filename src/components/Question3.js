import React from 'react'
import NextButton from './NextButton'
import Header from './Header'
import SubHeader from './SubHeader'
import AnswerButton from './AnswerButton'

const answers = ['Infantry', 'Siege', 'Cavalry', 'Monks', 'Archers', 'Gunpowder']

const Question3 = () => {
    return (
        <div class='jumbotron cttext'>
            <Header title='Question 3' />
            <SubHeader subText='Select your two favourite unit types:' />
            {answers.map(answer =>(
                <AnswerButton Answer={answer}/>
            ))}
            <hr/>
        </div>
    )
}

export default Question3