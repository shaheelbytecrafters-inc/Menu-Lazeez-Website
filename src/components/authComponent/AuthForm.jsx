// import React, { useState } from 'react'
// import {Box} from '@mui/material'
// import Login from './Login'
// import OTPInput from './Otp'


// function AuthForm() {
//   const [isLogin, setIsLogin] = useState(true)
//   return (
//     <Box>
//        { isLogin ? <Login setIsLogin={setIsLogin}/> : <OTPInput/>}
//     </Box>
//   )
// }

// export default AuthForm;

import { useState } from "react";
import { Box } from "@mui/material";
import Login from "./Login";
import SignUp from "./SignIn"; // Import the new SignUp component
import OTPInput from "./Otp";

function AuthForm({ isAuth, setIsAuth }) {
  // const [isLogin, setIsLogin] = useState(false);
  // const [isAuth, setIsAuth] = useState("");

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
