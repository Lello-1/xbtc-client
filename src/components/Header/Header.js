import './Header.css';
import Bell from 'react-bell-icon';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import React from 'react';
import userList from '../../mock-data/user-list';
import DropdownItem from '../Dropdown-Item';

const mapStateToProps = ({ session }) => ({
  session
});

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userAmount: 0,
      isExpanded: false
    }

    this.toggleUserList = this.toggleUserList.bind(this);
    this.removeUserList = this.removeUserList.bind(this);
  }


  componentDidMount() {
    const options = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'Application/JSON'
      }
    }

    fetch('/admin/get-users', options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.mappedData);
        this.setState({ users: res.mappedData, userAmount: res.mappedData.length });
      });
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

        {this.props.session.firstname
        ? <div className="users_dropdown" onClick={this.toggleUserList} >
          <strong>{this.state.userAmount}</strong> USERS
        </div>
        : null}
          
          <div className="header_welcome">{
            this.props.session.firstname
            ? this.props.session.firstname + ' ' + this.props.session.lastname
            : ''
          }</div>
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
          {this.props.session.firstname
          ? <Link to="/admin/notification">
              <Bell color="#fff" active={false} animate={false} style={{
                transform: "skew(-52deg)",
                position: "absolute",
                top: "26%",
                right: "10%",
                width: "10%"
              }} />
            </Link>
          : null}

        </div>
      </div>
    );

  }
}

export default connect(mapStateToProps)(Header);