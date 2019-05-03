import React from 'react'
import './card.css'


function Card(props) {

    return (
        <div className='card-container'>
            <div className='counter-nums'>
                <h1>{props.usersPageNum + 1}/25</h1>
            </div>
            <div className='name-container'>
                <h1>{props.userInfo.name.first} {props.userInfo.name.last}</h1>
                <p>From: {props.userInfo.country}</p>
                <p>Job Title: {props.userInfo.title}</p>
                <p>Employer: {props.userInfo.employer}</p>
                <p>Favorite Movies:</p>
                <ol>
                    {props.movieList}
                </ol>
            </div>
        </div>
    )
}

export default Card;