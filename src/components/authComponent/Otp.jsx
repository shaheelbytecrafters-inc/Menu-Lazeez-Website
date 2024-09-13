import { Button, Typography, Box, Container } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import otp from "../../assets/images/Otp.png"; // Ensure this path matches your project structure

export default function OTPInput() {
  // References for input fields
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);
  const Ref5 = useRef(null);
  const Ref6 = useRef(null);

  // State for each input field
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");

  // Only allow numeric input
  const handleKey = (event) => {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  };

  // Handle backspace to focus on the previous input if empty
  const handleBackspace = (event, setInput, prevRef) => {
    if (event.key === "Backspace" && event.target.value === "") {
      setInput("");
      if (prevRef) prevRef.current.focus();
    }
  };

  useEffect(() => {
    if (input6.length === 1) {
      Ref6.current.blur(); // Blur the last input when filled
    }
  }, [input6]);

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "white",
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        // paddingBlock: "2rem",
        // border: "2px solid black",
        marginBottom: "5rem",
        width: { xs: "80%", md: "100%" },
        padding: "3rem",
        marginTop: "9rem",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: { xs: "100%", md: "50%" } }}
      >
        <Typography variant="h5" marginTop={3}>
          Enter OTP
        </Typography>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={1.5} // Adjust gap for proper spacing
          marginTop={3}
        >
          {/* OTP input fields */}
          {[input1, input2, input3, input4, input5, input6].map(
            (value, index) => (
              <input
                key={index}
                type="text"
                style={{
                  padding: "12px",
                  width: "20px", // Adjusted width for visibility
                  height: "20px", // Adjusted height for visibility
                  textAlign: "center",
                  fontSize: "1.2rem", // Larger text for better readability
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                }}
                value={value}
                ref={[Ref1, Ref2, Ref3, Ref4, Ref5, Ref6][index]}
                onChange={(e) => {
                  [
                    setInput1,
                    setInput2,
                    setInput3,
                    setInput4,
                    setInput5,
                    setInput6,
                  ][index](e.target.value);
                  if (e.target.value.length === 1) {
                    const nextRef = [Ref2, Ref3, Ref4, Ref5, Ref6, null][index];
                    if (nextRef) nextRef.current.focus();
                  }
                }}
                maxLength={1}
                onKeyPress={handleKey}
                onKeyDown={(e) =>
                  handleBackspace(
                    e,
                    [
                      setInput1,
                      setInput2,
                      setInput3,
                      setInput4,
                      setInput5,
                      setInput6,
                    ][index],
                    [null, Ref1, Ref2, Ref3, Ref4, Ref5][index]
                  )
                }
              />
            )
          )}
        </Box>

        <Button
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "red",
            textTransform: "none",
            marginTop: 3,
            padding: "0.8rem 2rem", // Larger button with padding adjustments
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#fe0604", // Darker red when hovering
            },
          }}
        >
          Varify OTP
        </Button>
      </Box>

      {/* Image section */}
      <Box
        component="img"
        src={otp}
        alt="OTP Login"
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
}
