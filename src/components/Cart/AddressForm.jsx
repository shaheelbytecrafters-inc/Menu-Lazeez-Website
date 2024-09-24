import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { postAddress } from "../../redux/profileSlice/addressSlice";

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
    color: " gray",

    "&.Mui-checked": {
      color: " gray",
    },
  },
  "& .MuiFormControlLabel-label": {
    color: " gray",
    "& .Mui-focused": {
      color: "gray",
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
  //   const { address, loading, error } = useSelector((state) =>
  //   // console.log(state.address)
  //   state.address);
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

    console.log("Form submitted:", formData);
    const userId = JSON.parse(localStorage.getItem("userData"))?._id;
    const payload = {
      userId,
      address: formData.address,
      buildingDetails: formData.buildingDetails,
      addressLabel: formData.addressLabel,
      deliveryContactNumber: formData.deliveryContactNumber,
    };
    console.log("Hello...........................", payload);

    dispatch(postAddress({ payload }));
    console.log(
      "hedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
    );
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
          <TextField
            label="deliveryContactNumber"
            variant="outlined"
            name="deliveryContactNumber"
            value={formData.deliveryContactNumber}
            onChange={handleChange}
            required
            rows={4}
            sx={{ width: "100%", ...textFieldStyles }}
            InputProps={{ sx: { backgroundColor: "transparent" } }}
          />

          <TextField
            label="buildingDetails"
            variant="outlined"
            name="buildingDetails"
            value={formData.buildingDetails}
            onChange={handleChange}
            required
            rows={4}
            sx={{ width: "100%", ...textFieldStyles }}
            InputProps={{ sx: { backgroundColor: "transparent" } }}
          />

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

          <div>
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
          </div>

          <FormControl
            sx={{ fontSize: "14px", alignItems: "flex-start", width: "100%" }}
          ></FormControl>

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
