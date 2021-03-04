import React from 'react'
import PropTypes from 'prop-types'


const Text = ( {text, alignment} ) => {
    return (
        <p style={{textAlign: 'center'}}>{text}</p>
    )
}


Text.defaultProps = {
    text: 'Click the button below to begin!',
}

export default Text
