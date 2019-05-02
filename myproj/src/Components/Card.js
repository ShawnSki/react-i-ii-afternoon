import React, { Component } from 'react'


class Card extends Component {
    render() {
        console.log(this.props.userCard)
        return (
            <div>
                <div className='cardWrapper'>
                    <div className='cardBox'>
                    <p>{this.props.userId + 1} / {this.props.usersArr.length}</p>
                    <h2>{this.props.userIndx.name.first} {this.props.userIndx.name.last}</h2>
                    <p>From: {this.props.userIndx.city}</p>
                    <p>Job Title: {this.props.userIndx.title}</p>
                    <p>Employer: {this.props.userIndx.employer}</p>

                    </div>
                </div>
            </div>
        )

    }
}

export default Card;