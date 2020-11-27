import './ProfileBar.css';
import React from 'react';
import userPlaceholder from '../../assets/image_placeholder.png';

class ProfileBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {

    return (
      <div className="ProfileBar">
        <div>
          <img src={userPlaceholder} alt="placeholder"/>
        </div>
        <div className="profile_block_two">
          <h5>Lello De Luca</h5>
          <div>
            <p>United Kingdom, GBP</p>
            <p>Customer time: 11:45 (GMT) London</p>
            <p>Registered On: 01.11.2019 23:30</p>
            <p>Invested On: 02.11.2019 10:30</p>
          </div>
        </div>
        <div className="profile_block_three">
          <h5>CONTACTS</h5>
          <p>+445346 743 242</p>
          <p>lellodeluca@gmail.com</p>
        </div>
      </div>
    );

  }
}

export default ProfileBar;