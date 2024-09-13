import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  InputAdornment,
} from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import login from "../../assets/images/login.png"; // Make sure the path matches your project structure

const Login = ({ setIsAuth }) => {
  const [contactNumber, setContactNumber] = useState("");

  // Restricts input to only digits
  const handleKey = (event) => {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  };

  // Handles login logic and validation
  const handleLogin = () => {
    if (contactNumber.length >= 10) {
      setIsAuth("login");
    } else {
      alert("Invalid contact number");
    }
  };

  // TextField styling similar to the SignUp component
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
        flexDirection: { xs: "column", md: "row" }, // Adjust layout based on screen size
        gap: 2,
        paddingBlock: "2rem",
        // border: "2px solid black",
        marginBottom: "5rem",
        width: {
          xs:"100%",
          sm:"100%",
          md:"80%"
        },
        marginTop: "4rem"
        
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
        gap={1}
        sx={{ width: { xs: "90%", md: "40%" }, height: "20%" }}
      >
        <Typography variant="h5">Login</Typography>

        <TextField
          variant="outlined"
          required
          fullWidth
          label="Mobile Number"
          onKeyPress={handleKey}
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
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
              backgroundColor: "#fe0604", // Darker red when hovering
            },
          }}
        >
          Send OTP
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
          display: { xs: "none", md: "block" }, // Hide image on small screens
        }}
      />
    </Container>
  );
};

export default Login;
