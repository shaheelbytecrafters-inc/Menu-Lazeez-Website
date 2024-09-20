import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  InputAdornment,
  CircularProgress,
  Alert,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import login from "../../assets/images/Sign.png";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../redux/authSlice/authSlice.js.js";
import { requestFCMToken } from "../../Firebase/firebaseConfig .js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const SignUp = ({ setIsAuth }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    bio: "",
  });

  const dispatch = useDispatch();
  // const { isLoading, error } = useSelector((state) => state.auth);
  const authState = useSelector((state) => state.auth);
  const { isLoading, error } = authState;

  const [fcmToken, setFcmToken] = useState(null);

  const handleKey = (event) => {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleSignIn = () => {
    // Dispatch signInUser with the form data and FCM token
    setIsAuth("login");
    console.log(fcmToken);
    dispatch(signUpUser({ ...formData, fcmToken }));
  };

  const handleChange = (e) => {
    // e.preventDefault()
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  // TextField styling to maintain gray color
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
        borderWidth: 1,
      },
    },
    "& .MuiInputLabel-root": {
      color: "gray",
      "&.Mui-focused": {
        color: "gray",
      },
    },
    "& .MuiInputBase-input": {
      color: "black",
    },
    "& .MuiInputBase-root": {
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "gray",
        },
      },
    },
  };

  // const navigate=usenavigate()
  const navigate = useNavigate();
  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate("/"); // Or wherever you want to redirect
    }
  }, [authState.isAuthenticated, navigate]);

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#f5f5f5",
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        paddingBlock: "2rem",
        width: "100%",
        border: "2px solid black",
        marginTop: "5rem",
      }}
    >
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={1}
        sx={{ width: { xs: "90%", md: "40%" }, height: "20%" }}
      >
        <Typography variant="h5">Sign In</Typography>

        {/* Display loading or error messages */}
        {isLoading && <CircularProgress />}
        {/* {error && <Alert severity="error">{error}</Alert>} */}
        {error && (
          <Alert severity="error">
            {typeof error === "string"
              ? error
              : error.message || JSON.stringify(error)}
          </Alert>
        )}

        {/* Name Field */}
        <TextField
          required
          fullWidth
          label="Name"
          name="username"
          value={formData.username}
          onChange={handleChange}
          sx={{
            ...textFieldStyles,
            "& .MuiOutlinedInput-root": { height: 35 },
            margin: "10px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Email Field */}
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          sx={{
            ...textFieldStyles,
            "& .MuiOutlinedInput-root": { height: 35 },
            margin: "10px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Phone Number Field */}
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Mobile Number"
          name="phoneNumber"
          onKeyPress={handleKey}
          value={formData.phoneNumber}
          onChange={handleChange}
          sx={{
            ...textFieldStyles,
            "& .MuiOutlinedInput-root": { height: 35 },
            margin: "10px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Bio Field */}
        <TextField
          variant="outlined"
          fullWidth
          label="Bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          sx={{
            ...textFieldStyles,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ChatIcon />
              </InputAdornment>
            ),
          }}
        />

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
          // onClick={()=>navigate("/")}
        >
          Submit
        </Button>
      </Box>

      {/* Image section */}
      <Box
        component="img"
        src={login}
        alt="Login"
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
};

export default SignUp;
