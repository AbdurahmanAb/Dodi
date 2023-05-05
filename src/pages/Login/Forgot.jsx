import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="body">
      <div className="login">
        <form className="login__form" action="/">
          <input
            type="password"
            className="login__input"
            placeholder="Old Password"
            required
          />
          <input
            type="password"
            className="login__input"
            placeholder="New Password"
            required
          />
          <input
            type="password"
            className="login__input"
            placeholder="Confirm password"
            required
          />

          <input type="submit" value="Change" className="login__btn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
