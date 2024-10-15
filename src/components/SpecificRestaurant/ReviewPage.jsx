import React, { useState } from "react";
import { Box, Button, Grid, Typography, Avatar, Rating, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReviews,
  postReview,
  updateReview,
  fetchMyReviews,
} from "../../redux/reviewSlice/reviewSlice";
import RestaurantReview from "./RestaurantReview";
import ShimmerReview from "./ShimmerReview";
import { EditNotifications } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

const ReviewPage = ({ reviews }) => {
  const [open, setOpen] = useState(false);
  const [myReviewsMode, setMyReviewsMode] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [editFormData, setEditFormData] = useState({
    userName: "",
    rating: 0,
    reviewText: "",
    image: null,
  });

  const dispatch = useDispatch();
  const {
    reviews: allReviews,
    isLoading,
    error,
  } = useSelector((state) => state.reviews);
  const { myReviews } = useSelector((state) => state.reviews);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      payload.image = formData.image;
    }

    try {
      if (editMode) {
        const reviewId = editMode;
        await dispatch(updateReview({ payload, reviewId }));
      } else {
        await dispatch(postReview(payload));
      }

      setOpen(false);
      setEditMode(null);
      setEditFormData({ userName: "", rating: 0, reviewText: "", image: null });

      const restaurantId = payload.restaurantId;
      dispatch(fetchReviews({ restaurantId }));
      dispatch(fetchMyReviews(restaurantId));
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  const handleMyReviews = (restaurantId) => {
    setMyReviewsMode(true);
    dispatch(fetchMyReviews(restaurantId));
  };

  const handleAllReviews = (restaurantId) => {
    setMyReviewsMode(false);
    dispatch(fetchReviews({ restaurantId }));
  };

  const handleEdit = (review) => {
    setEditMode(review._id);
    setEditFormData({
      userName: review.userName,
      rating: review.rating,
      reviewText: review.reviewText,
      image: review.image || null,
    });
    setOpen(true);
  };

  const displayedReviews = myReviewsMode ? myReviews : allReviews;

  if (isLoading) {
    return <ShimmerReview />;
  }

  return (
    <Grid container spacing={3} paddingTop={4}>
      <RestaurantReview
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        formData={editFormData}
        setFormData={setEditFormData}
      />

      <Box display="flex" justifyContent="center" mb={4} width="100%">
        <Box width="70vw" display="flex" flexDirection="row" flexWrap="nowrap">
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              marginRight: "1rem",
              textTransform: "none",
              fontSize: { xs: "0.8rem", sm: "1rem" }, // Decrease font size on small screens
              fontWeight: "bold",
              background: "linear-gradient(45deg, #fe0604 30%, #d50000 90%)", // Gradient background
              color: "white",
              borderRadius: "24px",
              padding: "10px 20px",
              boxShadow: "0 3px 5px 2px rgba(254, 6, 4, .3)", // Subtle shadow
              "&:hover": {
                background: "linear-gradient(45deg, #d50000 30%, #9e0000 90%)", // Darker gradient on hover
              },
              transition: "background 0.3s, transform 0.2s", // Smooth transition
              "&:active": {
                transform: "scale(0.95)", // Slight scale effect on click
              },
            }}
          >
            Add Review
          </Button>

          <Button
            variant="contained"
            onClick={() =>
              myReviewsMode
                ? handleAllReviews(reviews[0].restaurantId)
                : handleMyReviews(reviews[0].restaurantId)
            }
            sx={{
              textTransform: "none",
              fontSize: { xs: "0.8rem", sm: "1rem" }, // Decrease font size on small screens
              fontWeight: "bold",
              background: "linear-gradient(45deg, #fe0604 30%, #d50000 90%)", // Gradient background
              color: "white",
              borderRadius: "24px",
              padding: "10px 20px",
              boxShadow: "0 3px 5px 2px rgba(254, 6, 4, .3)", // Subtle shadow
              "&:hover": {
                background: "linear-gradient(45deg, #d50000 30%, #9e0000 90%)", // Darker gradient on hover
              },
              transition: "background 0.3s, transform 0.2s", // Smooth transition
              "&:active": {
                transform: "scale(0.95)", // Slight scale effect on click
              },
            }}
          >
            {myReviewsMode ? "All Reviews" : "My Reviews"}
          </Button>
        </Box>
      </Box>

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
              {/* <Avatar
                src={review.image}
                alt={review.userName}
                sx={{
                  bgcolor: review.image ? "transparent" : "red",
                  mr: 2,
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              /> */}
              <Avatar
                src={review.image ? review.image : undefined} // Use undefined if image is not present
                alt={review.userName ? review.userName : "User"} // Fallback to "User" if userName is undefined
                sx={{
                  bgcolor: review.image ? "transparent" : "red",
                  mr: 2,
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {!review.image && review.userName
                  ? review.userName.charAt(0)
                  : "?"}{" "}
                {/* Fallback to '?' if userName is undefined */}
              </Avatar>

              <Box width="100%">
                <Box
                  display="flex"
                  alignItems="center"
                  mb={1}
                  width="100%"
                  justifyContent="space-between"
                >
                  <Typography variant="h6" fontWeight="bold" mr="1rem">
                    {review.userName}
                  </Typography>
                  <Box></Box>
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
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: "#fff",
                    // padding: "10px 15px",
                    borderRadius: "10px",
                    // boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
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
                {myReviewsMode && (
                  <Box display="flex" width="100%" justifyContent="flex-end">
                    <Button
                      onClick={() => handleEdit(review)}
                      sx={{
                        mt: 2,
                        color: "#fe0604",
                        border: "2px solid #fe0604",
                        fontWeight:"bold"
                      }}
                    >
                      Edit
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReviewPage;
