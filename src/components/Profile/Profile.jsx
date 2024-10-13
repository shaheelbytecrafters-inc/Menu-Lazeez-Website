import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Grid,
  Stack,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ComputerIcon from "@mui/icons-material/Computer";
import Switch from "@mui/material/Switch";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  editProfile,
} from "../../redux/profileSlice/profileSlice";
import {
  deleteAddress,
  editAddress,
  getAddress,
} from "../../redux/profileSlice/addressSlice";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
// import { Grid, Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import ProfileShimmer from "./ProfileShimmer";
import EditModal from "./EditModal/EditModal";

// import AddressGIF from "../../../src/assets/images/Address.gif";
const label = { inputProps: { "aria-label": "Switch demo" } };

function Profile() {
  const [selectedTab, setSelectedTab] = useState(0); // Track selected tab
  const [showContent, setShowContent] = useState(false); // Manage content view in small
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [specificAddressId, setSpecificAddressId] = useState("");
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("8368767396");
  const [email, setEmail] = useState("eram123@gmail.com");
  const dispatch = useDispatch();

  const dummy = [
    {
      id: 1,
      dishName: "Chicken Biryani",
      price: 250,
      totalPrice: 250,
      quantity: 1,
      image:
        "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035-1024x683.jpg",
    },
    {
      id: 2,
      dishName: "Mutton Biryani",
      price: 300,
      totalPrice: 600,
      quantity: 2,
      image:
        "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035-1024x683.jpg",
    },
    {
      id: 3,
      dishName: "Veg Biryani",
      price: 200,
      totalPrice: 400,
      quantity: 2,
      image:
        "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035-1024x683.jpg",
    },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (isSmallScreen) {
      setShowContent(true); // Show content when paragraph is clicked on small screens
    }
  };

  const toggleEditDialog = (addressID) => {
    const addressObject = address.find((ele) => ele._id === addressID);
    setSpecificAddressId(addressID);
    if (addressObject) {
      setInputValue(addressObject.address);
    } else {
      setInputValue("");
    }
    setOpenEditDialog(!openEditDialog);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the state with new input value
  };

  // Function to open the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the dialog
  const handleClickClose = () => {
    setOpen(false);
  };

  const handleBackClick = () => {
    setShowContent(false); // Go back to paragraphs when back button is clicked
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { profileData, isLoading, error } = useSelector((state) => state.profile);

  const {
    address,
    isLoading: addressLoading,
    error: addressError,
  } = useSelector((state) => state.address);

  
  const userProfileData = JSON.parse(localStorage.getItem("userData"));
  const handlePhoneChange = () => {
    if (isEditingPhone) {
      const profileId = userProfileData._id;
      dispatch(editProfile({ profileId, phoneNumber }));
    }
    setIsEditingPhone(!isEditingPhone);
  };

  // Fetching profile data
  useEffect(() => {
    const profileData = JSON.parse(localStorage.getItem("userData"));
    const profileId = profileData._id;
    dispatch(fetchProfile(profileId));
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    const userId = user._id;

    dispatch(getAddress(userId));
  }, [dispatch]);

  const deleteHandleClick = (addressId) => {
    dispatch(deleteAddress(addressId));
  };

  // Toggle email edit mode
  const handleEmailChange = () => {
    if (isEditingEmail) {
      const profileData = JSON.parse(localStorage.getItem("userData"));
      const profileId = profileData._id;
      dispatch(editProfile({ profileId, email }));
    }
    setIsEditingEmail(!isEditingEmail);
  };

  const handleSaveClick = () => {
    const address = inputValue;
    const addressID = specificAddressId;
    dispatch(editAddress({ addressID, address }));

    setOpenEditDialog(false);
  };

  useEffect(() => {
    if (profileData && Object.keys(profileData).length > 1) {
      setPhoneNumber(profileData.phoneNumber);
      setEmail(profileData.email);
    }
  }, [profileData]);

  if (isLoading) {
    return <ProfileShimmer/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profileData) {
    return <div>No profile data available</div>;
  }

  if (error) {
    return <div>Error loading address: {addressError}</div>;
  }

  return (
    <Box width="100vw">
      <Box
        sx={{
          backgroundColor: "#fff", // Change background to white on small screens
          width: "100%",
          // height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "85%", // Ensure the box takes the full width
            backgroundColor: "#fff",
            // marginLeft: isSmallScreen ? "0" : "5rem", // Remove margin on small screens
          }}
        >
          <Box
            sx={{
              // height: "100vh",
              display: "flex",
              marginLeft: isSmallScreen ? "0.4rem" : "-1rem", // Remove left margin on small screens
              marginTop: isSmallScreen ? "0" : "2rem", // Remove top margin on small screens
            }}
          >
            {/* Main Content with Sidebar */}
            <Box
              sx={{
                boxShadow: isSmallScreen
                  ? "none"
                  : "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                // border:"1px solid red",
                marginTop: isSmallScreen ? "0rem" : "-2rem",
                display: "flex",
                width: "100%",
              }}
            >
              {/* Navbar converted into a paragraph on small screens */}
              {isSmallScreen ? (
                !showContent && (
                  <Box sx={{ padding: "1rem", marginTop: "0" }}>
                    {/* Remove top margin */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "poppins",
                        color: "#000",
                        fontSize: isSmallScreen ? "16px" : "24px", // Decrease font size on small screens
                      }}
                    >
                      {Object.keys(userProfileData).length > 1 &&
                        userProfileData.username}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#000" }}>
                      {Object.keys(userProfileData).length > 1 &&
                        userProfileData.phoneNumber}
                    </Typography>
                    <Button
                      sx={{
                        color: "#fe0604",
                        border: "1px solid #fe0604",
                        fontWeight: "bold",
                        marginTop: "0.5rem",
                        fontSize: isSmallScreen ? "10px" : "24px",
                      }}
                      onClick={handleOpen}
                    >
                      Edit Profile
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      fullWidth
                      maxWidth="sm"
                    >
                      <DialogTitle>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="h6">Edit profile</Typography>
                          <IconButton onClick={handleClose}>
                            <CloseIcon />
                          </IconButton>
                        </Box>
                      </DialogTitle>

                      {/* Profile Details */}
                      <Box sx={{ padding: "0.5rem" }}>
                        {/* Phone Number Section */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <Box>
                            <Typography variant="subtitle1" gutterBottom>
                              Phone number
                            </Typography>
                            {isEditingPhone ? (
                              <TextField
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                variant="outlined"
                                size="small"
                              />
                            ) : (
                              <Typography
                                variant="body1"
                                sx={{ fontSize: "0.7rem" }}
                              >
                                {phoneNumber}
                              </Typography>
                            )}
                          </Box>
                          <Button
                            sx={{
                              color: "#fe0604",
                              fontWeight: "bold",
                              fontSize: "0.7rem",
                            }}
                            onClick={handlePhoneChange}
                          >
                            {isEditingPhone ? "SAVE" : "CHANGE"}
                          </Button>
                        </Box>

                        {/* Email Section */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography variant="subtitle1" gutterBottom>
                              Email id
                            </Typography>
                            {isEditingEmail ? (
                              <TextField
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant="outlined"
                                size="small"
                                height="1rem"
                              />
                            ) : (
                              <Typography
                                variant="body1"
                                sx={{ fontSize: "0.7rem" }}
                              >
                                {email}
                              </Typography>
                            )}
                          </Box>
                          <Button
                            sx={{
                              color: "#fe0604",
                              fontWeight: "bold",
                              fontSize: "0.7rem",
                            }}
                            onClick={handleEmailChange}
                          >
                            {isEditingEmail ? "SAVE" : "CHANGE"}
                          </Button>
                        </Box>
                      </Box>
                    </Dialog>
                    <Divider sx={{ width: "90%", marginTop: "10px" }} />{" "}
                    {/* Full width horizontal line */}
                    {/* Tabs (paragraphs) below the "Edit Profile" button */}
                    {!showContent && isSmallScreen && (
                      <Box
                        sx={{
                          width: "90%", // Make the full width
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-end",
                          // padding: "1rem",
                          gap: "1rem",
                          marginTop: "1rem", // Move tabs closer to the button
                        }}
                      >
                        <Typography
                          onClick={(event) => handleTabChange(event, 0)}
                          sx={{
                            cursor: "pointer",
                            color: "#fe0604",
                            width: "81vw", // Full width
                            textAlign: "left", // Left align text
                            padding: "0.5rem 0", // Add some vertical padding
                            marginLeft: "3rem",
                            // backgroundColor:"pink"
                          }}
                        >
                          Orders
                        </Typography>
                        <Divider sx={{ width: "100%" }} />{" "}
                        {/* Full width horizontal line */}
                        <Typography
                          onClick={(event) => handleTabChange(event, 1)}
                          sx={{
                            cursor: "pointer",
                            color: "#fe0604",
                            width: "100%", // Full width
                            textAlign: "left", // Left align text
                            padding: "0.5rem 0", // Add some vertical padding
                          }}
                        >
                          Address
                        </Typography>
                        <Divider sx={{ width: "100%" }} />{" "}
                        {/* Full width horizontal line */}
                        <Typography
                          onClick={(event) => handleTabChange(event, 2)}
                          sx={{
                            cursor: "pointer",
                            color: "#fe0604",
                            width: "100%", // Full width
                            textAlign: "left", // Left align text
                            padding: "0.5rem 0", // Add some vertical padding
                          }}
                        >
                          Setting
                        </Typography>
                        <Divider sx={{ width: " 100%" }} />{" "}
                        {/* Full width horizontal line */}
                        <Typography
                          sx={{
                            cursor: "pointer",
                            color: "#fe0604",
                            width: "100%", // Full width
                            textAlign: "left", // Left align text
                            padding: "0.5rem 0", // Add some vertical padding
                          }}
                        >
                          Privacy Policy
                        </Typography>
                        <Divider sx={{ width: "100%" }} />{" "}
                        <Typography
                          sx={{
                            cursor: "pointer",
                            color: "#fe0604",
                            width: "100%", // Full width
                            textAlign: "left", // Left align text
                            padding: "0.5rem 0", // Add some vertical padding
                          }}
                        >
                          Istallation
                        </Typography>
                        <Divider sx={{ width: "100%" }} />{" "}
                      </Box>
                    )}
                  </Box>
                )
              ) : (
                <Box
                  sx={{
                    backgroundColor: "transparent", // Remove background color
                    // bgcolor:"blue",
                    color: "black", // Set text color to black
                    marginTop: "5rem",
                    padding: "1rem",
                    position: "absolute", // Makes it behave like a navbar
                    top: 0,
                    left: 0,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "80%",
                      marginLeft: "6rem",
                      // bgcolor: "pink",
                      display: "flex",
                      justifyContent: "space-between", // Align name, phone number, and button in one line
                      alignItems: "center",
                      flexGrow: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Poppins",
                          color: "black", // Text color is black
                          fontSize: "32px",
                        }}
                      >
                        {Object.keys(profileData).length > 1 &&
                          userProfileData?.username}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "1rem",
                          fontSize: "16px",
                          color: "black", // Text color is black
                        }}
                      >
                        <Typography variant="body2">
                          {Object.keys(profileData).length > 1 &&
                            userProfileData?.phoneNumber}
                        </Typography>
                        <Typography>
                          {console.log("pdjiiiiiiii", profileData)}
                          {Object.keys(profileData).length > 1 &&
                            userProfileData?.email}
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      sx={{
                        color: "black", // Button text color is black
                        border: "1.5px solid black", // Button border color is black
                        fontWeight: "bold",
                        marginRight: "2rem",
                      }}
                      onClick={handleOpen}
                    >
                      Edit Profile
                    </Button>

                    <Dialog
                      open={open}
                      onClose={handleClose}
                      fullWidth
                      maxWidth="sm"
                    >
                      <DialogTitle>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="h6">Edit Profile</Typography>
                          <IconButton onClick={handleClose}>
                            <CloseIcon />
                          </IconButton>
                        </Box>
                      </DialogTitle>

                      <Box sx={{ padding: "1rem" }}>
                        {/* Phone Number Section */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "1rem",
                          }}
                        >
                          <Box>
                            <Typography variant="subtitle1" gutterBottom>
                              Phone Number
                            </Typography>
                            {isEditingPhone ? (
                              <TextField
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                variant="outlined"
                                size="small"
                              />
                            ) : (
                              <Typography variant="body1">
                                {phoneNumber}
                              </Typography>
                            )}
                          </Box>
                          <Button
                            sx={{ color: "#fe0604", fontWeight: "bold" }}
                            onClick={handlePhoneChange}
                          >
                            {isEditingPhone ? "SAVE" : "CHANGE"}
                          </Button>
                        </Box>

                        {/* Email Section */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography variant="subtitle1" gutterBottom>
                              Email id
                            </Typography>
                            {isEditingEmail ? (
                              <TextField
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant="outlined"
                                size="small"
                              />
                            ) : (
                              <Typography variant="body1">{email}</Typography>
                            )}
                          </Box>
                          <Button
                            sx={{ color: "#fe0604", fontWeight: "bold" }}
                            onClick={handleEmailChange}
                          >
                            {isEditingEmail ? "SAVE" : "CHANGE"}
                          </Button>
                        </Box>
                      </Box>
                    </Dialog>
                  </Box>
                </Box>
              )}

              {/* Tabs in Sidebar for larger screens */}
              <Box sx={{ display: "flex", width: "100%" }}>
                {!isSmallScreen && (
                  <Box sx={{ marginTop: "6rem" }}>
                    <Tabs
                      orientation="vertical"
                      value={selectedTab}
                      onChange={handleTabChange}
                      textColor="red"
                      indicatorColor="red"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start", // Ensures the tabs are aligned to the left
                        alignItems: "start",
                      }}
                    >
                      <Tab
                        label="Orders"
                        sx={{
                          color: "gray",
                          // justifyContent: "flex-start",
                          // textAlign: "left",
                          "&:hover": {
                            color: "#fe0604",
                          },
                        }}
                      />
                      <Tab
                        label="Address"
                        sx={{
                          color: "gray",
                          // justifyContent: "flex-start",
                          // textAlign: "left",
                          "&:hover": {
                            color: "#fe0604",
                          },
                        }}
                      />
                      <Tab
                        label="Setting"
                        sx={{
                          color: "gray",
                          // justifyContent: "flex-start",
                          // textAlign: "left",
                          "&:hover": {
                            color: "#fe0604",
                          },
                        }}
                      />
                      <Tab
                        label="Privacy Policy"
                        sx={{
                          color: "gray",
                          // justifyContent: "flex-start",
                          // textAlign: "left",
                          "&:hover": {
                            color: "#fe0604",
                          },
                        }}
                      />
                      <Tab
                        label="Installation"
                        sx={{
                          color: "gray",
                          // justifyContent: "flex-start",
                          // textAlign: "left",
                          "&:hover": {
                            color: "#fe0604",
                          },
                        }}
                      />
                    </Tabs>
                  </Box>
                )}

                {/* Content Area */}
                <Box
                  sx={{
                    flexGrow: 1,
                    p: 2,
                    display: showContent || !isSmallScreen ? "block" : "none",
                    // bgcolor: "pink",
                    marginRight: "2rem",
                    marginLeft: isSmallScreen ? "0" : "2rem",
                    width: "90%", // Ensure proper content width
                  }}
                >
                  {isSmallScreen && showContent && (
                    <Button
                      onClick={handleBackClick}
                      startIcon={<ArrowBackIcon />}
                      sx={{ color: "#fe0604" }}
                    >
                      Back
                    </Button>
                  )}
                  {selectedTab === 0 && (
                    <>
                      {/* Large screen layout */}

                      <Box
                        sx={{
                          display: { xs: "none", md: "block" }, // Show on tablet and larger screens
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            fontFamily: "poppins",
                            marginTop: "5rem",
                            ml: "3rem",
                          }}
                        >
                          Past Orders
                        </Typography>

                        {/* Display Loading Spinner or Error Message */}
                        {isLoading && <ProfileShimmer />}
                        {error && (
                          <Typography color="error">Error: {error}</Typography>
                        )}

                        {!isLoading && !error && dummy.length === 0 && (
                          <Typography>No past orders found.</Typography>
                        )}

                        {/* Map through the dummy orders */}
                        <Box
                          sx={{
                            display: "flex", // Flex container for multiple cards
                            flexWrap: "wrap", // Allows cards to wrap to the next line if needed
                            gap: "1.5rem", // Space between cards
                            marginLeft: "2rem",
                          }}
                        >
                          {dummy.map((order) => (
                            <Box
                              key={order.id}
                              sx={{
                                height: "220px",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                mt: 2,
                                display: "flex",
                                flexDirection: "column", // Ensures items stack vertically
                                justifyContent: "space-between",
                                "@media (min-width: 1024px) and (max-width: 1336px)":
                                  {
                                    width: "400px",
                                  },
                                "@media (min-width: 912px) and (max-width: 1368px)":
                                  {
                                    width: "400px",
                                  },
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  marginTop: "1rem",
                                }}
                              >
                                {/* Image */}
                                <img
                                  src={order.image}
                                  alt={order.dishName}
                                  style={{
                                    width: "150px",
                                    height: "100px",
                                    marginLeft: "1rem",
                                    objectFit: "cover",
                                  }}
                                />
                                <Box
                                  sx={{
                                    height: "100px",
                                    width: "678px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <Typography sx={{ fontSize: "17px" }}>
                                    {order.dishName}
                                  </Typography>
                                  <Typography sx={{ fontSize: "17px" }}>
                                    Price: ₹{order.price}
                                  </Typography>
                                  <Typography sx={{ fontSize: "17px" }}>
                                    Total Price: ₹{order.totalPrice}
                                  </Typography>
                                  <Typography sx={{ fontSize: "17px" }}>
                                    Quantity: {order.quantity}
                                  </Typography>
                                </Box>
                              </Box>

                              <Box
                                sx={{
                                  height: "100px",
                                  width: "828px",
                                  marginLeft: "1.8rem",
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: "1rem",
                                    flexDirection: "row",
                                    marginTop: "2rem",
                                  }}
                                >
                                  <Button
                                    sx={{
                                      // height: "40px",
                                      // width: "120px",
                                      backgroundColor: "#fe0604",
                                      color: "#fff",
                                      "&:hover": {
                                        backgroundColor: "#fe0604",
                                        color: "#fff",
                                      },
                                    }}
                                  >
                                    REORDER
                                  </Button>
                                  <Button
                                    sx={{
                                      // height: "40px",
                                      // width: "120px",
                                      border: "1px solid #fe0604",
                                      color: "#fe0604",
                                    }}
                                  >
                                    HELP
                                  </Button>
                                </Box>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      {/* Small screen layout */}
                      <Box
                        sx={{
                          display: { xs: "block", md: "none" }, // Show on small screens
                          width: "100%",
                          padding: "1rem",
                          // backgroundColor: "#f8f8f8",
                          marginTop: "1.5rem",
                          "@media (max-width: 600px)": {
                            padding: "0.5rem",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "1rem",
                          }}
                        >
                          {/* <Typography
                          sx={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          Restaurants
                        </Typography> */}
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontWeight: "bold",
                              color: "#686B78",
                              marginTop: "3rem",
                            }}
                          >
                            Past Orders
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            backgroundColor: "white",
                            padding: "1rem",
                            borderRadius: "4px",
                            display: "flex", // Flex container for multiple cards
                            flexWrap: "wrap", // Allows cards to wrap to the next line if needed
                            gap: "1.5rem", // Space between cards
                          }}
                        >
                          {dummy.length > 0 ? (
                            dummy.map((order) => (
                              <Box key={order.id} sx={{ marginBottom: "1rem" }}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src={order.image}
                                    alt={order.dishName}
                                    style={{
                                      width: "100px",
                                      height: "100px",
                                      marginLeft: "1rem",
                                      objectFit: "cover",
                                    }}
                                  />
                                  <Box
                                    // sx={{
                                    //   display: "flex",
                                    //   justifyContent: "space-between",
                                    //   alignItems: "center",
                                    // }}
                                    sx={{
                                      // height: "100px",
                                      // width: "678px",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    {/* <Typography
                                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                                >
                                  {order.restaurantName}
                                </Typography> */}

                                    <Typography sx={{ fontSize: "14px" }}>
                                      {order.dishName}
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px" }}>
                                      Price: ₹{order.price}
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px" }}>
                                      Total Price: ₹{order.totalPrice}
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px" }}>
                                      Quantity: {order.quantity}
                                    </Typography>
                                  </Box>
                                </Box>
                                <Typography
                                  sx={{
                                    fontSize: "12px",
                                    color: "#686B78",
                                    marginTop: "0.5rem",
                                  }}
                                >
                                  {order.location}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    marginTop: "0.5rem",
                                  }}
                                >
                                  {/* ₹{order.totalPrice} */}
                                </Typography>
                                {/* <Divider sx={{ margin: "1rem 0" }} /> */}
                                <Typography
                                  sx={{ fontSize: "12px", color: "#686B78" }}
                                >
                                  {/* {order.dishName} [{order.quantity}] */}
                                </Typography>
                                <Typography
                                  sx={{ fontSize: "12px", color: "#686B78" }}
                                >
                                  {order.date}
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "1rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Button
                                    variant="outlined"
                                    sx={{
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                      color: "#fe0604",
                                      padding: "0.5rem 1rem",
                                      // width: "30%",
                                      border: "1px solid red", // Ensure border is within sx prop
                                    }}
                                  >
                                    REORDER
                                  </Button>

                                  <Button
                                    variant="outlined"
                                    sx={{
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                      borderColor: "#fe0604",
                                      color: "#fe0604",
                                      padding: "0.5rem 1rem",
                                      // width: "45%",
                                    }}
                                  >
                                    RATE ORDER
                                  </Button>
                                </Box>
                                <Divider sx={{ margin: "1rem 0" }} />
                              </Box>
                            ))
                          ) : (
                            <Typography>No past orders found.</Typography>
                          )}
                        </Box>
                      </Box>
                    </>
                  )}

                  {selectedTab === 1 && (
                    <>
                      <Box
                        sx={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          fontFamily: "poppins",
                          marginTop: "3rem",
                          marginBottom: "1rem",
                        }}
                      >
                        {false ? (
                          // Display the GIF when address data is empty
                          <Box sx={{ border: "1px solid blue" }}>
                            {/* <img src={AddressGIF} alt="No Address Available" /> */}
                            <h1>Getting Address</h1>
                          </Box>
                        ) : (
                          <>
                            <Typography
                              sx={{
                                fontSize: "24px",
                                fontWeight: "bold",
                                fontFamily: "poppins",
                                marginTop: "3rem",
                                marginBottom: "1rem",
                              }}
                            >
                              Manage Address
                            </Typography>
                            <Grid
                              container
                              justifyContent="center"
                              spacing={2}
                              sx={{ width: "100%" }} // Ensure it takes the full width
                            >
                              {address.map((addressData) => (
                                <>
                                  <Grid
                                    item
                                    xs={12} // Takes full width on extra-small screens
                                    sm={6} // Half-width on small screens
                                    md={4} // Third-width on medium screens
                                    // sx={{ border: "1px solid blue" }}
                                  >
                                    <Box
                                      sx={{
                                        backgroundColor: "#fff",
                                        padding: { xs: "1rem", md: "2rem" }, // Responsive padding
                                        width: "300px", // Set max width for consistency across cards
                                        borderRadius: "10px",
                                        boxShadow:
                                          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
                                      }}
                                    >
                                      <Box
                                        className="card"
                                        key={addressData._id}
                                      >
                                        <Box
                                          className="header"
                                          sx={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "center",
                                            ml: "-10px",
                                            gap: "5px",
                                          }}
                                        >
                                          <LocationOnIcon
                                            sx={{
                                              fontSize: {
                                                xs: "25px",
                                                md: "30px",
                                              }, // Responsive icon size
                                              color: "#ff0000",
                                            }}
                                          />
                                          <Typography
                                            variant="body1"
                                            sx={{
                                              overflow: "hidden",
                                              display: "-webkit-box",
                                              WebkitBoxOrient: "vertical",
                                              marginTop: "0.25rem",
                                              fontSize: {
                                                xs: "1rem",
                                                md: "1.185rem",
                                              }, // Responsive font size
                                              lineHeight: {
                                                xs: "1.5rem",
                                                md: "1.75rem",
                                              }, // Responsive line height
                                              fontWeight: 600,
                                              color:
                                                "rgba(55, 65, 81, var(--tw-text-opacity))",
                                            }}
                                          >
                                            Address
                                          </Typography>
                                        </Box>
                                        <Typography
                                          variant="body1"
                                          sx={{
                                            overflow: "hidden", // Hide overflow text
                                            textOverflow: "ellipsis", // Add ellipsis when text is too long
                                            whiteSpace: "nowrap", // Prevent the text from wrapping to the next line
                                            marginTop: "1rem",
                                            color: "rgba(107, 114, 128, 1)",
                                          }}
                                        >
                                          {addressData.address
                                            .split(" ")
                                            .slice(0, 10)
                                            .join(" ") +
                                            (addressData.address.split(" ")
                                              .length > 10
                                              ? "..."
                                              : "")}
                                        </Typography>

                                        <Stack
                                          spacing={2}
                                          direction={"row"}
                                          sx={{ mt: 2 }}
                                        >
                                          <IconButton
                                            sx={{
                                              bgcolor: "#ff0000",
                                              ":hover": { bgcolor: "#ff0000" },
                                            }}
                                            onClick={() =>
                                              toggleEditDialog(addressData._id)
                                            }
                                          >
                                            <EditLocationAltIcon
                                              sx={{ color: "#fff" }}
                                            />
                                          </IconButton>
                                          <IconButton
                                            sx={{
                                              bgcolor: "#ff0000",
                                              ":hover": { bgcolor: "#ff0000" },
                                            }}
                                            onClick={() =>
                                              deleteHandleClick(addressData._id)
                                            }
                                          >
                                            <DeleteIcon
                                              sx={{ color: "#fff" }}
                                            />
                                          </IconButton>
                                        </Stack>
                                      </Box>
                                    </Box>
                                  </Grid>
                                </>
                              ))}
                            </Grid>
                          </>
                        )}

                        {/* Edit Dialog */}
                        <EditModal
                          inputValue={inputValue}
                          handleInputChange={handleInputChange}
                          handleSaveClick={handleSaveClick}
                          openEditDialog={openEditDialog}
                          toggleEditDialog={toggleEditDialog}
                        />

                        {isSmallScreen && (
                          <Box>
                            <Button
                              sx={{
                                marginTop: "1rem",
                                border: "1px solid #fe0604",
                                color: "#fe0604",
                                "&:hover": {
                                  cursor: "pointer",
                                },
                              }}
                              onClick={handleClickOpen}
                            >
                              ADD NEW ADDRESS
                            </Button>

                            {/* Dialog (popup) for adding address */}
                            <Dialog open={open} onClose={handleClose}>
                              <DialogTitle>Add New Address</DialogTitle>
                              <DialogContent>
                                <TextField
                                  label="Phone Number"
                                  variant="outlined"
                                  fullWidth
                                  margin="normal"
                                />
                                <TextField
                                  label="Address"
                                  variant="outlined"
                                  fullWidth
                                  margin="normal"
                                />
                              </DialogContent>
                              <DialogActions>
                                <Button
                                  onClick={handleClickClose}
                                  color="primary"
                                >
                                  Cancel
                                </Button>
                                <Button
                                  onClick={handleClickClose}
                                  color="primary"
                                >
                                  Save
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </Box>
                        )}
                      </Box>
                    </>
                  )}

                  {selectedTab === 2 && (
                    <>
                      {/* Large screen layout */}
                      <Box
                        sx={{
                          display: { xs: "none", md: "block" }, // Hide on small screens, show on medium and large screens
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            fontFamily: "Poppins",
                            marginTop: "5rem",
                          }}
                        >
                          SMS Preferences
                        </Typography>
                        <Box
                          sx={{
                            height: "50px",
                            width: "860px",
                            border: "1px solid #686B78",
                            display: "flex",
                            alignItems: "center",
                            marginTop: "2rem",
                            "@media (min-width: 768px) and (max-width: 1024px)":
                              {
                                width: "530px",
                              },
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "14px", marginLeft: "1rem" }}
                          >
                            Order related SMS cannot be disabled as they are
                            critical to provide service
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            height: "93px",
                            width: "860px",
                            border: "1px solid #686B78",
                            marginTop: "1.5rem",
                            display: "flex",
                            "@media (min-width: 768px) and (max-width: 1024px)":
                              {
                                width: "530px",
                              },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: "1.5rem",
                              "@media (min-width: 375px) and (max-width: 667px)":
                                {
                                  marginLeft: "5px",
                                },
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                "@media (min-width: 375px) and (max-width: 667px)":
                                  {
                                    fontSize: "10px",
                                  },
                              }}
                            >
                              Recommendations & Reminders
                            </Typography>

                            <div>
                              <Switch
                                {...label}
                                defaultChecked
                                sx={{
                                  "& .MuiSwitch-switchBase.Mui-checked": {
                                    color: "#fe0604",
                                  },
                                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                                    {
                                      backgroundColor: "#fe0604",
                                    },
                                }}
                              />
                            </div>
                          </Box>

                          <Box
                            sx={{
                              width: "1px",
                              backgroundColor: "#686B78",
                              margin: "1rem 1rem",
                            }}
                          />

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "14px",
                                "@media (min-width: 375px) and (max-width: 667px)":
                                  {
                                    fontSize: "10px",
                                  },
                              }}
                            >
                              Keep this on to receive offer recommendations &
                              timely reminders based on your interests
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      {/* Small screen layout */}
                      <Box
                        sx={{
                          display: { xs: "block", md: "none" }, // Show on small screens, hide on medium and large screens
                          width: "100%",
                          padding: "1rem",
                          // backgroundColor: "#f8f8f8",
                        }}
                      >
                        {/* SMS Preferences */}
                        <Box
                          sx={{
                            backgroundColor: "white",
                            padding: "1rem",
                            borderRadius: "4px",
                            marginBottom: "1rem",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              color: "#686B78",
                              marginBottom: "0.5rem",
                              marginTop: "4rem",
                            }}
                          >
                            SMS Preferences
                          </Typography>
                          <Typography
                            sx={{ fontSize: "12px", color: "#686B78" }}
                          >
                            Order related SMS cannot be disabled as they are
                            critical to provide service
                          </Typography>
                        </Box>

                        {/* Recommendations & Reminders */}
                        <Box
                          sx={{
                            backgroundColor: "white",
                            padding: "1rem",
                            borderRadius: "4px",
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "1rem",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: "0.5rem",
                            }}
                          >
                            <Typography
                              sx={{ fontSize: "14px", fontWeight: "bold" }}
                            >
                              Recommendations & Reminders
                            </Typography>
                            <Switch
                              {...label}
                              defaultChecked
                              sx={{
                                "& .MuiSwitch-switchBase.Mui-checked": {
                                  color: "#fe0604",
                                },
                                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                                  {
                                    backgroundColor: "#fe0604",
                                  },
                              }}
                            />
                          </Box>
                          <Typography
                            sx={{ fontSize: "12px", color: "#686B78" }}
                          >
                            Keep this on to receive offer recommendations &
                            timely reminders based on your interests
                          </Typography>
                        </Box>

                        {/* Account Deletion */}
                        <Box
                          sx={{
                            backgroundColor: "white",
                            padding: "1rem",
                            borderRadius: "4px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              color: "#686B78",
                              marginBottom: "0.5rem",
                            }}
                          >
                            Account Deletion
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "14px",
                              color: "#fe0604",
                              fontWeight: "bold",
                              cursor: "pointer",
                            }}
                          >
                            Delete account
                          </Typography>
                        </Box>
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
