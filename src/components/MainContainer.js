import React from 'react'
import Header from './Header'
import NextButton from './NextButton'
import SubHeader from './SubHeader'
import Text from './Text'

const MainContainer = () => {
    return (
        <div className="jumbotron">
            <Header />
            <SubHeader />
            <hr className="my-4"></hr>
            <Text />
        </div>
    )
}

export default MainContainer
