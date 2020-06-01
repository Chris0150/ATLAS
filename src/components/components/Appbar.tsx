import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

interface IPropsModel {
    title?: String
}

const ApplicationBar = (props:IPropsModel):JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.toolbar}>
          {props.title ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <Typography variant="h6" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ApplicationBar;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: "#1b2f47",
  },
  menuButton: {
    marginRight: 16,
  }
}));
