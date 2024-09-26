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

const label = { inputProps: { "aria-label": "Switch demo" } };

function Profile() {
  const [selectedTab, setSelectedTab] = useState(0); // Track selected tab
  const [showContent, setShowContent] = useState(false); // Manage content view in small
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [specificAddressId, setSpecificAddressId] = useState("");
  // console.log("InputValue=========================", inputValue);
  // console.log("==================specific", specificAddressId);

  // console.log(specificAddress);
  // console.log("hejkreeeeeeeeeee", inputValue);
  // console.log("InputValue=++++++++++++++++++++++++++",inputValue)
  // console.log("Eram Khan 1 ", specificAddress, typeof(specificAddress))
  // const addressList = [
  //   {
  //     id: 1,
  //     title: "Work",
  //     address: "1234, Elm Street, Apt 56, City ",
  //     contactNumber: "123-456-7890",
  //   },
  //   {
  //     id: 2,
  //     title: "Home",
  //     address: "9876, Oak Street, Apt 45, Town",
  //     contactNumber: "987-654-3210",
  //   },
  //   {
  //     id: 3,
  //     title: "Other",
  //     address: "5678, Maple Street, Apt 23, Village",
  //     contactNumber: "567-890-1234",
  //   },
  // ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (isSmallScreen) {
      setShowContent(true); // Show content when paragraph is clicked on small screens
    }
  };

  // const toggleEditDialog = (addressID) => {
  //   const addressObject = address.filter((ele) => ele._id === addressID);
  //   console.log("addressObject", addressObject);
  //   const addressEdit = addressObject[0].address;
  //   console.log("SpecificAddress=======", addressEdit);
  //   setSpecificAddress(addressEdit);
  //   setOpenEditDialog(!openEditDialog);
  // };
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

  // Handle input field change
  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

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

  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("8368767396");
  const [email, setEmail] = useState("eram123@gmail.com");
  const dispatch = useDispatch();

  const {
    profileData,
    loading: profileLoading,
    error: profileError,
  } = useSelector((state) => state.profile);

  const {
    address,
    loading: addressLoading,
    error: addressError,
  } = useSelector((state) => state.address);

  const handlePhoneChange = () => {
    if (isEditingPhone) {
      const profileData = JSON.parse(localStorage.getItem("userData"));
      const profileId = profileData._id;
      dispatch(editProfile({ profileId, phoneNumber }));
    }
    setIsEditingPhone(!isEditingPhone);
  };

  // Fetching profile data
  useEffect(() => {
    const profileData = JSON.parse(localStorage.getItem("userData"));
    const profileId = profileData._id;
    // dispatch(fetchProfile(profileId));
    // console.log(profileId);
    console.log("Profile Data:++++++++++++++ ", profileData);
  }, [dispatch]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    const userId = user._id;

    // const addressId = "66ee23f03a5235f2c188e1e3"; // Address ID for the API request
    dispatch(getAddress(userId));
  }, [dispatch]);

  const deleteHandleClick = (addressId) => {
    console.log("addressIdSpecific====================", addressId);
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
    console.log(
      "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
      address,
      addressID
    );
    dispatch(editAddress({ addressID, address }));

    setOpenEditDialog(false);
  };

  //  useEffect(() => {
  //    dispatch(deleteAddress());
  //  }, [dispatch]);
  // Update state with fetched profile data once it's available
  useEffect(() => {
    if (profileData && Object.keys(profileData).length > 1) {
      setPhoneNumber(profileData.data.phoneNumber);
      setEmail(profileData.data.email);
    }
  }, [profileData]);

  if (profileLoading) {
    return <div>Loading...</div>;
  }

  if (profileError) {
    return <div>Error: {profileError}</div>;
  }

  if (!profileData) {
    return <div>No profile data available</div>;
  }

  if (addressLoading) {
    return <div>Loading address...</div>;
  }

  if (addressError) {
    return <div>Error loading address: {addressError}</div>;
  }

  return (
    <Box bgcolor="red" width="100vw">
      <Box
        sx={{
          backgroundColor: isSmallScreen ? "#fff" : "#fe0604", // Change background to white on small screens
          width: "100%",
          // height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fe0604",
        }}
      >
        <Box
          sx={{
            width: "100%", // Ensure the box takes the full width
            backgroundColor: "#fff",
            marginLeft: isSmallScreen ? "0" : "3.8rem", // Remove margin on small screens
          }}
        >
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              marginLeft: isSmallScreen ? "0.4rem" : "-1rem", // Remove left margin on small screens
              marginTop: isSmallScreen ? "0" : "2rem", // Remove top margin on small screens
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
                    {Object.keys(profileData).length > 1 &&
                      profileData.data.username}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#000" }}>
                    {Object.keys(profileData).length > 1 &&
                      profileData.data.phoneNumber}
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
                  <Divider sx={{ width: "100%", marginTop: "10px" }} />{" "}
                  {/* Full width horizontal line */}
                  {/* Tabs (paragraphs) below the "Edit Profile" button */}
                  {!showContent && isSmallScreen && (
                    <Box
                      sx={{
                        width: "100%", // Make the full width
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
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
              <AppBar
                sx={{
                  backgroundColor: "#fe0604",
                  zIndex: 1201,
                  padding: "0.5rem",
                  marginTop: "4.5rem",
                }}
              >
                <Toolbar>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between", // Align the name, phone number, and button in one line
                      alignItems: "center",
                      flexGrow: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "poppins",
                          color: "#fff",
                          fontSize: "32px",
                        }}
                      >
                        {Object.keys(profileData).length > 1 &&
                          profileData.data.username}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "1rem",
                          fontSize: "16px",
                          color: "#fff",
                        }}
                      >
                        <Typography variant="body2">
                          {Object.keys(profileData).length > 1 &&
                            profileData.data.phoneNumber}
                        </Typography>
                        <Typography>
                          {Object.keys(profileData).length > 1 &&
                            profileData.data.email}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Align button in the same row */}
                    <Button
                      sx={{
                        color: "#fff",
                        border: "1.5px solid #fff",
                        fontWeight: "bold",
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
                </Toolbar>
              </AppBar>
            )}

            {/* Main Content with Sidebar */}
            <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
              {/* Tabs in Sidebar for larger screens */}
              {!isSmallScreen && (
                <Box sx={{ width: "20%", marginTop: "5rem" }}>
                  <Tabs
                    orientation="vertical"
                    value={selectedTab}
                    onChange={handleTabChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                  >
                    <Tab label="Orders" />
                    <Tab label="Address" />
                    <Tab label="Setting" />
                    <Tab label="Privacy Policy" />
                    <Tab label="Installation" />
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
                          marginTop: "3rem",
                        }}
                      >
                        Past Orders
                      </Typography>
                      <Box
                        sx={{
                          height: "281px",
                          border: "1px solid #fe0604",
                          mt: 2, // Margin Top for Spacing
                          "@media (min-width: 1024px) and (max-width: 1336px)":
                            {
                              width: "600px",
                            },
                          "@media (min-width: 912px) and (max-width: 1368px)": {
                            width: "600px",
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
                          {/* Image inside the Box */}
                          <img
                            src="https://content.jdmagicbox.com/comp/kota-rajasthan/a4/9999px744.x744.191022231804.z1a4/catalogue/jaipuri-chicken-biryani-dada-bari-kota-rajasthan-north-indian-delivery-restaurants-h36c8o0sr5.jpg"
                            alt="Example"
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
                              Biryani By Kilo
                            </Typography>
                            <Typography sx={{ fontSize: "13px" }}>
                              Marathahalli
                            </Typography>
                            <Typography sx={{ fontSize: "12px" }}>
                              ORDER #165591635533314 | Tue, Jan 30, 2024, 07:10
                              PM
                            </Typography>
                            <Button
                              sx={{
                                fontSize: "14px",
                                color: "#fe0604",
                                fontWeight: "bold",
                              }}
                            >
                              VIEW DETAILS
                            </Button>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            height: "100px",
                            width: "828px",
                            marginLeft: "1.8rem",
                          }}
                        >
                          <Box>
                            <Typography>Masala Dosa x 1</Typography>
                            <Typography>Total Paid: ₹247</Typography>
                          </Box>
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
                                height: "40px",
                                width: "120px",
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
                                height: "40px",
                                width: "120px",
                                border: "1px solid #fe0604",
                                color: "#fe0604",
                              }}
                            >
                              HELP
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    {/* Small screen layout */}
                    <Box
                      sx={{
                        display: { xs: "block", md: "none" }, // Show on small screens
                        width: "100%",
                        padding: "1rem",
                        backgroundColor: "#f8f8f8",
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
                        <Typography
                          sx={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          Restaurants
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            color: "#686B78",
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
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Biryani By Kilo
                          </Typography>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#686B78",
                                marginRight: "0.5rem",
                              }}
                            >
                              Delivered
                            </Typography>
                            <CheckCircleIcon
                              sx={{ color: "#28a745", fontSize: "18px" }}
                            />
                          </Box>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#686B78",
                            marginTop: "0.5rem",
                          }}
                        >
                          Sarjapur Road
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            marginTop: "0.5rem",
                          }}
                        >
                          ₹296
                        </Typography>
                        <Divider sx={{ margin: "1rem 0" }} />
                        <Typography sx={{ fontSize: "12px", color: "#686B78" }}>
                          Chicken Hyderabadi Dum Biryani [1/2 kg] (1)
                        </Typography>
                        <Typography sx={{ fontSize: "12px", color: "#686B78" }}>
                          August 10, 9:49 PM
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "1rem",
                          }}
                        >
                          <Button
                            variant="outlined"
                            sx={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              borderColor: "#686B78",
                              color: "#000",
                              padding: "0.5rem 1rem",
                              width: "48%",
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
                              width: "48%",
                            }}
                          >
                            RATE ORDER
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}

                {selectedTab === 1 && (
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
                      <Box
                        sx={{
                          display: "flex",
                          gap: "2rem",
                          flexWrap: "wrap",
                        }}
                      >
                        {address.map((addressData) => (
                          <Box
                            key={addressData._id}
                            sx={{
                              height: "134px",
                              width: "400px",
                              border: "1px solid black",
                              padding: "1rem",
                              borderRadius: "5px",
                              "@media (min-width: 375px) and (max-width: 667px)":
                                {
                                  width: "300px",
                                },
                            }}
                          >
                            {/* Left side: Icon and address information */}
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <PlaceIcon sx={{ fontSize: "2rem" }} />
                              <Box sx={{ marginLeft: "1rem" }}>
                                <Typography
                                  sx={{ fontSize: "17px", fontWeight: "bold" }}
                                >
                                  {addressData.title}
                                </Typography>
                                <Typography
                                  sx={{ fontSize: "13px", color: "#535665" }}
                                >
                                  {addressData.address}
                                </Typography>
                                <Typography
                                  sx={{ fontSize: "13px", color: "#535665" }}
                                >
                                  {addressData.contactNumber}
                                </Typography>
                              </Box>
                            </Box>

                            {/* Right side: Edit and Delete buttons */}
                            <Box
                              sx={{
                                display: "flex",
                                gap: "1rem",
                                marginTop: "1rem",
                              }}
                            >
                              <Button
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                  color: "#fe0604",
                                  "&:hover": {
                                    color: "black",
                                    cursor: "pointer",
                                  },
                                }}
                                onClick={() =>
                                  toggleEditDialog(addressData._id)
                                }
                              >
                                EDIT
                              </Button>

                              <Button
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                  color: "#fe0604",
                                  "&:hover": {
                                    color: "black",
                                    cursor: "pointer",
                                  },
                                }}
                                onClick={() => {
                                  deleteHandleClick(addressData._id);
                                }}
                              >
                                DELETE
                              </Button>
                            </Box>
                          </Box>
                        ))}
                        {/* Edit Dialog */}
                        <Dialog
                          open={openEditDialog}
                          onClose={toggleEditDialog}
                        >
                          <DialogTitle>Edit Address</DialogTitle>
                          <DialogContent>
                            <TextField
                              autoFocus
                              margin="dense"
                              label="Edit address"
                              type="text"
                              fullWidth
                              variant="outlined"
                              value={inputValue}
                              onChange={handleInputChange}
                              placeholder="Enter your address"
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={() => toggleEditDialog()}
                              color="primary"
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={() => {
                                toggleEditDialog(); // First function
                                handleSaveClick(); // Second function
                                // {console.log("==========================++++++++++++++++++++++",addressData._id)}
                              }}
                            >
                              Save
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </Box>
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
                    </Typography>
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
                          marginTop: "3rem",
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
                          "@media (min-width: 768px) and (max-width: 1024px)": {
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
                          "@media (min-width: 768px) and (max-width: 1024px)": {
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
                        backgroundColor: "#f8f8f8",
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
                          }}
                        >
                          SMS Preferences
                        </Typography>
                        <Typography sx={{ fontSize: "12px", color: "#686B78" }}>
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
                        <Typography sx={{ fontSize: "12px", color: "#686B78" }}>
                          Keep this on to receive offer recommendations & timely
                          reminders based on your interests
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
  );
}

export default Profile;
