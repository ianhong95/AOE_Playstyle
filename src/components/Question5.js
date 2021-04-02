import React from 'react'
import NextButton from './NextButton'
import Header from './Header'
import SubHeader from './SubHeader'
import AnswerButton from './AnswerButton'

const Question5 = () => {
    return (
        <div class='jumbotron'>
            <Header title='Question 5' />
            <SubHeader subText='What is your favourite defensive structure?' />
            <AnswerButton Answer='Walls'/>
            <AnswerButton Answer='Castle' />
            <AnswerButton Answer='Random Buildings' />
            <AnswerButton Answer='Tower' />
            <AnswerButton Answer='Bombard Tower' />
            <AnswerButton Answer='I just fight with vils' />
            <hr/>
            {/* <div>
                <NextButton btnText='Next' />
            </div> */}
            
        </div>
    )
}

export default Question5