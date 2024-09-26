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
// import { requestFCMToken } from "../../Firebase/firebaseConfig.js";
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
        // Using unwrap to get the result or catch any errors
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

  // const textFieldStyles = {
  //   "& .MuiOutlinedInput-root": {
  //     "& fieldset": {
  //       borderColor: "gray",
  //     },
  //     "&:hover fieldset": {
  //       borderColor: "gray",
  //     },
  //     "&.Mui-focused fieldset": {
  //       borderColor: "gray",
  //       border: "1px solid gray",
  //     },
  //   },
  //   "& .MuiInputLabel-root": {
  //     color: "gray",
  //     "&.Mui-focused": {
  //       color: "gray",
  //     },
  //   },
  // };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle
        // backgroundImage: `url(${login})`,
        sx={
          {
            backgroundImage: `url(${login})`,
          }
        }
      >
        <Typography variant="h6" component="div">
          Login
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          // backgroundImage: `url(${login})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "2rem",
          // border: "2px solid black",
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
          sx={{ gap: 2, marginTop: "2rem" }}
        >
          <TextField
            // variant="outlined"
            required
            fullWidth
            label="Mobile Number"
            onKeyPress={handleKey}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 45,
                "& fieldset": {
                  borderColor: "black", // Border color
                },
                "&:hover fieldset": {
                  borderColor: "black", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black", // Border color when focused
                },
              },
              margin: "10px 0", // Margin
              // backgroundColor: "rgba(255, 255, 255, 0.9)",
            }}
            InputLabelProps={{
              style: { color: "black" }, // Label color
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          {isLoading ? (
            <Typography variant="body2">Sending OTP...</Typography>
          ) : (
            <Button
              type="submit"
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#fe0604",
                textTransform: "none",
                padding: "8px 20px",
                fontSize: "0.9rem",
                "&:hover": {
                  backgroundColor: "#fe0604",
                },
              }}
            >
              Send OTP
            </Button>
          )}
          {otpStatus && (
            <Typography sx={{ color: "black", marginTop: "1rem" }}>
              {typeof otpStatus === "string" ? otpStatus : String(otpStatus)}
            </Typography>
          )}
          {error && (
            <Typography color="error">
              {typeof error === "string" ? error : String(error)}
            </Typography>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: "#fe0604" }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
