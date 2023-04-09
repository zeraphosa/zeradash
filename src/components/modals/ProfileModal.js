import { useDispatch } from "react-redux";
import { Icon } from "../Icons";
import "./style.css";
import { useState } from "react";

export default function ProfileModal() {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div className="modal" onClick={() => dispatch({ type: "setProfile" })}></div>
      <div className="modal-inner">
        <div className="modal-header">
          <h2>PROFILE</h2>
          <button className="close-btn" onClick={() => dispatch({ type: "setProfile" })}>
            <Icon name="close" size={25} />
          </button>
        </div>
        <div className="modal-container profile">
          <div className="modal-items">
            <form className="profile-item">
              <div className="form-item">
                <label>Your Name</label>
                <input type="text" placeholder="Zaur Sharifov" value="Zaur Sharifov" />
              </div>
              <div className="form-item">
                <label>Your Email</label>
                <input type="email" placeholder="zaur.sharifov@outlook.com" value="zaur.sharifov@outlook.com" />
              </div>
              <div className="form-item">
                <label>Your Password</label>
                <div className="password-item">
                  <input type={showPass ? "password" : "text" } placeholder="password1234" value="password1234" />
                  <div className="show" onClick={() => setShowPass(!showPass)}>
                    {showPass && <Icon name="eyeOn" size={20}/>}
                    {showPass || <Icon name="eyeOff" size={20}/>}
                  </div>
                </div>
              </div>
              <input type="submit" placeholder="Update" value="UPDATE" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
