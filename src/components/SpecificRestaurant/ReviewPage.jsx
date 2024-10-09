// import React, { useState } from "react";
// import { Box, Button, Grid, Typography, Avatar, Rating } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { fetchReviews, postReview } from "../../redux/reviewSlice/reviewSlice";


// import RestaurantReview from "./RestaurantReview";

// const ReviewPage = ({ reviews }) => {
//   const [open, setOpen] = useState(false);
//   const dispatch = useDispatch();

//   // Open and close modal handlers
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   // Handle form submission and dispatch action
//  const handleSubmit = async (formData) => {
//    const userData = JSON.parse(localStorage.getItem("userData")) || {};
//    const userId = userData?._id;

//    const payload = {
//      restaurantId: reviews[0]["restaurantId"],
//      userId,
//      userName: formData.userName,
//      rating: formData.rating,
//      reviewText: formData.reviewText,
//    };

//    if (formData.image) {
//      payload.image = formData.image; // Add image if available
//    }

//    try {
//      // Post the review
//      await dispatch(postReview(payload));

//      setOpen(false);

//      console.log("Aaarif Khan is a  ===========================",payload.restaurantId)
//      const restaurantId=payload.restaurantId
//      dispatch(fetchReviews({restaurantId}));

//    } catch (error) {

//      console.error("Error posting review:", error);
//    }
//  };



//   return (
//     <Grid container spacing={2} padding={2}>
//       {/* Button to open review modal */}
//       <Box display="flex" justifyContent="center" mb={2}>
//         <Button
//           variant="contained"
//           //color="primary"
//           onClick={handleOpen}
//           sx={{
//             marginRight: "1rem",
//             textTransform: "none",
//             fontSize: "1rem",
//             fontWeight: "bold",
//             backgroundColor: "#fe0604",
//             color: "white",
//             border: "1px solid red",
//             // padding:"5px",
//             "&:hover": {
//               backgroundColor: "#fe0604",
//               color: "white",
//             },
//           }}
//         >
//           Add Review
//         </Button>
//         <Button
//           variant="contained"
//           //color="primary"
//           sx={{
//             marginRight: "1rem",
//             textTransform: "none",
//             fontSize: "1rem",
//             fontWeight: "bold",
//             backgroundColor: "#fe0604",
//             color: "white",
//             border: "1px solid red",
//             "&:hover": {
//               backgroundColor: "#fe0604",
//               color: "white",
//             },
//           }}
//         >
//           My Reviews
//         </Button>
//       </Box>

//       {/* Render the RestaurantReview component */}
//       <RestaurantReview
//         open={open}
//         handleClose={handleClose}
//         handleSubmit={handleSubmit} // Pass the submit handler as a prop
//       />

//       {/* Loop through and render each review */}
//       {reviews.map((review) => (
//         <Grid item xs={12} key={review._id}>
//           <Box display="flex" justifyContent="center">
//             <Box
//               display="flex"
//               justifyContent={"center"}
//               alignItems="center"
//               p={2}
//               sx={{
//                 borderRadius: "12px",
//                 width: "70%",
//                 boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               {/* Avatar for user profile */}
//               <Avatar
//                 src={review.image} // Use the image URL if available
//                 alt={review.userName} // Alt text for the image
//                 sx={{
//                   bgcolor: review.image ? "transparent" : "red",
//                   mr: 2,
//                   fontSize: "1rem",
//                   fontWeight: "bold",
//                 }}
//               />

//               {/* Review Details */}
//               <Box width="100%">
//                 <Box display="flex" alignItems="center" mb={1} width="100%">
//                   <Box>
//                     <Typography variant="h6" fontWeight="bold" mr="1rem">
//                       {review.userName}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center">
//                     <Rating
//                       name="read-only"
//                       value={review.rating}
//                       precision={0.5}
//                       sx={{ fontSize: "1rem" }}
//                       readOnly
//                     />
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       sx={{ marginLeft: "8px" }}
//                     >
//                       {review.rating} Stars
//                     </Typography>
//                   </Box>
//                 </Box>

//                 {/* Review Text */}
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     backgroundColor: "#fff",
//                     padding: "10px 15px",
//                     borderRadius: "10px",
//                     boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
//                   }}
//                 >
//                   {review.reviewText}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="textSecondary"
//                   sx={{ marginLeft: 1, textAlign: "end", mt: "1rem" }}
//                 >
//                   {new Date(review.datePosted).toLocaleString()}
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Typography, Avatar, Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReviews,
  postReview,
  fetchMyReviews,
} from "../../redux/reviewSlice/reviewSlice";
import RestaurantReview from "./RestaurantReview";

const ReviewPage = ({ reviews }) => {
  const [open, setOpen] = useState(false);
  const [myReviewsMode, setMyReviewsMode] = useState(false); // State to toggle between all reviews and my reviews
  const dispatch = useDispatch();
  const { reviews: allReviews, loading, error } = useSelector((state) => state.reviews); // Get all reviews from the Redux store
  const { myReviews } = useSelector((state) => state.reviews); 

  // Open and close modal handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle form submission and dispatch action
  const handleSubmit = async (formData) => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const userId = userData?._id;

    const payload = {
      restaurantId: reviews[0]["restaurantId"],
      userId,
      userName: formData.userName,
      rating: formData.rating,
      reviewText: formData.reviewText,
    };

    if (formData.image) {
      payload.image = formData.image; // Add image if available
    }

    try {
      // Post the review
      await dispatch(postReview(payload));
      setOpen(false);
      
      // Fetch reviews after posting
      const restaurantId = payload.restaurantId;
      dispatch(fetchReviews({ restaurantId }));
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  // Handle fetching "My Reviews"
  const handleMyReviews = (restaurantId) => {
    setMyReviewsMode(true); // Enable myReviewsMode
    dispatch(fetchMyReviews(restaurantId)); // Dispatch action to fetch my reviews
  };

  // Handle showing all reviews
  const handleAllReviews = (restaurantId) => {
    setMyReviewsMode(false); // Disable myReviewsMode
    dispatch(fetchReviews({ restaurantId })); // Dispatch action to fetch all reviews
  };

  const displayedReviews = myReviewsMode ? myReviews : allReviews;

  return (
    <Grid container spacing={2} padding={2}>
      {/* Buttons to toggle between "All Reviews" and "My Reviews" */}
      <Box display="flex" justifyContent="center" mb={2} alignItems="center" width="100%">
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{
            marginRight: "1rem",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "#fe0604",
            color: "white",
            border: "1px solid red",
            "&:hover": {
              backgroundColor: "#fe0604",
              color: "white",
            },
          }}
        >
          Add Review
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            myReviewsMode ? handleAllReviews(reviews[0].restaurantId) : handleMyReviews(reviews[0].restaurantId)
          }
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "#fe0604",
            color: "white",
            border: "1px solid red",
            "&:hover": {
              backgroundColor: "#fe0604",
              color: "white",
            },
          }}
        >
          {myReviewsMode ? "All Reviews" : "My Reviews"}
        </Button>
      </Box>

      {/* Render the RestaurantReview component */}
      <RestaurantReview open={open} handleClose={handleClose} handleSubmit={handleSubmit} />

      {/* Loop through and render each review */}
      {displayedReviews?.map((review) => (
        <Grid item xs={12} key={review._id}>
          <Box display="flex" justifyContent="center">
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              p={2}
              sx={{
                borderRadius: "12px",
                width: "70vw",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Avatar for user profile */}
              <Avatar
                src={review.image}
                alt={review.userName}
                sx={{
                  bgcolor: review.image ? "transparent" : "red",
                  mr: 2,
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              />

              {/* Review Details */}
              <Box width="100%">
                <Box display="flex" alignItems="center" mb={1} width="100%">
                  <Box>
                    <Typography variant="h6" fontWeight="bold" mr="1rem">
                      {review.userName}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Rating
                      name="read-only"
                      value={review.rating}
                      precision={0.5}
                      sx={{ fontSize: "1rem" }}
                      readOnly
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginLeft: "8px" }}
                    >
                      {review.rating} Stars
                    </Typography>
                  </Box>
                </Box>

                {/* Review Text */}
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: "#fff",
                    padding: "10px 15px",
                    borderRadius: "10px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {review.reviewText}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginLeft: 1, textAlign: "end", mt: "1rem" }}
                >
                  {new Date(review.datePosted).toLocaleString()}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReviewPage;


// export default ReviewPage;
