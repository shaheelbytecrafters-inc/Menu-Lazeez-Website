import {
  Button,
  Typography,
  Box,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, resendOtp } from "../../redux/authSlice/authSlice.js";
import otp from "../../assets/images/Otp.png";
import { useNavigate } from "react-router-dom";

export default function OTPInput({ open, handleClose }) {
  const dispatch = useDispatch();
  const { isLoading, error, otpVerificationMessage } = useSelector(
    (state) => state.auth
  );
  const phoneNumber = JSON.parse(localStorage.getItem("phoneNumber"));
  const navigate = useNavigate();

  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);
  const Ref5 = useRef(null);
  const Ref6 = useRef(null);

  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);
  const [isResending, setIsResending] = useState(false);

  const handleKey = (event) => {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleBackspace = (event, index) => {
    if (event.key === "Backspace" && inputValues[index] === "") {
      const newValues = [...inputValues];
      newValues[index] = "";
      setInputValues(newValues);
      if (index > 0) {
        [Ref1, Ref2, Ref3, Ref4, Ref5, Ref6][index - 1].current.focus();
      }
    }
  };

  useEffect(() => {
    if (inputValues[5].length === 1) {
      Ref6.current.blur();
    }
  }, [inputValues]);

  const handleVerifyOTP = () => {
    const otpCode = inputValues.join("");
    if (phoneNumber) {
      const otpData = {
        phoneNumber: phoneNumber.phoneNumber,
        token: otpCode,
      };
      dispatch(verifyOtp(otpData));
    } else {
      console.log("Phone number not found in local storage!");
    }
  };

  const handleResendOTP = () => {
    if (phoneNumber) {
      setIsResending(true);
      const otpData = {
        phoneNumber: phoneNumber.phoneNumber,
      };
      dispatch(resendOtp(otpData));
      setInputValues(["", "", "", "", "", ""]);
      setIsResending(false);
    } else {
      console.log("Phone number not found in local storage!");
    }
  };

  useEffect(() => {
    if (otpVerificationMessage === "OTP verified successfully") {
      console.log("OTP verified successfully!");
      handleClose(); // Close the modal on successful verification
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [otpVerificationMessage, navigate, handleClose]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Enter OTP</DialogTitle>
      <DialogContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6" marginTop={3}>
            {otpVerificationMessage === "OTP verified successfully"
              ? "Verified"
              : "Enter OTP"}
          </Typography>

          {otpVerificationMessage !== "OTP verified successfully" && (
            <>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                gap={1.5}
                marginTop={3}
              >
                {inputValues.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    style={{
                      padding: "12px",
                      width: "20px",
                      height: "20px",
                      textAlign: "center",
                      fontSize: "1.2rem",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                    }}
                    value={value}
                    ref={[Ref1, Ref2, Ref3, Ref4, Ref5, Ref6][index]}
                    onChange={(e) => {
                      const newValues = [...inputValues];
                      newValues[index] = e.target.value;
                      setInputValues(newValues);
                      if (e.target.value.length === 1) {
                        const nextRef = [Ref2, Ref3, Ref4, Ref5, Ref6, null][
                          index
                        ];
                        if (nextRef) nextRef.current.focus();
                      }
                    }}
                    maxLength={1}
                    onKeyPress={handleKey}
                    onKeyDown={(e) => handleBackspace(e, index)}
                  />
                ))}
              </Box>

              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "red",
                  textTransform: "none",
                  marginTop: 3,
                  padding: "0.8rem 2rem",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "#fe0604",
                  },
                }}
                onClick={handleVerifyOTP}
                disabled={isLoading || isResending}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>

              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "red",
                  textTransform: "none",
                  marginTop: 3,
                  padding: "0.8rem 2rem",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "#fe0604",
                  },
                }}
                onClick={handleResendOTP}
                disabled={isLoading || isResending}
              >
                {isResending ? "Resending..." : "Resend OTP"}
              </Button>
            </>
          )}

          {error && (
            <Typography color="error" marginTop={2}>
              {typeof error === "string"
                ? error
                : error.message
                ? error.message
                : "An unexpected error occurred."}
            </Typography>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
