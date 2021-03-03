import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
        <header>
            <h1 class="display-3">{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Tinder but for your AOE2 civilization!',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
