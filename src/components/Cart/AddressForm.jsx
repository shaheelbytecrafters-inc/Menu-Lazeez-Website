import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  FormLabel,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { postAddress } from "../../redux/profileSlice/addressSlice";
import checkout from "../../assets/images/Checkout.gif"; // Import your image

const textFieldStyles = {
  flex: 1,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "gray",
      boxShadow: "1px 1px 2px black",
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
      fontWeight: "bold",
    },
  },
};

function AddressForm() {
  const [formData, setFormData] = useState({
    address: "",
    buildingDetails: "",
    addressLabel: "",
    deliveryContactNumber: "",
  });

  const {
    address,
    loading: addressLoading,
    error: addressError,
  } = useSelector((state) => state.address);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = JSON.parse(localStorage.getItem("userData"))?._id;
    const payload = {
      userId,
      address: formData.address,
      buildingDetails: formData.buildingDetails,
      addressLabel: formData.addressLabel,
      deliveryContactNumber: formData.deliveryContactNumber,
    };

    dispatch(postAddress({ payload }));

    setFormData({
      address: "",
      buildingDetails: "",
      addressLabel: "",
      deliveryContactNumber: "",
    });
  };

  return (
    <Box sx={
      {
        width:"100%",
        // bgcolor:"black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }
    }>
      <Box
        sx={{
          display: "flex",
          width: "85vw",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          borderRadius: "12px",
          overflow: "hidden",
          bgcolor: "#fff",
        }}
      >
        {/* Form on the Left Side */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", md: "50%" }, // Responsive width for form
            padding: "1rem",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h4"
              component="h1"
              fontFamily="Playwrite DE Grund, cursive"
              fontWeight={"bold"}
              sx={{ marginBottom: 3, color: "#333" }}
            >
              Address Form
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                alignItems: "center",
              }}
            >
              <TextField
                label="Contact number"
                variant="outlined"
                name="deliveryContactNumber"
                value={formData.deliveryContactNumber}
                onChange={handleChange}
                required
                sx={{ width: "100%", ...textFieldStyles }}
              />

              <TextField
                label="Door / Flat no."
                variant="outlined"
                name="buildingDetails"
                value={formData.buildingDetails}
                onChange={handleChange}
                required
                sx={{ width: "100%", ...textFieldStyles }}
              />

              <TextField
                label="Street address, locality"
                variant="outlined"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                multiline
                rows={4}
                sx={{ width: "100%", ...textFieldStyles }}
              />

              <FormLabel
                id="address-type-label"
                sx={{
                  fontSize: "14px",
                  color: "#555",
                  textAlign: "left",
                  "&.Mui-focused": {
                    color: "#fe0604",
                  },
                }}
              >
                Address Type
              </FormLabel>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <label>
                  <input
                    type="radio"
                    name="addressLabel"
                    value="Home"
                    checked={formData.addressLabel === "Home"}
                    onChange={(e) =>
                      setFormData({ ...formData, addressLabel: e.target.value })
                    }
                    required
                  />
                  Home
                </label>

                <label>
                  <input
                    type="radio"
                    name="addressLabel"
                    value="Work"
                    checked={formData.addressLabel === "Work"}
                    onChange={(e) =>
                      setFormData({ ...formData, addressLabel: e.target.value })
                    }
                    required
                  />
                  Work
                </label>

                <label>
                  <input
                    type="radio"
                    name="addressLabel"
                    value="Other"
                    checked={formData.addressLabel === "Other"}
                    onChange={(e) =>
                      setFormData({ ...formData, addressLabel: e.target.value })
                    }
                    required
                  />
                  Other
                </label>
              </Box>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#fe0604",
                  "&:hover": {
                    backgroundColor: "#fe0604",
                  },
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  textTransform:"none",
                  fontSize:"1rem",
                  fontWeight:"bold"
                }}
              >
                Save And Deliver Here
              </Button>
            </Box>
          </Container>
        </Box>

        {/* gif on the Right Side */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Hide on small screens
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <img
            src={checkout}
            alt="Checkout Illustration"
            style={{ width: "80%", height: "auto", borderRadius: "12px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AddressForm;
