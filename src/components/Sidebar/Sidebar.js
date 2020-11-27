import './Sidebar.css';

const Sidebar = ({ dashboard, transactions, mastersheet }) => {
  return (
    <div className="Sidebar">
      <a className={`dashboard_link ${dashboard}`} href="/admin/dashboard">Dashboard</a>
      <a className={`${mastersheet}`} href="/admin/mastersheet">Mastersheet</a>
      <a className={`${transactions}`} href="/admin/transactions">Transactions</a>
      <a href="/logout">Logout</a>

      <footer>
        <small>&copy; Copyright 2020 XBTC. All Rights Reserved</small>
      </footer>
    </div>
  );
}

export default Sidebar;