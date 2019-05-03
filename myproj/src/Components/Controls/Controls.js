import React from 'react'
import './Controls.css'

function Controls(props) {
    return (
        <div className='controls-container'>
            <button onClick={props.usersPrev}>Previous</button>
            <button onClick={props.usersNext}>Next</button>
        </div>
    )
}

export default Controls;