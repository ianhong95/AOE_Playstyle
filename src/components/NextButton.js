import React from 'react'
import PropTypes from 'prop-types'


const NextButton = ({ btnText }) => {
    return (
        <button type="button" class="btn btn-outline-primary">{btnText}</button>
    )
}


NextButton.defaultProps = {
    btnText: 'Begin!'
}


export default NextButton
