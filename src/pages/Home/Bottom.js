import React, { Component } from 'react'
import './Bottom.scss'

export default class Bottom extends Component {
  render() {
    return (
      <div>
        Experience:
        <div className='job'>I worked at this place</div>
        <div className='job'>And another place</div>
        <div className='job'>And yet other places</div>
      </div>
    )
  }
}
