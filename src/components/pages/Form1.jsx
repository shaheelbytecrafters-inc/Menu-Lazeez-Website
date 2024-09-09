"use client";

import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useSnackbar } from "notistack";

const Form1 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        User Registration
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="First name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Last name" variant="outlined" />
        </Grid>
      </Grid>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Email address"
          type="email"
          helperText="We'll never share your email."
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Password"
          type={show ? "text" : "password"}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClick}>
                  {show ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        User Details
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Country / Region</InputLabel>
        <Select variant="outlined">
          <MenuItem value="US">United States</MenuItem>
          <MenuItem value="CA">Canada</MenuItem>
          <MenuItem value="MX">Mexico</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Street address"
          variant="outlined"
          autoComplete="street-address"
        />
      </FormControl>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="outlined" autoComplete="city" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="State / Province"
            variant="outlined"
            autoComplete="state"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="ZIP / Postal"
            variant="outlined"
            autoComplete="postal-code"
          />
        </Grid>
      </Grid>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Typography variant="h5" align="center">
        Social Handles
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Website"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">http://</InputAdornment>
            ),
          }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="About"
          multiline
          rows={4}
          placeholder="Brief description for your profile. URLs are hyperlinked."
          variant="outlined"
        />
      </FormControl>
    </>
  );
};

export default function Multistep() {
//   const { enqueueSnackbar } = useSnackbar();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
          marginTop: "10px",
        }}
        component="form"
      >
        <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup sx={{ mt: 2, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Button
                variant="contained"
                color="primary"
                disabled={step === 1}
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                sx={{ mr: 2 }}
              >
                Back
              </Button>
              <Button
                variant="outlined"
                color="primary"
                disabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  setProgress(step === 3 ? 100 : progress + 33.33);
                }}
              >
                Next
              </Button>
            </Box>
            {step === 3 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  enqueueSnackbar(
                    "Account created. We've created your account for you.",
                    {
                      variant: "success",
                      autoHideDuration: 3000,
                    }
                  );
                }}
              >
                Submit
              </Button>
            )}
          </Box>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
