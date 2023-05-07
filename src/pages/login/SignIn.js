import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function SignIn({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    navigate("/signin");
    if (isLoggedIn) navigate("/");
    else {
      return;
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="login-container">
      <div className="app-info">
        <img src="https://images.unsplash.com/photo-1676816823266-a8bb9a998de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="login-img" />
        <div className="overlay">
          <div>
            <h1>What's new in ZeraDash ?</h1>
            <ul>
              <li>Full control over e-commerce</li>
              <li>Content management system</li>
              <li>Unlimited projects</li>
              <li>Special data encryption</li>
              <li>Multiple sign-in options</li>
              <li>Multilanguage</li>
              <li>Currency converter</li>
              <li>Weather API</li>
            </ul>
          </div>
        </div>
      </div>
      {signUp ? (
        <div className="signin">
          <div className="top">
            <div className="title">Sign Up</div>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="submit">
              <button className="sign" onClick={() => setSignUp(false)}>
                Sign Up
              </button>
            </div>
          </div>
          <div className="bottom">
            <p>Have an account?</p>
            <button className="sign" onClick={() => setSignUp(true)}>
              Sign In Now
            </button>
          </div>
        </div>
      ) : (
        <div className="signin">
          <div className="top">
            <div className="title">Login to ZeraDash</div>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="submit">
              <div>Forgot your password ?</div>
              <button className="sign" onClick={() => setIsLoggedIn(true)}>
                Sign In
              </button>
            </div>
          </div>
          <div className="bottom">
            <p>Don't have an account?</p>
            <button className="sign" onClick={() => setSignUp(true)}>
              Sign Up Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
