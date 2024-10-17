import React, { useState } from "react";
import {
  Drawer,
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Profile() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "red", width:"100vw" }}>
      <Box sx={{ width: "94vw", backgroundColor: "#fff", marginLeft:"3.8rem" }}>
        <Box
          sx={{
            height: "100vh",
            marginTop: "4rem",  
            display: "flex",
            marginLeft: "-1rem",
          }}
        >
          {/* Navbar at the Top */}
          <AppBar
            position="fixed"
            sx={{ backgroundColor: "#fe0604", zIndex: 1201, padding: "0.5rem"}}
          >
            <Toolbar>
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
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
              <Button
                sx={{
                  color: "#fff",
                  border: "1.5px solid red",
                  fontWeight: "bold",
                }}
              >
                Edit Profile
              </Button>
            </Toolbar>
          </AppBar>


          <Box
            sx={{
              display: "flex",
              height: "100vh",
              width: "100%",
              paddingTop: "64px",
            }}
          >
            <Drawer
              variant="permanent"
              sx={{
                width: 200,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: 200, 
                  boxSizing: "border-box",
                  marginTop: "64px", 
                  backgroundColor: "#fff", 
                  marginLeft: "2.1rem",
                },
              }}
            >
              {/* Tabs in Sidebar */}
              <Tabs
                orientation="vertical"
                value={selectedTab}
                onChange={handleTabChange}
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  paddingTop: "0px",
                  marginTop: "3rem",
                }}
              >
                <Tab
                  icon={<LocalMallIcon sx={{ color: "#fe0604" }} />} 
                  iconPosition="start"
                  label="Orders"
                  sx={{
                    color: "#fe0604", 
                    "&:hover": {
                      color: "#fe0604", 
                    },
                  }}
                />
                <Tab
                  icon={<LocationOnIcon sx={{ color: "#fe0604" }} />} 
                  iconPosition="start"
                  label="Address"
                  sx={{
                    color: "#fe0604", 
                    "&:hover": {
                      color: "#fe0604", 
                    },
                  }}
                />
                <Tab
                  icon={<SettingsIcon sx={{ color: "#fe0604" }} />}
                  iconPosition="start"
                  label="Settings"
                  sx={{
                    color: "#fe0604", 
                    "&:hover": {
                      color: "#fe0604",
                    },
                  }}
                />
              </Tabs>
            </Drawer>

            {/* Content Area */}
            <Box sx={{ flexGrow: 1, p: 2 }}>
              {selectedTab === 0 && (
                <>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    Past Orders
                  </Typography>
                  {/* Orders Content */}
                  <Box
                    sx={{
                      height: "281px",
                      "@media (min-width: 820px) and (max-width: 1180px)": {
                        width: "540px",
                      },
                      "@media (min-width: 1024px) and (max-width: 1180px)": {
                        width: "700px",
                      },
                      width: "860px",
                      border: "1px solid #fe0604",
                      overflow: "hidden",
                      mt: 2, // Margin Top for Spacing
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1.5rem",
                      }}
                    >
                      {/* Image inside the Box */}
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

                    {/* Half Line */}
                    <Box
                      sx={{
                        width: "95%",
                        borderBottom: "1px solid #ddd",
                        margin: "1rem auto",
                      }}
                    />

                    <Box
                      sx={{
                        height: "100px",
                        width: "828px",
                        marginTop: "1.5rem",
                        marginLeft: "1.8rem",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
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

                  {/* Centered "Show More Orders" Button */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Button
                      sx={{
                        color: "#fe0604",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      SHOW MORE ORDERS
                    </Button>
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
                    }}
                  >
                    Manage Address
                  </Typography>
                  <Box
                    sx={{
                      height: "134px",
                      width: "400px",
                      border: "1px solid black",
                      marginTop: "2rem",
                    }}
                  >
                    <Box sx={{ display: "flex"}}>
                      <ComputerIcon sx={{ marginRight: "8px" }} />
                      <Box sx={{ marginLeft: "1rem", flex: 1 }}>
                        <Typography
                          sx={{ fontSize: "17px", fontWeight: "bold" }}
                        >
                          Work
                        </Typography>
                        <Typography sx={{ fontSize: "13px", color: "#535665" }}>
                          Dwarka Sector 10, Pocket 2, Dwarka Sector 9, Dwarka,
                          New Delhi, Delhi 110077, India
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
                </>
              )}
              {selectedTab === 2 && (
                <>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      fontFamily: "poppins",
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
                        width: "520px",
                      },
                      "@media (min-width: 1024px) and (max-width: 1366px)": {
                        width: "700px",
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", marginLeft: "1rem" }}>
                      Order related SMS cannot be disabled as they are critical
                      to provide service
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
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
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
  );
}

export default Profile;