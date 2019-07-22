import React from 'react'
import { Tooltip } from 'reactstrap'

export default class TooltipItem extends React.Component {
  state = {
    tooltipOpen: false
  }


  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  render() {
    return (
      <span>
        <a
          href={this.props.item.link}
          target="_blank"
          rel="noopener noreferrer"
          id={'Tooltip-' + this.props.id}
        >
          <i className={this.props.item.icon} aria-hidden="true" />
        </a>
        <Tooltip
          placement="bottom"
          isOpen={this.state.tooltipOpen}
          target={'Tooltip-' + this.props.id}
          toggle={this.toggle}
        >
          {this.props.item.text}
        </Tooltip>
      </span>
    )
  }
}