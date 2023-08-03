import './Sidebar.css';
import { logout } from "../../actions/session";
import { connect } from "react-redux";

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const Sidebar = ({ dashboard, transactions, mastersheet, logout }) => {
  return (
    <div className="Sidebar">
      <a className={`dashboard_link ${dashboard}`} href="/admin/dashboard">Dashboard</a>
      <a className={`${mastersheet}`} href="/admin/central-control-page">Central-Control</a>
      <a className={`${transactions}`} href="/admin/transactions">Transactions</a>
      <a className="logout" onClick={logout}>Logout</a>

      <footer>
        <small>&copy; Copyright 2020 XBTC. All Rights Reserved</small>
      </footer>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);