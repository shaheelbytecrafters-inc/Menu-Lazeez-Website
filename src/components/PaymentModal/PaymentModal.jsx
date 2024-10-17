import React, { useState } from "react";
import axios from "axios";
import { Modal, Box, Button, Typography } from "@mui/material";
import food from "../../assets/images/food.jpeg";
const PaymentModal = ({ paymentDetails, handleClose, open }) => {

console.log("paymentDetails =>",paymentDetails);

  const handlePayment = async () => {
    try {
      // Step 1: Call your backend API to create an order
      const orderResponse = await axios.post(
        "https://lazeez-user-backend-kpyf.onrender.com/create-payment",
        paymentDetails
      );
      console.log("orderResponse: " , orderResponse);
      
      // Step 2: Extract order details from the API response
      const { amount, id: order_id } = orderResponse.data;
      const currency = "INR"; // Set the currency to INR (Indian Rupee)
      // Step 3: Razorpay options
      const options = {
        key: "rzp_test_dOCbmAZUEDYBdm", // Replace with your Razorpay Key ID
        amount: parseFloat(amount) * 100, // Amount is in paisa (multiply by 100 if in rupees)
        currency: currency,
        name: "Lazeez Restaurant",
        description: "Order Payment",
        image: {food}, // Your logo URL
        order_id: order_id,
        handler: function (response) {
          // Step 4: Handle the payment response
          console.log("Payment successful", response);
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          // Here you can make a server call to verify the payment
        },
        // prefill: {
        //   name: "User Name", // You can prefill this dynamically
        //   email: "user@example.com",
        //   contact: "9999999999",
        // },
        theme: {
          color: "#F37254",
        },
      };

      // Step 5: Open Razorpay Checkout
      const rzp1 = new window.Razorpay(options);
      rzp1.open();

      // Step 6: Handle payment failure
      rzp1.on("payment.failed", function (response) {
        console.error(response.error);
        alert("Payment failed. Please try again.");
      });
    } catch (error) {
      console.error("Error while creating payment", error);
    }
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom sx={{
            fontSize:30,
          }}>
            Confirm Your Payment
          </Typography>
          <Typography variant="body1" gutterBottom sx={{fontSize:"20px"}}>
            Amount: ₹{paymentDetails.amount}
          </Typography>
          <Button
            variant="contained"
            onClick={handlePayment}
            fullWidth
            sx={{ backgroundColor: "#fe0604",":hover":{backgroundColor: "#fe0604"}}}
          >
            Pay ₹{paymentDetails.amount}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default PaymentModal;
