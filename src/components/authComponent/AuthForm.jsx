import React, { useState } from 'react'
import {Box} from '@mui/material'
import Login from './Login'
import OTPInput from './Otp'


function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <Box>
       { isLogin ? <Login setIsLogin={setIsLogin}/> : <OTPInput/>}
    </Box>
  )
}

export default AuthForm;