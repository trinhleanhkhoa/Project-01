import React, { Component } from 'react';
import './Tooltip.css';

export default class Tooltip extends Component {
    constructor() {
      super();
      this.state = {
        show: false
      }
      this.handleMouseIn = this.handleMouseIn.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleMouseIn() {
      this.setState({ show: true });
    }
  
    handleMouseOut() {
      this.setState({ show: false });
    }
    handleClick() {
        this.setState({ show: !this.state.show });
      }
    
    render() {
      return (
        <div className='tooltip'
            onMouseOver={this.handleMouseIn}
            onMouseLeave={this.handleMouseOut}
            onClick={this.props.trigger === 'click' ? this.handleClick : false}
        >
          {this.state.show &&
              <div className='tooltip-content top'>
                  {this.props.content}
              </div>
          }
          {this.props.children}
        </div>
      );
    }
  }