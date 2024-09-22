

import { Box } from "@mui/material";
import Login from "./Login";
import SignUp from "./SignIn"; 
import OTPInput from "./Otp";

function AuthForm({ isAuth, setIsAuth }) {


  return (
    <Box>
      {isAuth == "logIn" ? (
        <Login setIsAuth={setIsAuth} />
      ) : isAuth == "signUp" ? (
        <SignUp setIsAuth={setIsAuth} />
      ) : (
        <OTPInput />
      )}
    </Box>
  );
}

export default AuthForm;
