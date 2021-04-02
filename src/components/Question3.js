import React from 'react'
import NextButton from './NextButton'
import Header from './Header'
import SubHeader from './SubHeader'
import AnswerButton from './AnswerButton'

const Question3 = () => {
    return (
        <div class='jumbotron cttext'>
            <Header title='Question 3' />
            <SubHeader subText='Select your two favourite unit types:' />
            <AnswerButton Answer='Infantry'/>
            <AnswerButton Answer='Siege' />
            <AnswerButton Answer='Cavalry' />
            <AnswerButton Answer='Monks' />
            <AnswerButton Answer='Archer' />
            <AnswerButton Answer='Gunpowder' />
            <hr/>
            {/* <div>
                <NextButton btnText='Next' />
            </div> */}
            
        </div>
    )
}

export default Question3