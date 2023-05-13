import "./login.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>DODI ||Login</title>
      </Helmet>
      <div className="container">
        <h1 className="text-primary text-center font-bold ">
          <span className="mx-3">&#128075;</span>Welcome Admin
        </h1>
      </div>

      <div className="login">
        <form className="login__form bg-light" action="/">
          <h2 className="text-primary ">Login</h2>
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

          <input
            type="submit"
            value="login"
            className="btn btn-primary login__btn "
          />
        </form>
      </div>
    </>
  );
};

export default Login;
