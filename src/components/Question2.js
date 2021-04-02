import React from 'react'
import NextButton from './NextButton'
import Header from './Header'
import SubHeader from './SubHeader'
import AnswerButton from './AnswerButton'

const Question2 = () => {
    return (
        <div class='jumbotron'>
            <Header title='Question 2' />
            <SubHeader subText='What scale of games do you like to play?' />
            <AnswerButton Answer='1v1' />
            <AnswerButton Answer='Team games' />
            <hr/>
            <div>
                <NextButton btnText='Next' />
            </div>
            
        </div>
    )
}

export default Question2
