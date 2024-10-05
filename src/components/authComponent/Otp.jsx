import {
  Button,
  Typography,
  Box,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { useRef, useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close"; // Import Close icon
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, resendOtp } from "../../redux/authSlice/authSlice.js";
import { useNavigate } from "react-router-dom";
import opt from "../../assets/images/wave12.png"; // Import wave image
import { border } from "@mui/system";

export default function OTPInput({ open, handleClose }) {
  const dispatch = useDispatch();
  const { isLoading, error, otpVerificationMessage } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);
  const Ref5 = useRef(null);
  const Ref6 = useRef(null);

  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);
  const [isResending, setIsResending] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const phoneNumber = userData.phoneNumber;

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
        phoneNumber: phoneNumber,
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
        phoneNumber: phoneNumber,
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
      handleClose(); // Close the modal on successful verification
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [otpVerificationMessage, navigate, handleClose]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      sx={{
        "& .MuiDialog-paper": {
          backgroundImage: `url(${opt})`, // Add the wave image to the modal itself
          backgroundSize: "100% 125px", // Adjust the width to 100% and height to 50px
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "bottom", // Align the wave to the bottom
          boxShadow: "none", // Remove any box shadow
          overflow: "hidden", // Prevent overflow and scrollbar
          position: "relative",
        },
      }}
    >
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
        sx={{
          position: "absolute",
          right:25 ,
          top: 8,
          color: "red",
          bgcolor:"#fff",
          fontWeight:"bold",
          ":hover":{bgcolor:"#fff"}
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h6"
            marginTop={3}
            fontWeight={"bold"}
            fontSize={"2rem"}
          >
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
                      width: "30px",
                      height: "30px",
                      textAlign: "center",
                      fontSize: "1.2rem",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      "&hover": {
                        border: "1px solid #fe0604",
                      },
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between", // Space buttons evenly
                  marginTop: 3, // Top margin for the entire box
                  gap: 1, // Gap between buttons to ensure consistent spacing
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    textTransform: "none",
                    marginTop: 3,
                    padding: "0.5rem 1rem", // Use consistent padding
                    fontSize: "1rem", // Keep the same font size
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
                    padding: "0.5rem 1rem", // Use consistent padding
                    fontSize: "1rem", // Keep the same font size
                    "&:hover": {
                      backgroundColor: "#fe0604",
                    },
                  }}
                  onClick={handleResendOTP}
                  disabled={isLoading || isResending}
                >
                  {isResending ? "Resending..." : "Resend OTP"}
                </Button>
              </Box>
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
    </Dialog>
  );
}