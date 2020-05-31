import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

interface IPropsModel {}

const Loader = (props:IPropsModel) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Running simulation.. please wait..</h3>
      <br />
      <CircularProgress size={80}/>
    </div>
  );
}

export default Loader;

const useStyles = makeStyles(() => ({
  root: {
    top: "6%",
    width: "98%",
    textAlign: "center",
    position: "absolute",
    backgroundColor: "lightgrey",
    height: window.innerHeight - 120
  }
}));