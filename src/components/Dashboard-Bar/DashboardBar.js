import './DashboardBar.css';
import Button from '../../components/Button';
import bitcoinImg from '../../assets/bitcoin.png';

const DashboardBar = ({ bar, title, bitcoin, dollar }) => {

  return (
    <div className="DashboardBar">

      {bar === true ?
      <div className="dashboard_bar_container">
        <h3>{title}</h3>
        <div className="dashboard_bar_content_container">
          <div className="text_container">
            <img src={bitcoinImg} alt="bitcoin"/><p>{bitcoin}</p>
          </div>
          <div className="text_container">
            <p className="dollar_sign">$</p>
            <p>{dollar}</p>
          </div>
        </div>
      </div> :

      <div className="secondary_bar_container">
        <h3>{title}</h3>
        <div className="company_input_container">
          <div className="company_title">
            <p>Finalmente</p>
            <p>7.85%</p>
          </div>
          <div className="input_container">
            <input type="number" placeholder="Enter return" />
            <Button formButton="Update" />
          </div>
        </div>
        <div className="company_input_container">
          <div className="company_title">
            <p>Mirror Trading International</p>
            <p>0%</p>
          </div>
          <div className="input_container">
            <input type="number" placeholder="Enter return" />
            <Button formButton="Update" />
          </div>
        </div>
      </div>}
    </div>
  );
}

export default DashboardBar;