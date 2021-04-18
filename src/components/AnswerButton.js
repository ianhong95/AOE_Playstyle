import React, { useState, useContext } from 'react'
import AnswerContext from '../context/AnswerContext'

const AnswerButton = ( { Answer }) => {

    return (
        <button type="button" 
        class="btn btn-outline-primary"
        onClick={() => {}}
        >{Answer}</button>
    )
}

AnswerButton.defaultProps = {
    isClicked: false
}

export default AnswerButton
