import React from 'react'
import Header from './Header'
import SubHeader from './SubHeader'

const Question1 = ({title, subText}) => {

    return (
        <div>
            <Header title={title} />
            <SubHeader subText={subText} />
            <hr/>
        </div>
    )
}

export default Question1
