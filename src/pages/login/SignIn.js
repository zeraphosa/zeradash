import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useEffect } from "react";

export default function SignIn({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signin");
    if (isLoggedIn) navigate("/");
    else {return};
  }, [isLoggedIn, navigate]);

  return (
    <div className="login-container">
      <div className="app-info">Infos</div>
      <div className="signin">Sign In</div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Giris et</button>
    </div>
  );
}
