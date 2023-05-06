import "./login.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Login = () => {
  return (
    <>
      <Helmet>
        <title>DODI || HOME</title>
      </Helmet>
      <div className="body">
        <div className="login">
          <form className="login__form bg-light" action="/">
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

            <input
              type="submit"
              value="Change"
              className="login__btn btn btn-primary"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
