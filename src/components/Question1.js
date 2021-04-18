import React from 'react'
import NextButton from './NextButton'
import Header from './Header'
import SubHeader from './SubHeader'
import AnswerButton from './AnswerButton'

const Question1 = ({title, subText, answers}) => {

    return (
        <div>
            <Header title={title} />
            <SubHeader subText={subText} />
            {/* {answers.map(answer =>(
                <button type="button" 
                class="btn btn-outline-primary"
                onClick={() => {}}
            >{answer}</button>
            ))} */}
            <hr/>
        </div>
    )
}

export default Question1
