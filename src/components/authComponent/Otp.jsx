import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { useRef, useState } from 'react';

export default function OTPInput() {
    const Ref1 = useRef(null)
    const Ref2 = useRef(null)
    const Ref3 = useRef(null)
    const Ref4 = useRef(null)
    const handleKey = (event) => {
        if (!/\d/.test(event.key)) {
            event.preventDefault()
        }
    }
    const [input1, setInput1] = useState()
    const [input2, setInput2] = useState()
    const [input3, setInput3] = useState()
    const [input4, setInput4] = useState()
    return (
        <Container maxWidth="xs" sx={{ backgroundColor: 'white', borderRadius: 4 }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height={300}
                padding={5}
            >
                <Typography variant="h4" marginTop={3}>
                    Enter OTP
                </Typography>

                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    height={400}
                    gap={2}
                >
                    <TextField
                        type="text"
                        sx={{ flex: 1 }}
                        value={input1}
                        ref={Ref1}
                        onChange={(e) => {
                            setInput1(e.target.value)
                            Ref2.current.focus()
                        }}
                        maxLength={1}
                        onKeyPress={handleKey} />
                    <TextField
                        sx={{ flex: 1 }}
                        type="text"
                        value={input2}
                        ref={Ref2}
                        onChange={(e) => {
                            setInput2(e.target.value)
                            Ref3.current.focus()
                        }}
                        maxLength={1}
                        onKeyPress={handleKey} />
                    <TextField
                        sx={{ flex: 1 }}
                        type="text"
                        value={input3}
                        ref={Ref3}
                        onChange={(e) => {
                            setInput3(e.target.value)
                            Ref4.current.focus()
                        }}
                        maxLength={1}
                        onKeyPress={handleKey} />
                    <TextField
                        sx={{ flex: 1 }}
                        type="text"
                        value={input4}
                        ref={Ref4}
                        onChange={(e) => {
                            setInput4(e.target.value)

                        }}
                        maxLength={1}
                        onKeyPress={handleKey}
                    />
                </Box>

                <Button
                    variant="contained"
                    sx={{ color: 'white', backgroundColor: 'red' }}
                //   onClick={handleLogin}

                >
                    Login
                </Button>

            </Box>
        </Container>
    )
}