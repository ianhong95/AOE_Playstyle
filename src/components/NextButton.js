import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'


const NextButton = ({ btnText }) => {

    const [qCount, setQCount] = useState(0)

    // function goToNext() {
    //     console.log('previous state: ' + state)
    
    //     switch(state) {
    //         case 'start':
    //             setState('next')
    //             break;
    //         case 'next':
    //             setState('success')
    //             break;
    //         case 'success':
    //             setState('yay')
    //             break;
    //   }
    // }

    // console.log('current state: ' + state)

    return (
        <button type="button" 
            class="btn btn-outline-success btn-lg btn-block"
            onClick={() => setQCount(qCount + 1)} 
        >{btnText}</button>
    )

    console.log(qCount)

}


NextButton.defaultProps = {
    btnText: 'Begin!'
}


export default NextButton
