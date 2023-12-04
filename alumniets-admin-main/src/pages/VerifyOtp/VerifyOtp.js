import "./VerifyOtp.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function VerifyOtp() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/dashboard");
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
              label="OTP"
              type="number"
              variant="standard"
              required
              // error
            />
          </div>
          <div className="form-border"></div>
          <Button onClick={handleSubmit} id="submit-btn" variant="contained">
            Verify Otp
          </Button>
        </div>
      </div>
    </div>
  );
}
export default VerifyOtp;
