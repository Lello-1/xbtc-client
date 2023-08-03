import './Transactions.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import TransactionRequest from '../../components/Transaction-Request';
import React from 'react';
import Button from '../../components/Button';

class Transactions extends React.Component {
  constructor() {
    super();
    
    this.state = {
      user: '',
      userId: '',
      unique_key: '',
      confirm: false,
      withdrawRequest: [],
      depositRequest: [],
      deposit: Boolean
    }

    this.confirmPage = this.confirmPage.bind(this);
    this.confirmButton = this.confirmButton.bind(this);
    this.editButton = this.editButton.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
    this.rejectButton = this.rejectButton.bind(this);
  }

  // Component Did Mount Method
  componentDidMount() {
    const options = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'Application/JSON'
      }
    }
    
    fetch('/admin/transaction-request', options)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      console.log()
      this.setState({
        withdrawRequest: res.mappedWithdraw,
        depositRequest: res.mappedDeposit
      });
    });
  }

  // Confirm Requests Modal
  confirmPage(firstName, userId, unique_key, deposit) {

    console.log('DEPOSIT: ', deposit);
    this.setState({
      user: firstName,
      userId,
      unique_key,
      deposit,
      confirm: true
     });
  }

  // Confirm button
  confirmButton() {
    let url;

    const confirmOptions = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        userId: this.state.userId,
        unique_key: this.state.unique_key
      }),
      headers: {
        'Content-Type': 'Application/JSON'
      }
    }

    console.log('STATE: ', this.state.deposit);
    console.log('URL: ', url);

    this.state.deposit 
    ? url = '/admin/confirm-deposit' 
    : url = '/admin/confirm-withdraw';

    fetch(url, confirmOptions)
    .then((res) => res.json())
    .then((res) => {

      this.setState({
        confirm: false,
      });

      this.componentDidMount();
    });

  }

  // Edit Button
  editButton() {
    this.setState({ confirm: false });
  }

  // Cancel Button
  cancelButton() {

    this.setState({
      confirm: false
    });
  }

  // Reject Button
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
                <Button formButton="Reject" onClick={this.rejectButton} />
                <Button formButton="Edit" onClick={this.editButton} />
                <Button formButton="Cancel" onClick={this.cancelButton} />
              </div>
            </div>
          </div> 
          :
          null}

          <div className="deposit_requests_container">
            <h3>Deposit Requests</h3>
            <div className="requests_container_deposit">
              <h6 className="deposit_field">Name</h6>
              <h6 className="deposit_field">Transaction ID</h6>
              <h6 className="deposit_field">Amount</h6>
              <h6 className="deposit_field">Confirm</h6>
            </div>
            {this.state.depositRequest.map((item) => {
                if(item.deposit) return <TransactionRequest 
                  firstname={item.firstname} 
                  userId={item.userId} 
                  unique_key={item.unique_key} 
                  txId={item.txId} 
                  amount={item.amount} 
                  key={item.unique_key} 
                  confirmPage={this.confirmPage} 
                  deposit={item.deposit}
                />
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
            {this.state.withdrawRequest.map((item) => {
              if(!item.withdraw) return <TransactionRequest 
                firstname={item.firstname} 
                userId={item.userId} 
                unique_key={item.unique_key} 
                address={item.address} 
                type={item.type} 
                amount={item.amount} 
                key={item.unique_key} 
                confirmPage={this.confirmPage} 
                isDeposit={false}
                deposit={item.deposit}
              />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Transactions;