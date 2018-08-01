import React, { Component } from 'react';


class Button extends React.Component {
    render () {
      return <button type="button" class="btn btn-primary" onClick={this.props.handler}>Click me</button>
    }
}

export default Button;