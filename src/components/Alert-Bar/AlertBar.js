import './AlertBar.css';

const AlertBar = ({ request, name, amount }) => {
  return (
    <div className="AlertBar">
      <div className="request_container">
        <p className="alert_request">{request}</p>
      </div>
      <div className="name_container">
        <p>{name}</p>
      </div>
      <div className="amount_container">
        <p>{amount}</p>
      </div>
      <p>Click here</p>
    </div>
  );
}

export default AlertBar;