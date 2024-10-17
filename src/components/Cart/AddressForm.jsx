import { useState, useCallback, useEffect, useMemo } from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { postAddress } from "../../redux/profileSlice/addressSlice";
import checkout from "../../assets/images/Checkout.gif"; // Import your image
import PaymentModal from "../PaymentModal/PaymentModal";
import { fetchCartData } from "../../redux/cartSlice/cart";

const textFieldStyles = {
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "gray" },
    "&:hover fieldset": { borderColor: "gray", boxShadow: "1px 1px 2px black" },
    "&.Mui-focused fieldset": { borderColor: "gray" },
  },
  "& .MuiInputLabel-root": {
    color: "gray",
    "&.Mui-focused": { color: "gray", fontWeight: "bold" },
  },
};

const addressTypes = ["Home", "Work", "Other"];

const initialFormState = {
  address: "",
  buildingDetails: "",
  addressLabel: "",
  deliveryContactNumber: "",
};

const FormField = ({ label, name, value, onChange, ...props }) => (
  <TextField
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    required
    sx={textFieldStyles}
    {...props}
  />
);

function AddressForm() {
  const [formData, setFormData] = useState(initialFormState);
  const { cartData } = useSelector((state) => state.cart);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);

  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userData"))?._id;
    if (userId) {
      dispatch(fetchCartData(userId));
    }
  
  }, [dispatch]);

  const handleClosePaymentModal = () => setPaymentModalOpen(false);


  const products = cartData?.items || [];

  const taxRate = 0.05;
  const shippingRate = 15.0;

  const subtotal = useMemo(
    () => products.reduce((acc, product) => acc + product.totalPrice, 0),
    [products]
  );
  const tax = useMemo(() => subtotal * taxRate, [subtotal]);
  const total = useMemo(
    () => subtotal + tax + (subtotal > 0 ? shippingRate : 0),
    [subtotal, tax]
  );

  const handleOpenPaymentModal = () => {
    setPaymentDetails({
      restaurantId: cartData.restaurantId,
      amount: total.toFixed(2),
      userId: cartData.userId,
    });
    setPaymentModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("userData"))?._id;
    await dispatch(postAddress({ payload: { ...formData, userId } }));
    setFormData(initialFormState);
    handleOpenPaymentModal()
  };
 
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {paymentModalOpen && (
        <PaymentModal
          open={paymentModalOpen}
          handleClose={handleClosePaymentModal}
          paymentDetails={paymentDetails}
        />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "85vw",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          bgcolor: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Form Section */}
        <Box
          sx={{
            flex: 1,
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ marginBottom: 3, color: "#333" }}
            >
              Address Form
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <FormField
                label="Contact number"
                name="deliveryContactNumber"
                value={formData.deliveryContactNumber}
                onChange={handleChange}
              />
              <FormField
                label="Door / Flat no."
                name="buildingDetails"
                value={formData.buildingDetails}
                onChange={handleChange}
              />
              <FormField
                label="Street address, locality"
                name="address"
                value={formData.address}
                onChange={handleChange}
                multiline
                rows={4}
              />
              {/* Address Type */}
              <FormLabel
                sx={{ fontSize: "14px", color: "#555", textAlign: "left" }}
              >
                Address Type
              </FormLabel>
              <RadioGroup
                row
                name="addressLabel"
                value={formData.addressLabel}
                onChange={handleChange}
                sx={{ justifyContent: "space-around" }}
              >
                {addressTypes.map((label) => (
                  <FormControlLabel
                    key={label}
                    value={label}
                    control={<Radio required />}
                    label={label}
                  />
                ))}
              </RadioGroup>
              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#fe0604",
                  "&:hover": { backgroundColor: "#fe0604" },
                  padding: "12px",
                  borderRadius: "8px",
                  width: "100%",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Save Address And Pay
              </Button>
            </Box>
          </Container>
        </Box>
        {/* Image Section */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
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
