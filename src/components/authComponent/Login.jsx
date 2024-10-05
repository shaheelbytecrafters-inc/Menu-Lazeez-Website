import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import login from "../../assets/images/wave12.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice/authSlice.js";
import { requestFCMToken } from "../../Firebase/firebaseConfig.js";

const Login = ({ open, handleClose, handleOpenModal }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const { isLoading, otpStatus, error } = useSelector((state) => state.auth);
  const [fcmToken, setFcmToken] = useState(null);

  useEffect(() => {
    const fetchFCMToken = async () => {
      try {
        const token = await requestFCMToken();
        setFcmToken(token);
      } catch (err) {
        console.log("Getting an error", err);
      }
    };
    fetchFCMToken();
  }, []);

  const handleKey = (event) => {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleLogin = async () => {
    if (phoneNumber.length >= 10) {
      try {
        const resultAction = await dispatch(
          loginUser({ phoneNumber, fcmToken })
        );

        if (
          loginUser.fulfilled.match(resultAction) &&
          resultAction.payload.status
        ) {
          console.log("resultAction: ", resultAction);
          handleOpenModal("otp");
        } else {
          handleOpenModal("signUp");
        }
      } catch (err) {
        console.log("An unexpected error occurred: ", resultAction);
      }
    } else {
      alert("Invalid contact number");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      {/* Dialog Title with Background Image */}
      <DialogTitle
        sx={{
          backgroundImage: `url(${login})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
          position: "relative",
          padding: "1.5rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            color: "black",
            fontSize: "2rem",
          }}
        >
          Login
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: "red",
            position: "absolute",
            right: 16,
            top: 16,
            bgcolor:"#fff",
            fontWeight:"bold",
            ":hover":{bgcolor:"#fff"}
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent
        sx={{
          padding: "2rem",
          background: "#f9f9f9", // Light background color for content
          borderRadius: "0 0 8px 8px",
        }}
      >
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ gap: 3, marginTop: "1rem" }}
        >
          {/* Phone Number Input Field */}
          <TextField
            required
            fullWidth
            label="Mobile Number"
            onKeyPress={handleKey}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 50,
                borderRadius: "12px", // Rounded corners
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: "#ccc", // Soft border color
                },
                "&:hover fieldset": {
                  borderColor: "#bbb", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#bbb", // Brand color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "#888888",
                "&.Mui-focused": {
                  color: "#FF5A5F",
                },
              },
              "& .MuiInputBase-input": {
                color: "#4A4A4A",
              },
              "& input:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px white inset", // Ensures the background remains white
                WebkitTextFillColor: "#4A4A4A", // Ensures the text color stays consistent
              },
            }}
            InputLabelProps={{
              style: { color: "#7a7a7a" }, // Muted label color
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneOutlinedIcon sx={{ color: "#fe0604" }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Loading / Button */}
          {isLoading ? (
            <Typography variant="body2" sx={{ color: "#fe0604" }}>
              Sending OTP...
            </Typography>
          ) : (
            <Button
              type="submit"
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#fe0604",
                textTransform: "none",
                padding: "12px 40px",
                fontSize: "1.1rem",
                borderRadius: "8px", // Smooth button edges
                boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.1)", // Softer shadow
                "&:hover": {
                  backgroundColor: "#d90404", // Darker shade on hover
                },
              }}
            >
              Send OTP
            </Button>
          )}

          {/* Feedback / Error Messages */}
          {otpStatus && (
            <Typography sx={{ color: "#3b3a39", marginTop: "1rem" }}>
              {typeof otpStatus === "string" ? otpStatus : String(otpStatus)}
            </Typography>
          )}
          {error && (
            <Typography color="error" sx={{ marginTop: "0.5rem" }}>
              {typeof error === "string" ? error : String(error)}
            </Typography>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;