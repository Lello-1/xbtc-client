import './AdminDashboard.css';
import Sidebar from '../../components/Sidebar';
import DashboardBar from '../../components/Dashboard-Bar';
import DashboardPackage from '../../components/Dashboard-Package-Bar/DashboardPackage';
import data from '../../mock-data/admin-dashboard-data';
import packageData from '../../mock-data/package-data';

const AdminDashboard = () => {

  return (
    <div className="AdminDashboard">
      <Sidebar dashboard="active" />
      <div className="admin_dashboard_container">
        {data.map((item) => {
          return <DashboardBar bar={true} title={item.title} bitcoin={item.bitcoin} dollar={item.dollar} key={item.title} />
        })}
        <DashboardBar bar={false} title="Fixed weekly return" />

        <div className="packages_bar">
          <h3>Packages</h3>
          <div className="packages_container">
            {packageData.map((item) => {
              return <DashboardPackage title={item.title} bitcoin={item.bitcoin} dollar={item.dollar} key={item.title} />
            })}
            <div className="reinvest_block">
              <h5>Reinvest</h5>
              <p>Monday 25 June 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;