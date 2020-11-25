import './Header.css';
import Bell from 'react-bell-icon';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <div className="darkest">
        <div className="users_dropdown"><strong>8</strong> USERS</div>
        <div className="header_welcome">Deon Benade</div>
      </div>

      <div className="darker">
        <a href="/" className="heading">
          <div className="heading_container">
            <div className="logo_border">
              <h1 className="logo_x">X</h1>
              <h1 className="logo_btc">BTC</h1>
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
            top: "30%",
            right: "15%"
          }} />
        </Link>
      </div>
    </div>
  );
}

export default Header;