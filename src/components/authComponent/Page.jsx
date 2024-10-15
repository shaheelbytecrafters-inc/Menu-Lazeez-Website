import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  InputAdornment,
  CircularProgress,
  Alert,
  Modal,
  IconButton,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import login from "../../assets/images/Sign.png"; // Your GIF image
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../redux/authSlice/authSlice.js";
import { requestFCMToken } from "../../Firebase/firebaseConfig.js";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = ({ open, handleClose, handleOpenModal }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    bio: "",
  });

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { isLoading, error } = authState;
  const [fcmToken, setFcmToken] = useState(null);
  const navigate = useNavigate();

  const handleKey = (event) => {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(
        signUpUser({ ...formData, fcmToken })
      );
      if (resultAction.payload.error !== "Phone Number already exists") {
        handleOpenModal("otp");
      } else {
        toast.info("Phone Number already exists!");
      }
    } catch (err) {
      console.log("An unexpected error occurred: ", err);
    }
  };

  const handleChange = (e) => {
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

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      height: 50,
      borderRadius: "12px",
      backgroundColor: "white",
      "& fieldset": {
        borderColor: "#ccc",
      },
      "&:hover fieldset": {
        borderColor: "#bbb",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#bbb",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#888888",
      "&.Mui-focused": {
        color: "#888888",
      },
    },
    "& .MuiInputBase-input": {
      color: "#4A4A4A",
    },
    "& input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset",
      WebkitTextFillColor: "#4A4A4A",
    },
  };

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate("/");
    }
  }, [authState.isAuthenticated, navigate]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          width: { xs: "90%", sm: "50%" },
          borderRadius: 2,
          boxShadow: 24,
          padding: 2,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          overflow: "hidden",
          backgroundImage: `url("https://www.svgrepo.com/show/136239/wave.svg")`, // Wave background SVG
          backgroundSize: "cover", // Make sure the wave covers the whole box
          backgroundRepeat: "no-repeat", // No repetition of the wave image
        }}
      >
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
          <CloseIcon sx={{ color: "#fe0604" }} />
        </IconButton>

        {/* Form Section */}
        <Box
          component="form"
          onSubmit={handleSignIn}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={1}
          sx={{ width: { xs: "100%", sm: "50%" } }} // Full width on small screens
        >
          {isLoading && <CircularProgress sx={{ color: "#fe0604" }} />}
          {error && (
            <Alert severity="error">
              {typeof error === "string"
                ? error
                : error.message || JSON.stringify(error)}
            </Alert>
          )}

          <TextField
            required
            fullWidth
            label="Name"
            name="username"
            value={formData.username}
            onChange={handleChange}
            sx={{
              ...textFieldStyles,
              margin: "10px 0",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon sx={{ color: "#fe0604" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
              ...textFieldStyles,
              margin: "10px 0",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ color: "#fe0604" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            fullWidth
            label="Mobile Number"
            name="phoneNumber"
            onKeyPress={handleKey}
            value={formData.phoneNumber}
            onChange={handleChange}
            sx={{
              ...textFieldStyles,
              margin: "10px 0",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneOutlinedIcon sx={{ color: "#fe0604" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            sx={{
              ...textFieldStyles,
              margin: "10px 0",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ChatIcon sx={{ color: "#fe0604" }} />
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
          >
            Submit
          </Button>
        </Box>

        {/* GIF section for medium and larger screens */}
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            width: "50%",
            height: "auto",
          }}
        >
          <img
            src={login}
            alt="Sign Up GIF"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default SignUp;
