import './Notification.css';
import Sidebar from '../../components/Sidebar';
import AlertBar from '../../components/Alert-Bar';
import notificationData from '../../mock-data/notification-data';
import { Link } from 'react-router-dom';

const Notification = () => {
  return (
    <div className="Notification">
      <Sidebar />
      <div className="notification_container">
        <div className="notifications">
          <h3>Notifications</h3>
          <div className="alert_bar_container">
            {notificationData.map((item) => {
              return <Link to="/admin/transactions"><AlertBar request={item.request} name={item.name} amount={item.amount} /></Link>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;