import './TopBar.css';
import React from 'react';
import bitcoin from '../../assets/bitcoin.png';

class TopBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="TopBar">
        <div className="first_bar">
          <div className="top_half">
            <p>Profit</p>
            <img src={bitcoin} alt="bitcoin"/>
            <p>0.14200306</p>
          </div>
          <div className="bottom_half">
            <p>Weekly Profit</p>
            <img src={bitcoin} alt="bitcoin"/>
            <p>0.00200306</p>
          </div>
        </div>
        <div className="second_bar">
          <div className="top_half">
            <p>Deposit</p>
            <img src={bitcoin} alt="bitcoin"/>
            <p>0.00200306</p>
          </div>
        </div>
        <div className="third_bar">
          <div className="top_half">
            <p>Balance</p>
            <img src={bitcoin} alt="bitcoin"/>
            <p>1.00000000</p>
          </div>
          <div className="bottom_half">
            <p>Growth</p>
            <p>29.53%</p>
          </div>
        </div>
        <div className="fourth_bar">
          <div className="top_half">
            <p>Withdraw</p>
            <img src={bitcoin} alt="bitcoin"/>
            <p>0.15229000</p>
          </div>
          <div className="bottom_half">
            <p>ROI</p>
            <p>15.23%</p>
          </div>
        </div>
      </div>
    );

  }

}

export default TopBar;