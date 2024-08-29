import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionPartner = () => {
  return (
    <Box
      sx={{
        marginInline: {
          xs: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "6rem",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          marginBottom:"2rem"
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "1.5rem", 
              sm: "2rem",
              md: "2.5rem",
              lg: "36",
            },
            fontWeight: "500",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Frequently Asked
        </Typography>

        {/* First Accordion */}
        <Accordion
          sx={{
            marginBottom: "1rem",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              color="rgb(28,28,28)"
              sx={{
                fontSize: {
                  xs: "13px",
                  sm: "15px",
                  md: "17px",
                  lg: "20px",
                  xl: "20px",
                },
                color: "rgb(28,28,28)",
              }}
            >
              What will Zomato charge me for creating a page on its platform?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "16px",
                  xl: "16px",
                },
              }}
              color="#6f706f"
            >
              Creating a restaurant page on Zomato is free of cost. You can
              maintain your page by replying to reviews and do a lot more
              without any charges.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Second Accordion */}
        <Accordion
          sx={{
            marginBottom: "1rem",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "13px",
                  sm: "15px",
                  md: "17px",
                  lg: "20px",
                  xl: "20px",
                },
                color: "rgb(28,28,28)",
              }}
            >
              What all documents are required for registering on online
              ordering?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "16px",
                  xl: "16px",
                },
              }}
              color="#6f706f"
            >
              Registration for online ordering requires: a: FSSAI certificate
              (application no. if FSSAI is not present) b: PAN Card c: GST
              certificate (if applicable)
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Third Accordion */}
        <Accordion
          sx={{
            marginBottom: "1rem",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              color="rgb(28,28,28)"
              sx={{
                fontSize: {
                  xs: "13px",
                  sm: "15px",
                  md: "17px",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              I have a large fleet of delivery boys, why should I use Zomato’s
              delivery service?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "16px",
                  xl: "16px",
                },
              }}
              color="#6f706f"
            >
              You can use your and Zomato's delivery fleet simultaneously to
              increase the network of your delivery radius. Also, our delivery
              fleet delivers orders in minimum possible time, a key factor
              leading to increased customer satisfaction.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Fourth Accordion */}
        <Accordion
          sx={{
            marginBottom: "1rem",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
             
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "13px",
                  sm: "15px",
                  md: "17px",
                  lg: "20px",
                  xl: "20px",
                },
                color: "rgb(28,28,28)",
               
                
              }}
            >
              What happens if the average order value of Zomato orders is very
              low?
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography
              color="#6f706f"
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "16px",
                  xl: "16px",
                },
              }}
            >
              Average order value from our platform is generally more than Rs
              250. However, in some cases, users want to try out your place by
              ordering for a lesser amount. But we have observed that they
              eventually come back with higher value orders if they like your
              food.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default AccordionPartner;
