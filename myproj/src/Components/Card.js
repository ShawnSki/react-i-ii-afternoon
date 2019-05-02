import React, { Component } from 'react'


class Card extends Component {
    render() {
        // console.log(this.props.userMovies)
        return (
            <div>
                <div className='cardWrapper'>
                    <div className='cardBox'>
                    <div className='cardBoxHeader'>
                        <h2>{this.props.userObject.name.first} {this.props.userObject.name.last}</h2>
                        <h2>{this.props.userCount + 1} / {this.props.usersArr.length}</h2>
                    </div>
                        <div className='cardBoxContent'>
                            <p>From: {this.props.userObject.city}</p>
                            <p>Job Title: {this.props.userObject.title}</p>
                            <p>Employer: {this.props.userObject.employer}</p>
                            <p>Favorite Movies: </p>
                            <ol>
                            {this.props.userMovies}
                            </ol>

                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default Card;