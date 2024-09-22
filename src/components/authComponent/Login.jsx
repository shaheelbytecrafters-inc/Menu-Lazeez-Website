import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  InputAdornment,
} from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import login from "../../assets/images/wave12.png"; 
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice/authSlice.js";
import { requestFCMToken } from "../../Firebase/firebaseConfig .js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const dispatch = useDispatch();
  const { isLoading, otpStatus, error } = useSelector((state) => state.auth);
  const [fcmToken, setFcmToken] = useState(null);


  const handleKey = (event) => {
    if (!/\d/.test(event.key)) {
      event();
    }
  };

  const handleLogin = () => {
    if (phoneNumber.length >= 10) {
      dispatch(loginUser({phoneNumber,fcmToken}));
    console.log(fcmToken);

    } else {
      alert("Invalid contact number");
    }
  };

    useEffect(() => {
      if (otpStatus) {
        toast.success("OTP sent successfully!");
      }
      if (error) {
        toast.error(`Error: ${error}`);
      }
    }, [otpStatus, error]);
    
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

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "gray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "gray",
        border: "1px solid gray",
      },
    },
    "& .MuiInputLabel-root": {
      color: "gray",
      "&.Mui-focused": {
        color: "gray",
      },
    },
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#fff",
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        width: { xs: "90%", sm: "80%", md: "60%", lg: "30%" },
        marginTop: "5rem",
        height: "50vh",
        backgroundImage: `url(${login})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ToastContainer />
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="start"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h5" sx={{ color: "black" }}>
          Login
        </Typography>

        <TextField
          variant="outlined"
          required
          fullWidth
          label="Mobile Number"
          onKeyPress={handleKey}
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
          sx={{
            ...textFieldStyles,
            "& .MuiOutlinedInput-root": { height: 35 },
            margin: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
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
          <Typography variant="body2" sx={{ color: "white" }}>
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
              padding: "5px 15px",
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
          <Typography sx={{ color: "white" }}>{otpStatus}</Typography>
        )}
        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Container>
  );
};

export default Login;
