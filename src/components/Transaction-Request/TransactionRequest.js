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
    const { firstname, userId, unique_key, deposit } = this.props;
    this.props.confirmPage(firstname, userId, unique_key, deposit);
  }

  render() {

    return (
      <div className="TransactionRequest">
        {this.props.deposit ?
        <div className="deposit_request">
          <p>{this.props.firstname}</p>
          <p>{truncateString(this.props.txId, 15)}</p>
          <p>{this.props.amount}</p>
          <Button formButton="Confirm" onClick={this.handleConfirm} />
        </div>
        :
        <div className="withdraw_request">
          <p>{this.props.firstname}</p>
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