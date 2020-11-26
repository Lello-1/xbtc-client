import './Button.css';

const Button = ({ formButton, onClick }) => {

  return (
    <div className="Button" onClick={onClick}>
      <input className="form_button" type="submit" value={formButton} />
    </div>
  );
}

export default Button;