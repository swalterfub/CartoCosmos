import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles({
  grid: {
    height: "100%",
    maxHeight: 60
  },
  title: {
    color: "#343a40",
    //fontSize: "12px",
    lineHeight: "1rem",
    paddingBottom: 1,
    fontWeight: 600
  },
  coords: {
    color: "#343a40",
    lineHeight: "1.5rem",
    fontSize: "13px"
  },
  container: {
    display: "flex",
    flexWrap: "noWrap",
    width: "85%",
    margin: "auto",
    "& > *": {
      margin: 0,
      padding: 0,
      width: "50%",
      height: "100%",
      maxHeight: "3rem",
      maxWidth: "50%",
      backgroundColor: "#f8f9fa",
      textAlign: "center"
    }
  }
});

/**
 * Custom Component that uses Tooltip with modified css styling
 */
const StyledTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: 12,
    border: "1px solid #dadde9"
  }
}))(Tooltip);

/**
 * Main component that displays the container for the coordinate display
 * and controls styling.
 *
 * @component
 */
export default function ConsoleCoordinates() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.grid}
      justify="center"
      alignItems="center"
      item
      xs={4}
    >
      <Grid item xs>
        <StyledTooltip
          title={
            <Typography variant="subtitle1">
              Displays the longitude and latitude of the area on the map
              underneath the cursor.
            </Typography>
          }
          enterDelay={800}
          leaveDelay={0}
          arrow
          TransitionComponent={Zoom}
        >
          <div className={classes.container}>
            <Paper
              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              variant="outlined"
            >
              <Typography variant="overline" className={classes.title}>
                Longitude
              </Typography>
              <Divider variant="fullWidth" />
              <Typography
                noWrap
                className={classes.coords}
                id="lonCoordinateDisplay"
                variant="subtitle2"
              />
            </Paper>
            <Paper
              style={{
                borderLeft: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
              }}
              variant="outlined"
            >
              <Typography variant="overline" className={classes.title}>
                Latitude
              </Typography>
              <Divider variant="fullWidth" />
              <Typography
                noWrap
                className={classes.coords}
                id="latCoordinateDisplay"
                variant="subtitle2"
              />
            </Paper>
          </div>
        </StyledTooltip>
      </Grid>
    </Grid>
  );
}
