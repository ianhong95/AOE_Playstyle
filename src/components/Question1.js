import React from 'react'
import NextButton from './NextButton'
import Header from './Header'
import SubHeader from './SubHeader'
import AnswerButton from './AnswerButton'

const Question1 = () => {
    return (
        <div class='jumbotron cttext'>
            <Header title='Question 1' />
            <SubHeader subText='Select your preferred style' />
            <AnswerButton Answer='Aggressive'/>
            <AnswerButton Answer='Booming (Economical)' />
            <hr/>
            {/* <div>
                <NextButton btnText='Next' />
            </div> */}
            
        </div>
    )
}

export default Question1
