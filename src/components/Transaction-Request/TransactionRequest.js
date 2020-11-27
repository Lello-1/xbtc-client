import './TransactionRequest.css';
import Button from '../Button';
import { truncateString } from '../../utils/truncate';
import React from 'react';

class TransactionRequest extends React.Component {
  constructor(props) {
    super(props);

    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm() {
    this.props.confirmPage(this.props.name);
  }

  render() {

    return (
      <div className="TransactionRequest">
        {this.props.isDeposit ?
        <div className="deposit_request">
          <p>{this.props.name}</p>
          <p>{truncateString(this.props.transactionID, 15)}</p>
          <p>{this.props.amount}</p>
          <Button formButton="Confirm" onClick={this.handleConfirm} />
        </div>
        :
        <div className="withdraw_request">
          <p>{this.props.name}</p>
          <p>{truncateString(this.props.address, 10)}</p>
          <p>{this.props.type}</p>
          <p>{this.props.amount}</p>
          <Button formButton="Confirm" onClick={this.handleConfirm} />
        </div>
        }
      </div>
    );

  }

}

export default TransactionRequest;