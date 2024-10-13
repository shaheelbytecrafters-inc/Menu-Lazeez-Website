    import * as React from "react";
    import {
      Button,
      TextField,
      IconButton,
      Modal,
      Typography,
      Box,
      Stack,
    } from "@mui/material";
    import CloseIcon from "@mui/icons-material/Close";
    import { useDispatch } from "react-redux";
    // import { Grid } from "@mui/system";

    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: 300, sm: 350, md: 400 },
      bgcolor: "background.paper",
      border: "1px solid #ff0000",
      borderRadius: "10px",
      boxShadow: 24,
      p: 4,
    };

    const EditModal = ({
      inputValue,
      handleInputChange,
      toggleEditDialog,
      openEditDialog,
    }) => {
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        toggleEditDialog(); // First function
        handleSaveClick(); // Second function
      };

      return (
        <div>
          <Modal
            open={openEditDialog}
            onClose={toggleEditDialog}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  mb: 1,
                }}
              >
                <Stack direction="column">
                  <Typography variant="h6" component="h2" sx={{ color: "red" }}>
                    Update Address
                  </Typography>
                </Stack>
                <IconButton
                  sx={{
                    width: "auto",
                    bgcolor: "#ff0000",
                    ":hover": { bgcolor: "#ff0000" },
                  }}
                  onClick={toggleEditDialog}
                >
                  <CloseIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>

              <Box sx={{ mt: 2, width: "100%", height: "100%" }}>
                <form onSubmit={handleSubmit}>
                  {/* <Grid container spacing={2}>
                  <Grid item xs={12}> */}
                  <TextField
                    fullWidth
                    label="Edit Address"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={inputValue}
                    onChange={handleInputChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgba(165, 163, 163, 0.315)",
                          boxShadow:
                            "inset 4px 4px 4px rgba(165, 163, 163, 0.315), 4px 4px 4px rgba(218, 218, 218, 0.13)",
                        },

                        "&.Mui-focused fieldset": {
                          borderColor: "#fff",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        "&.Mui-focused": {
                          transform: "translate(14px, -10px) scale(0.75)",
                          transition: "all 0.4s",
                          backgroundColor: "white",
                          padding: "0 5px",
                          fontSize: "15px",
                          marginLeft: "0",
                        },
                      },
                      "& .MuiInputLabel-shrink": {
                        transform: "translate(14px, -10px) scale(0.75)",
                        backgroundColor: "white",
                        color: "gray",
                        padding: "0 5px",
                      },
                    }}
                  />
                  {/* </Grid>
                </Grid> */}
                  {/* <Grid item xs={12}> */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      cursor: "pointer",
                      backgroundColor: "#ff0000",
                      width: { xs: "auto" },
                      mt: 1,
                      color: "#fff",
                      ":hover": { backgroundColor: "#ff0000", color: "#fff" },
                    }}
                  >
                    Save
                  </Button>
                  {/* </Grid> */}
                </form>
              </Box>
            </Box>
          </Modal>
        </div>
      );
    };

    export default EditModal;