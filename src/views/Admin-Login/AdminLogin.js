import './AdminLogin.css';
import Button from '../../components/Button';

const AdminLogin = () => {
  return (
    <div className="AdminLogin">
      <div className="admin_login_container">
        <form action="">
          <h3>Admin Login</h3>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Button formButton="Sign In" />
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;