import './DashboardPackage.css';
import bitcoinImg from '../../assets/bitcoin.png';

const DashboardPackage = ({ title, bitcoin, dollar }) => {

  return (
    <div className="DashboardPackage">
      <h5>{title}</h5>
      <div className="package_content_container">
        <div>
          <img src={bitcoinImg} alt="bitcoin"/>
        </div>
        <p>{bitcoin}</p>
        <p className="package_dollar_sign">$</p>
        <p>{dollar}</p>
      </div>
    </div>
  );
}

export default DashboardPackage;