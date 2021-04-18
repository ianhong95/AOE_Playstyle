import React from 'react'
import PropTypes from 'prop-types'


const SubHeader = ({ subText }) => {
    return (
        <h3>
            <small className='text-muted'>{subText}</small>
        </h3>
    )
}


SubHeader.defaultProps = {
    subText: 'This is a matchmaking tool to find the civilization that best suits your playstyle! Answer a series of questions to determine your recommended civlization.'
}

export default SubHeader
