import React from 'react'

const ProgBar = () => {
    return (
        <div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
            </div>
        </div>
    )
}

export default ProgBar
