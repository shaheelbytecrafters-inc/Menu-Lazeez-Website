import React, { useState } from "react";
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
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ComputerIcon from "@mui/icons-material/Computer";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function SidebarWithTabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (isSmallScreen) {
      setShowContent(true); 
    }
  };

  const handleBackClick = () => {
    setShowContent(false); 
  };

  return (
    <Box bgcolor="red" width="100vw">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "yellow",
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            marginLeft: isSmallScreen ? "0" : "3.8rem", 
          }}
        >
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              marginLeft: isSmallScreen ? "0.4rem" : "-1rem", 
              marginTop: isSmallScreen ? "0" : "4rem", 
            }}
          >
            {isSmallScreen ? (
              !showContent && (
                <Box sx={{ padding: "1rem", marginTop: "0" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "poppins",
                      color: "#000",
                      fontSize: isSmallScreen ? "16px" : "24px",
                    }}
                  >
                    Eram Khan
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#000" }}>
                    8368767396
                  </Typography>
                  <Button
                    sx={{
                      color: "#fe0604",
                      border: "1px solid #fe0604",
                      fontWeight: "bold",
                      marginTop: "0.5rem",
                      fontSize: isSmallScreen ? "10px" : "24px",
                    }}
                  >
                    Edit Profile
                  </Button>
                  <Divider sx={{ width: "90%", marginTop: "10px" }} />{" "}
                  {!showContent && isSmallScreen && (
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "1rem",
                        marginTop: "1rem", 
                      }}
                    >
                      <Typography
                        onClick={(event) => handleTabChange(event, 0)}
                        sx={{
                          cursor: "pointer",
                          color: "#fe0604",
                          width: "81vw",
                          textAlign: "left",
                          padding: "0.5rem 0",
                        }}
                      >
                        Orders
                      </Typography>
                      <Divider sx={{ width: "90%" }} />{" "}
                      {/* Full width horizontal line */}
                      <Typography
                        onClick={(event) => handleTabChange(event, 1)}
                        sx={{
                          cursor: "pointer",
                          color: "#fe0604",
                          width: "100%", 
                          textAlign: "left", 
                          padding: "0.5rem 0", 
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
                          width: "100%", 
                          textAlign: "left", 
                          padding: "0.5rem 0",
                        }}
                      >
                        Setting
                      </Typography>
                      <Divider sx={{ width: " 100%" }} />
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
                      justifyContent: "space-between",
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
                        Eram Khan
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "1rem",
                          fontSize: "16px",
                          color: "#fff",
                        }}
                      >
                        <Typography variant="body2">8368767396</Typography>
                        <Typography>eram123@gmail.com</Typography>
                      </Box>
                    </Box>

                    {/* Align button in the same row */}
                    <Button
                      sx={{
                        color: "#fff",
                        border: "1.5px solid #fff",
                        fontWeight: "bold",
                      }}
                    >
                      Edit Profile
                    </Button>
                  </Box>
                </Toolbar>
              </AppBar>
            )}

            <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
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
                  </Tabs>
                </Box>
              )}
              <Box
                sx={{
                  flexGrow: 1,
                  p: 2,
                  display: showContent || !isSmallScreen ? "block" : "none",
                  bgcolor: "black",
                  marginRight: "4rem",
                  width: "90%",
                }}
              >
                {isSmallScreen && showContent && (
                  <Button
                    onClick={handleBackClick}
                    startIcon={<ArrowBackIcon />}
                    sx={{ marginBottom: "1rem", color: "#fe0604" }}
                  >
                    Back
                  </Button>
                )}

                {selectedTab === 0 && (
                  <>
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
                        mt: 2, 
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "1.5rem",
                        }}
                      >
                        <img
                          src="https://content.jdmagicbox.com/comp/kota-rajasthan/a4/9999px744.x744.191022231804.z1a4/catalogue/jaipuri-chicken-biryani-dada-bari-kota-rajasthan-north-indian-delivery-restaurants-h36c8o0sr5.jpg"
                          alt="Example"
                          style={{
                            width: "150px",
                            height: "100px",
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
                            Biryani By Killo
                          </Typography>
                          <Typography sx={{ fontSize: "13px" }}>
                            Marathahalli
                          </Typography>
                          <Typography sx={{ fontSize: "12px" }}>
                            ORDER #165591635533314 | Tue, Jan 30, 2024, 07:10 PM
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
                      <Box/>

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
                      }}
                    >
                      <Box
                        sx={{
                          height: "134px",
                          width: "400px",
                          border: "1px solid black",
                          marginTop: "2rem",
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <ComputerIcon sx={{ marginRight: "8px" }} />
                          <Box sx={{ marginLeft: "1rem", flex: 1 }}>
                            <Typography
                              sx={{ fontSize: "17px", fontWeight: "bold" }}
                            >
                              Work
                            </Typography>
                            <Typography
                              sx={{ fontSize: "13px", color: "#535665" }}
                            >
                              Dwarka Sector 10, Pocket 2, Dwarka Sector 9,
                              Dwarka, New Delhi, Delhi 110077, India
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                marginTop: "1rem",
                                gap: "1rem",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                  color: "#fe0604",
                                  "&:hover": {
                                    color: "black",
                                    cursor: "pointer",
                                  },
                                }}
                              >
                                EDIT
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                  color: "#fe0604",
                                  "&:hover": {
                                    color: "black",
                                    cursor: "pointer",
                                  },
                                }}
                              >
                                DELETE
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Typography>
                  </>
                )}

                {selectedTab === 2 && (
                  <>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        fontFamily: "poppins",
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
                        "@media (min-width: 820px) and (max-width: 1180px)": {
                          width: "400px",
                        },
                        "@media (min-width: 1024px) and (max-width: 1366px)": {
                          width: "700px",
                        },
                        "@media (min-width: 375px) and (max-width: 667px)": {
                          width: "300px",
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: "14px", marginLeft: "1rem" }}>
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
                        "@media (min-width: 820px) and (max-width: 1180px)": {
                          width: "520px",
                        },
                        "@media (min-width: 1024px) and (max-width: 1366px)": {
                          width: "700px",
                        },
                        "@media (min-width: 375px) and (max-width: 667px)": {
                          width: "400px",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: "1.5rem",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "bold" }}
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
                        <Typography sx={{ fontSize: "14px" }}>
                          Keep this on to receive offer recommendations & timely{" "}
                          reminders based on your interests
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

export default SidebarWithTabs