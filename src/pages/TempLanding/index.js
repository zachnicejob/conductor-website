// Code edited by Zach, based on https://www.creative-tim.com/product/material-kit-react

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
// bgImage src: https://gfycat.com/contentelegantcockroach
import bgImage from "assets/images/z-videos/ContentElegantCockroach-size_restricted.gif";

function TempLanding() {
  return (
    <>
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          // backgroundImage: `url(${bgImage})`,
          backgroundColor: "#111011",
          backgroundSize: "100%",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={9} justifyContent="center" mx="auto">
            <MKBox
              component="img"
              src={bgImage}
              alt="Dark Souls bonfire burning GIF"
              mt={0}
              mb={10}
              width="75%"
            />
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Currently building a full site.{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              If you&#39;re looking for the NYC conductor/horn player, then you found him!
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Shoot me a message at zach@zachnicely.com
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default TempLanding;
