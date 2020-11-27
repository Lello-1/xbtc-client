import './DropdownItem.css';
import React from 'react';

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {

    return (
      <div className={`DropdownItem ${this.props.lineColor}`}>
        <p>{this.props.lineIndex}</p>
        <p>{this.props.name}</p>
        <p>{this.props.bitcoin}</p>
        <p>{this.props.email}</p>
        <p>{this.props.country}</p>
        <p>{this.props.dateJoined}</p>
      </div>
    );

  }
}

export default DropdownItem;