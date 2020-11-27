import './UserView.css';
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import TopBar from '../../components/Top-Bar/TopBar';
import ProfileBar from '../../components/Profile-Bar/ProfileBar';
import bitcoin from '../../assets/bitcoin.png';

class UserView extends React.Component {
  constructor() {
    super();

  }

  render() {

    return (
      <div className="UserView">
        <Sidebar />
        <div className="userview_container">
          <div className="topbar_container">
            <TopBar />
          </div>
          <div className="profile_container">
            <ProfileBar />
          </div>
          <div className="package_bar_container">

            <div className="block_one">
              <h5>Finalmente Global</h5>
              <div className="upper">
                <p>Deposited</p>
                <img src={bitcoin} alt="bitcoin"/>
                <p>1.00000000</p>
              </div>
              <div className="lower">
                <p>Invested</p>
                <p>100%</p>
              </div>
            </div>

            <div className="block_two">
              <div className="upper">
                <p>Balance</p>
                <img src={bitcoin} alt="bitcoin"/>
                <p>1.14200306</p>
              </div>
              <div className="lower">
                <p>Growth</p>
                <p>29.53%</p>
              </div>
            </div>

            <div className="block_three">
              <div className="upper">
                <p>Withdraw</p>
                <img src={bitcoin} alt="bitcoin"/>
                <p>0.15229000</p>
              </div>
              <div className="lower">
                <p>ROI</p>
                <p>15.23%</p>
              </div>
            </div>

            <div className="block_four">
              <h5>MTI</h5>
              <p>Coming Soon</p>
            </div>

            <div className="block_five">
              <p>Coming Soon</p>
            </div>

            <div className="block_six">
              <p>Coming Soon</p>
            </div>

            <div className="block_seven">
              <h5>Redox Trades</h5>
              <p>Coming Soon</p>
            </div>

            <div className="block_eight">
              <p>Coming Soon</p>
            </div>

            <div className="block_nine">
              <p>Coming Soon</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default UserView;