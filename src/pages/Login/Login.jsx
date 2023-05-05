import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="body">
      <div className="login">
        <form className="login__form " action="/">
          <h2 className="text-primary">Login To Your ccount</h2>
          <input
            type="email"
            className="login__input"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="login__input"
            placeholder="Password"
            required
          />

          <input type="submit" value="login" className="login__btn" />
          <Link to="/forgot" className="login__link">
            Forgot Password?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
