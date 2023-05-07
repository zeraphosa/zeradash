import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useEffect } from "react";

export default function SignIn({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signin");
    if (isLoggedIn) navigate("/");
    else {
      return;
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="login-container">
      <div className="app-info">Infos</div>
      <div className="signin">
        <div className="top">
          <div className="title">Login to ZeraDash</div>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="submit">
            <div>Forgot your password ?</div>
            <button className="sign">Sign In</button>
          </div>
        </div>
        <p>OR</p>
        <div className="bottom">
          <button className="sign">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
