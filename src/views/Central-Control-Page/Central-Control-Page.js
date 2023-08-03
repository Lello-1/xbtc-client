import './Central-Control-Page.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useState } from 'react';

const CentralControlPage = () => {

  const [wallet_address, setWalletAddress] = useState('');

  const walletAddressOptions = {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ wallet_address }),
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  const handleChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleEndOfWeek = () => {

  };

  const handleWalletAddress = (e) => {
    e.preventDefault();
    fetch('/admin/change-wallet-address', walletAddressOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setWalletAddress('');
      });
  };

  return (
    <div className="CentralControlPage">
      <Sidebar mastersheet="active" />
      <div className="mastersheet_container">
        <div>
          <button onClick={handleEndOfWeek}>End of Week</button>
        </div>
        <div>
          <form onSubmit={handleWalletAddress}>
            <input type="text" onChange={handleChange} />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CentralControlPage;