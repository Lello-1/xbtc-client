import './Header.css';
import Bell from 'react-bell-icon';
import { Link } from 'react-router-dom';
import React from 'react';
import userList from '../../mock-data/user-list';
import DropdownItem from '../Dropdown-Item';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      users: userList,
      userAmount: userList.length,
      isExpanded: false
    }

    this.toggleUserList = this.toggleUserList.bind(this);
    this.removeUserList = this.removeUserList.bind(this);
  }

  toggleUserList() {
    console.log('Toggle user');
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  }

  removeUserList() {
    this.setState({ isExpanded: false })
  }

  render() {

    return (
      <div className="Header">

        {this.state.isExpanded ?
        <div className="dropdown">
          <div className="dropdown_headings">
            <p>NAME</p>
            <p>BITCOIN</p>
            <p>EMAIL</p>
            <p>COUNTRY</p>
            <p>DATE JOINED</p>
          </div>
          <div className="check_overflow">
            {this.state.users.map((item, index) => {
              if(index % 2 === 0) {
                return  <Link to={`/admin/userview/${item.id}`} style={{ textDecoration: 'none' }} onClick={this.removeUserList} >
                          <DropdownItem 
                            name={item.name} 
                            bitcoin={item.bitcoin} 
                            email={item.email} 
                            country={item.country} 
                            dateJoined={item.dateJoined} 
                            key={item.id} 
                            lineColor="light_green" 
                            lineIndex={index + 1}
                          />
                        </Link>
              } else {
                return  <Link to={`/admin/userview/${item.id}`} style={{ textDecoration: 'none' }} onClick={this.removeUserList} >
                          <DropdownItem 
                            name={item.name} 
                            bitcoin={item.bitcoin} 
                            email={item.email} 
                            country={item.country} 
                            dateJoined={item.dateJoined} 
                            key={item.id} 
                            lineColor="dark_green" 
                            lineIndex={index + 1}
                          />
                        </Link>
              }
            })}
          </div>
        </div> : null }

        <div className="darkest">
          <div className="users_dropdown" onClick={this.toggleUserList} ><strong>{this.state.userAmount}</strong> USERS</div>
          <div className="header_welcome">Deon Benade</div>
        </div>
  
        <div className="darker">
          <a href="/" className="heading">
            <div className="heading_container">
              <div className="logo_border">
                <h1>X</h1>
                <h1>BTC</h1>
              </div>
              <div className="heading_title">
                <div className="header_regular">Dash</div>
                <div className="header_bold">board</div>
              </div>
            </div>
          </a>
        </div>
  
        <div className="dark">
          <Link to="/admin/notification">
            <Bell color="#fff" active={false} animate={false} style={{
              transform: "skew(-52deg)",
              position: "absolute",
              top: "26%",
              right: "10%",
              width: "10%"
            }} />
          </Link>
        </div>
      </div>
    );

  }
}

export default Header;