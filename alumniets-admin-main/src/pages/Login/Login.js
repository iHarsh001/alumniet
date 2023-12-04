import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const handleVerifyOTP = () => {
    navigate("/verifyotp");
  };
  return (
    <div>
      <div className="card-div"></div>
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>ADMIN LOGIN</h2>
          </div>
          <div id="email-input-div">
            <TextField
              id="email-input"
              label="Email"
              type="email"
              variant="standard"
              required
              // error
            />
          </div>
          <div className="form-border"></div>
          <Button onClick={handleVerifyOTP} id="submit-btn" variant="contained">
            Send OTP
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
