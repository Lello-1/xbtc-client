import './Button.css';

const Button = ({ formButton }) => {

  return (
    <div className="Button">
      <input className="form_button" type="submit" value={formButton} />
    </div>
  );
}

export default Button;