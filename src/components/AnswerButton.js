import React from 'react'

const AnswerButton = ( { Answer }, { isClicked }) => {
    return (
        <button type="button" 
            class="btn btn-outline-primary">{Answer}</button>
    )
}

AnswerButton.defaultProps = {
    isClicked: false
}

export default AnswerButton
