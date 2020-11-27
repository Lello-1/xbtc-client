import './Transactions.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import TransactionRequest from '../../components/Transaction-Request';
import depositRequest from '../../mock-data/deposit-request';
import withdrawRequest from '../../mock-data/withdraw-request';
import React from 'react';
import Button from '../../components/Button';

class Transactions extends React.Component {
  constructor() {
    super();
    
    this.state = {
      user: '',
      confirm: false
    }

    this.confirmPage = this.confirmPage.bind(this);
    this.confirmButton = this.confirmButton.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
    this.rejectButton = this.rejectButton.bind(this);
  }

  confirmPage(firstName) {

    this.setState({
      user: firstName,
      confirm: true
     });
  }

  confirmButton() {
    this.setState({
      confirm: false
    });
  }

  cancelButton() {
    this.setState({
      confirm: false
    });
  }

  rejectButton() {
    this.setState({
      confirm: false
    });
  }

  render() {

    return (
      <div className="Transactions">
        <Sidebar transactions="active" />
        <div className="transactions_container">

          {this.state.confirm ? 
          <div className="darken_background">
            <div className="confirmation_bar">
              <p>Do you <strong>confirm</strong> the completion of this transaction for <strong>{this.state.user}</strong></p>
              <div className="confirmation_button_container">
                <Button formButton="Confirm" onClick={this.confirmButton} />
                <Button formButton="Cancel" onClick={this.cancelButton} />
                <Button formButton="Reject" onClick={this.rejectButton} />
              </div>
            </div>
          </div> :

          null}

          <div className="deposit_requests_container">
            <h3>Deposit Requests</h3>
            <div className="requests_container_deposit">
              <h6 className="deposit_field">Name</h6>
              <h6 className="deposit_field">Transaction ID</h6>
              <h6 className="deposit_field">Amount</h6>
              <h6 className="deposit_field">Confirm</h6>
            </div>
            {depositRequest.map((item) => {
                if(item.isDeposit) return <TransactionRequest name={item.firstName} transactionID={item.transactionsID} amount={item.amount} key={item.name} confirmPage={this.confirmPage} isDeposit={item.isDeposit} />
              })}
          </div>
          <div className="withdraw_requests_container">
            <h3>Withdraw Requests</h3>
            <div className="requests_container_withdraw">
              <h6>Name</h6>
              <h6>Address</h6>
              <h6>Type</h6>
              <h6>Amount</h6>
              <h6>Confirm</h6>
            </div>
            {withdrawRequest.map((item) => {
              if(item.isDeposit) return <TransactionRequest name={item.firstName} address={item.address} type={item.type} amount={item.amount} confirmPage={this.confirmPage} isDeposit={false} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Transactions;