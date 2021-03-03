import React from 'react'
import Header from './Header'
import NextButton from './NextButton'
import SubHeader from './SubHeader'
import Text from './Text'

const MainContainer = () => {
    return (
        <div class="jumbotron">
            <Header />
            <SubHeader />
            <hr class="my-4"></hr>
            <Text />
            <NextButton />
        </div>
    )
}

export default MainContainer
