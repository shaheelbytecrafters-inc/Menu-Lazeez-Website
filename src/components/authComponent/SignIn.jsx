import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  InputAdornment,
} from "@mui/material";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import login from "../../assets/images/Sign.png";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SignUp = ({ setIsAuth }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    bio: "",
  });

  const handleKey = (event) => {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleSignIn = () => {
    const { contactNumber } = formData;
    if (contactNumber.length >= 10) {
      setIsAuth("signIn");
    } else {
      alert("Invalid contact number");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
      color: "black", // Ensure text color is black
    },
    "& .MuiInputBase-root": {
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "gray", // Ensures the border remains gray when focused
        },
      },
    },
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#f5f5f5", // Changed background color
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" }, // Adjust layout based on screen size
        gap: 2,
        paddingBlock: "2rem",
        marginTop: "4rem",
        // width: "80%",
        // border: "2px solid black",
        width: {
          xs: "100%",
          sm: "100%",
          md: "80%",
        },
        // marginTop: {
        //   lg: "6rem",
        // },
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

        {/* Name Field */}
        <TextField
          required
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{
            ...textFieldStyles,
            "& .MuiOutlinedInput-root": { height: 35 },
            margin: "10px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
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
          name="contactNumber"
          onKeyPress={handleKey}
          value={formData.contactNumber}
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
          // onClick={() => setView("otp")}
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
