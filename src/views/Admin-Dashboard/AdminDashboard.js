import './AdminDashboard.css';
import Sidebar from '../../components/Sidebar';
import DashboardBar from '../../components/Dashboard-Bar';
import DashboardPackage from '../../components/Dashboard-Package-Bar/DashboardPackage';
import { connect } from "react-redux";
import { logout } from "../../actions/session";
import { useEffect, useState } from 'react';

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const AdminDashboard = () => {
  const [dataArr, setDataArr] = useState([]);
  const [packageArray, setPackageArray] = useState([]);

  const options = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  useEffect(() => {
    fetch('/admin/dashboard-data', options)
      .then((res) => res.json())
      .then((res) => {
        setPackageArray(res.packageData);
        setDataArr(res.dashboardArray);
      })
  }, []);

  return (
    <div className="AdminDashboard">
      <Sidebar dashboard="active" />
      <div className="admin_dashboard_container">
        {dataArr.map((item) => {
          return <DashboardBar bar={true} title={item.title} bitcoin={item.bitcoin} dollar={item.dollar} key={item.title} />
        })}
        <DashboardBar bar={false} title="Fixed weekly return" />

        <div className="packages_bar">
          <h3>Packages</h3>
          <div className="packages_container">
            {packageArray.map((item) => {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDashboard);