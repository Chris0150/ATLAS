import React, { Suspense } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "./components/components/Appbar";
import Menu from "./components/components/Menu";
import Loader from "./components/components/Loader";
import * as Charts from "./utils/charts/loader";

const App: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [charts, showCharts] = React.useState(false);
  const runSimulation = (): void => showCharts(true);

  return (
    <>
      <AppBar title={"ATLASWeb 1.1"} />
      <Menu runSimulation={runSimulation} />
      <Suspense fallback={<Loader />}>
        <div className={classes.graphs}>
          {charts ? (
            <>
              <Typography className={classes.title}>
                Simulation results:
              </Typography>
              <Charts.Map />
              <Charts.Surface3D />
              <Charts.Bubbles />
              <Charts.Splom />
              <Charts.MapAnimated />
              <Charts.Bars />
              <Charts.Boxes />
              <Charts.Regression />
              <Charts.Timeline />
              <Charts.Histogram />
              <Charts.MapBubbles />
            </>
          ) : null}
        </div>
      </Suspense>
      <AppBar />
    </>
  );
};

export default App;

const useStyles = makeStyles(() => ({
  title: {
    zIndex: 1,
    top: "3%",
    fontWeight: "bold",
    position: "absolute"
  },
  graphs: {
    top: "6%",
    left: "16%",
    width: "80%",
    paddingTop: "3%",
    paddingLeft: "3%",
    overflowY: "auto",
    textAlign: "center",
    position: "absolute",
    backgroundColor: "lightgrey",
    height: window.innerHeight - 170
  }
}));
