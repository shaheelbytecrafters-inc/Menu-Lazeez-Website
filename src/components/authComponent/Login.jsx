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
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ color: "Black", fontWeight: "bold" , fontSize:"2rem"}}>
          Login
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: "white",
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent>
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
          sx={{ gap: 2, marginTop: "1rem" }}
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
                height: 45,
                borderRadius: "8px", // Rounded corners
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: "#d3d3d3", // Soft border color
                },
                "&:hover fieldset": {
                  borderColor: "#a5a5a5", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3b3a39", // Darker color when focused
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#3b3a39" }, // Label color
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneOutlinedIcon sx={{ color: "#3b3a39" }} />
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
                padding: "10px 30px",
                fontSize: "1rem",
                borderRadius: "8px", // Smooth button edges
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
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

      {/* Dialog Actions */}
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{ color: "#fe0604", textTransform: "none" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
