import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { useRef, useState, useEffect } from 'react';

export default function OTPInput() {
    const Ref1 = useRef(null);
    const Ref2 = useRef(null);
    const Ref3 = useRef(null);
    const Ref4 = useRef(null);

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    const handleKey = (event) => {
        if (!/\d/.test(event.key)) {
            event.preventDefault();
        }
    };

    const handleBackspace = (event, setInput, ref, prevRef) => {
        if (event.key === 'Backspace' && event.target.value === '') {
            setInput('');
            if (prevRef) prevRef.current.focus();
        }
    };

    useEffect(() => {
        if (input4.length === 1) {
            Ref4.current.blur();
        }
    }, [input4]);

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
                    <input
                        type="text"
                        style={{ padding: '10px', width: '30px', height: '30px', textAlign: 'center' }}
                        value={input1}
                        ref={Ref1}
                        onChange={(e) => {
                            setInput1(e.target.value);
                            if (e.target.value.length === 1) Ref2.current.focus();
                        }}
                        maxLength={1}
                        onKeyPress={handleKey}
                        onKeyDown={(e) => handleBackspace(e, setInput1, Ref1, null)}
                    />
                    <input
                        type="text"
                        style={{ padding: '10px', width: '30px', height: '30px', textAlign: 'center' }}
                        value={input2}
                        ref={Ref2}
                        onChange={(e) => {
                            setInput2(e.target.value);
                            if (e.target.value.length === 1) Ref3.current.focus();
                        }}
                        maxLength={1}
                        onKeyPress={handleKey}
                        onKeyDown={(e) => handleBackspace(e, setInput2, Ref2, Ref1)}
                    />
                    <input
                        type="text"
                        style={{ padding: '10px', width: '30px', height: '30px', textAlign: 'center' }}
                        value={input3}
                        ref={Ref3}
                        onChange={(e) => {
                            setInput3(e.target.value);
                            if (e.target.value.length === 1) Ref4.current.focus();
                        }}
                        maxLength={1}
                        onKeyPress={handleKey}
                        onKeyDown={(e) => handleBackspace(e, setInput3, Ref3, Ref2)}
                    />
                    <input
                        type="text"
                        style={{ padding: '10px', width: '30px', height: '30px', textAlign: 'center' }}
                        value={input4}
                        ref={Ref4}
                        onChange={(e) => {
                            setInput4(e.target.value);
                        }}
                        maxLength={1}
                        onKeyPress={handleKey}
                        onKeyDown={(e) => handleBackspace(e, setInput4, Ref4, Ref3)}
                    />
                </Box>

                <Button
                    variant="contained"
                    sx={{ color: 'white', backgroundColor: 'red' }}
                >
                    Login
                </Button>

            </Box>
        </Container>
    );
}
