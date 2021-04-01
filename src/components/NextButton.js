import React, { useState } from 'react'
import PropTypes from 'prop-types'


const NextButton = ({ btnText }) => {
    return (
        <button 
            type="button" 
            class="btn btn-outline-success btn-lg btn-block"
            onClick={() => this.setVisible(false)}
        >{btnText}</button>
    )
}


NextButton.defaultProps = {
    btnText: 'Begin!'
}


export default NextButton
