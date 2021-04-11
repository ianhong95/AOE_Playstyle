import React, { useState } from 'react'
import PropTypes from 'prop-types'


const NextButton = ({ btnText }) => {

    return (
        <button 
            type="button" 
            className="btn btn-outline-success btn-lg btn-block"
            // onClick={()=>{console.log('lol')}} 
        >hello</button>
    )

}


NextButton.defaultProps = {
    btnText: 'Begin!'
}


export default NextButton
