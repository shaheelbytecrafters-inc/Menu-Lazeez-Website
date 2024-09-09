import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const textFieldStyles = {
  flex: 1,
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
      color: " gray", 
    },
  },
};
const radioStyles = {
  "& .MuiRadio-root": {
    color: " gray", // Default color of the radio button
    
    "&.Mui-checked": {
      color: " gray", // Radio button color when checked
    },
  },
  "& .MuiFormControlLabel-label": {
    color: " gray", // Default label color
    "& .Mui-focused": {
      color: "gray", // Focused label color
    },
  },
};



function AddressForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    locality: "",
    address: "",
    state: "",
    landmark: "",
    alternatePhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Container maxWidth="sm" sx={{ mt: 2, mb: 2 }}>
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          sx={{ marginBottom: 1 }}
        >
          Address Form
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            marginInline: { xs: "1rem", sm: "2rem" },
          }}
        >
          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ flex: 1, ...textFieldStyles }}
              InputProps={{ sx: { backgroundColor: "transparent" } }}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              type="tel"
              sx={{ flex: 1, ...textFieldStyles }}
              InputProps={{ sx: { backgroundColor: "transparent" } }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
            <TextField
              label="Pincode"
              variant="outlined"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              sx={{ flex: 1, ...textFieldStyles }}
              InputProps={{ sx: { backgroundColor: "transparent" } }}
            />
            <TextField
              label="Locality"
              variant="outlined"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              required
              sx={{ flex: 1, ...textFieldStyles }}
              InputProps={{ sx: { backgroundColor: "transparent" } }}
            />
          </Box>

          <TextField
            label="Address"
            variant="outlined"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            multiline
            rows={4}
            sx={{ width: "100%", ...textFieldStyles }}
            InputProps={{ sx: { backgroundColor: "transparent" } }}
          />

          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
            <TextField
              label="City/District/Town"
              variant="outlined"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              sx={{ flex: 1, ...textFieldStyles }}
              InputProps={{ sx: { backgroundColor: "transparent" } }}
            />
            <FormControl fullWidth sx={{ flex: 1, ...textFieldStyles }}>
              <InputLabel id="state-select-label">State</InputLabel>
              <Select
                labelId="state-select-label"
                id="state-select"
                value={formData.state}
                name="state"
                label="State"
                onChange={handleChange}
                sx={{ backgroundColor: "transparent" }}
              >
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="California">California</MenuItem>
                <MenuItem value="New York">New York</MenuItem>
                <MenuItem value="Texas">Texas</MenuItem>
                <MenuItem value="Florida">Florida</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              width: "100%",
              alignItems: "center",
              ...textFieldStyles,
            }}
          >
            <TextField
              label="Landmark (Optional)"
              variant="outlined"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              sx={{ flex: 1, ...textFieldStyles }}
              InputProps={{ sx: { backgroundColor: "transparent" } }}
            />
            <TextField
              label="Alternate Phone (Optional)"
              variant="outlined"
              name="alternatePhone"
              value={formData.alternatePhone}
              onChange={handleChange}
              sx={{ flex: 1, ...textFieldStyles }}
              InputProps={{ sx: { backgroundColor: "transparent" } }}
            />
          </Box>

          <FormControl
            sx={{ fontSize: "14px", alignItems: "flex-start", width: "100%" }}
          >
            <FormLabel
              id="address-type-label"
              sx={{
                fontSize: "14px",
                textAlign: "left",
                color: "black",
                "&.Mui-focused": {
                  color: "black", // Keeps the label black when focused
                },
                "&.MuiFormLabel-root": {
                  color: "black", // Ensures consistent color
                },
              }}
            >
              Address Type
            </FormLabel>

            <RadioGroup
              row
              aria-labelledby="address-type-label"
              name="addressType"
              sx={{
                justifyContent: "flex-start",
                width: "100%",
                ...radioStyles,
              }}
            >
              <FormControlLabel
                value="Home"
                control={<Radio sx={{ ...radioStyles }} />}
                label="Home (All day delivery)"
                componentsProps={{
                  typography: {
                    fontSize: "14px",
                    color: "black", // Set the text color directly for label
                  },
                }}
              />
              <FormControlLabel
                value="Work"
                control={<Radio sx={{ ...radioStyles }} />}
                label="Work (Delivery between 10AM - 5PM)"
                componentsProps={{
                  typography: {
                    fontSize: "14px",
                    color: "black", // Set the text color directly for label
                  },
                }}
              />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#fe0604",
              "&:hover": {
                backgroundColor: "#fe0604",
              },
              width: "100%",
            }}
          >
            SAVE AND DELIVER HERE
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default AddressForm;
