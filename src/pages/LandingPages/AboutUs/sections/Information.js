/*
=========================================================
* Fly For All React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Fly For All React components
import MKBox from "components/MKBox";

// Fly For All React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import achievementImg from "assets/images/achievement.jpeg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="National Awards"
                    description="2025 West Aerial Drone Championship
   - Skills Missions Champion
   - Coding Award
"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Payments functionality"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Prebuilt components"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Improved platform"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              ml: "auto",
              mt: { xs: 3, lg: 0 },
              "& .MuiCardActions-root": { display: "none" },
              "& .MuiButton-root": { display: "none" },
              '& [class*="action"]': { display: "none" },
            }}
          >
            <CenteredBlogCard
              image={achievementImg}
              title="National Skills Champion Award"
              description="The Skills Champion Award is given to the team with the highest coding and skills flight scores."
              action={{
                type: "internal",
                route: "#",
                label: "hidden",
                color: "info",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
