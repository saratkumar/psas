
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

import './../../App.css';

function HorizontalTeamCard({ image, name, position, description }) {
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container className="grid-container">
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }} className="img-grid">
          <Box width="100%" pt={2} pb={1} px={2} className="horizontal-image">
            <Box component="img" src={image} alt={name} width="100%" borderRadius="md" shadow="lg"/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <Box pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1} className="horizontal-panel">
            <Typography variant="h5" className="name">{name}</Typography>
            <Typography variant="h6" className="label" color={position.color} mb={1}>
              {position.label}
            </Typography>
            <Typography variant="body2" color="text" className="description">
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;
