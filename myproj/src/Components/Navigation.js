import React, { Component } from 'react'

class Navigation extends Component {
    render() {
        return (
            <div className='navWrapper'>
                <div>
                    <button className='otherButtons'>{'<Previous'}</button>
                </div>
                <div className='innerBtnWrapper'>
                    <button className='innerButtons'>Edit</button>
                    <button className='innerButtons'>Delete</button>
                    <button className='innerButtons'>New</button>
                </div>
                <div>
                    <button className='otherButtons'>{'Next>'}</button>
                </div>

            </div>
        )
    }
}

export default Navigation;