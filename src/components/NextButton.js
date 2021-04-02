import React, { useState } from 'react'
import PropTypes from 'prop-types'


const NextButton = ({ btnText }) => {

    const [visible, setVisible] = useState(true)

    console.log(visible)

    return (
        <button 
            type="button" 
            class="btn btn-outline-success btn-lg btn-block"
            onClick={() => 
                setVisible(!visible)
            } 
        >{visible ? btnText : "goodbye"}</button>
    )

}


NextButton.defaultProps = {
    btnText: 'Begin!'
}


export default NextButton
