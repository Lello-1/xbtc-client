import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <a className="dashboard_link" href="/admin/dashboard">Dashboard</a>
      <a href="/admin/mastershee">Mastersheet</a>
      <a href="/admin/transactions">Transactions</a>
      <a href="/logou">Logout</a>

      <footer>
        <small>&copy; Copyright 2020 XBTC. All Rights Reserved</small>
      </footer>
    </div>
  );
}

export default Sidebar;