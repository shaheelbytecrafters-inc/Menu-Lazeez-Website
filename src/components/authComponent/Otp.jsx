import { Button, Typography, Box, Container } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../../redux/authSlice/authSlice.js";
import otp from "../../assets/images/Otp.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OTPInput({ onClose }) {
  // Add onClose as a prop
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

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");

  const handleKey = (event) => {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleBackspace = (event, setInput, prevRef) => {
    if (event.key === "Backspace" && event.target.value === "") {
      setInput("");
      if (prevRef) prevRef.current.focus();
    }
  };

  useEffect(() => {
    if (input6.length === 1) {
      Ref6.current.blur();
    }
  }, [input6]);

  const handleVerifyOTP = () => {
    const otpCode = `${input1}${input2}${input3}${input4}${input5}${input6}`;
    const phoneNumber = JSON.parse(localStorage.getItem("phoneNumber"));
    if (phoneNumber) {
      const otpData = {
        phoneNumber: phoneNumber.phoneNumber,
        token: otpCode,
      };
      dispatch(verifyOtp(otpData));
    } else {
      toast.error("Phone number not found in local storage!");
    }
  };

  useEffect(() => {
    if (otpVerificationMessage === "OTP verified successfully") {
      toast.success("OTP verified successfully!");
      // Close the modal after success
      if (onClose) {
        onClose(); // Call the modal close function
      }
      // Navigate to the home page after a small delay
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [otpVerificationMessage, navigate, onClose]); // Include onClose in the dependency array

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "white",
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        paddingBlock: "2rem",
        marginBottom: "5rem",
        width: { xs: "95%", md: "100%" },
        padding: "3rem",
        marginTop: "5rem",
      }}
    >
      <ToastContainer />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: { xs: "100%", md: "50%" } }}
      >
        <Typography variant="h5" marginTop={3}>
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
              {[input1, input2, input3, input4, input5, input6].map(
                (value, index) => (
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
                      [
                        setInput1,
                        setInput2,
                        setInput3,
                        setInput4,
                        setInput5,
                        setInput6,
                      ][index](e.target.value);
                      if (e.target.value.length === 1) {
                        const nextRef = [Ref2, Ref3, Ref4, Ref5, Ref6, null][
                          index
                        ];
                        if (nextRef) nextRef.current.focus();
                      }
                    }}
                    maxLength={1}
                    onKeyPress={handleKey}
                    onKeyDown={(e) =>
                      handleBackspace(
                        e,
                        [
                          setInput1,
                          setInput2,
                          setInput3,
                          setInput4,
                          setInput5,
                          setInput6,
                        ][index],
                        [null, Ref1, Ref2, Ref3, Ref4, Ref5][index]
                      )
                    }
                  />
                )
              )}
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
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </Button>
          </>
        )}

        {/* {error && (
          <Typography color="error" marginTop={2}>
            {error}
          </Typography>
        )} */}
        {/* {error && (
          <Typography color="error" marginTop={2}>
            {typeof error === "string" ? error : JSON.stringify(error)}
          </Typography>
        )} */}
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
      <Box
        component="img"
        src={otp}
        alt="OTP Login"
        sx={{
          width: "45%",
          height: "auto",
          objectFit: "cover",
          borderRadius: 2,
          display: { xs: "none", md: "block" },
        }}
      />
    </Container>
  );
}
