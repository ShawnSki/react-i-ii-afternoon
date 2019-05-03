import React from 'react'
import './card.css'

function Card(props) {
    return (
        <div className='card-container'>
            <div className='counter-nums'>
                <h1>{props.usersPageNum + 1}/25</h1>
            </div>
            <div className='name-container'>
                <h1>{props.usersNameFirst} {props.usersNameLast}</h1>
                <p>From: {props.usersFrom}</p>
                <p>Job Title: {props.usersTitle}</p>
                <p>Employer: {props.usersEmployer}</p>
                <p>Favorite Movies:</p>
                <ol>
                    
                </ol>
            </div>
        </div>
    )
}

export default Card;