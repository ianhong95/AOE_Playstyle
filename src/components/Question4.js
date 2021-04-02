import React from 'react'
import NextButton from './NextButton'
import Header from './Header'
import SubHeader from './SubHeader'
import AnswerButton from './AnswerButton'

const Question4 = () => {
    return (
        <div class='jumbotron'>
            <Header title='Question 4' />
            <SubHeader subText='What kind of civ bonuses do you like?' />
            <AnswerButton Answer='Economy'/>
            <AnswerButton Answer='Military' />
            <AnswerButton Answer='Discount' />
            <AnswerButton Answer='Defense' />
            <hr/>
            {/* <div>
                <NextButton btnText='Next' />
            </div> */}
            
        </div>
    )
}

export default Question4