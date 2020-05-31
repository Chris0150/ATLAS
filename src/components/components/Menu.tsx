import React from "react";
import useToggleState from "../../utils/hooks/useToggleState";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Info from "@material-ui/icons/Info";
import Domain from "@material-ui/icons/Domain";
import TrackChanges from "@material-ui/icons/TrackChanges";
import ViewComfy from "@material-ui/icons/ViewComfy";
import Cloud from "@material-ui/icons/Cloud";
import FilterHdr from "@material-ui/icons/FilterHdr";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Text from "./Text";
import Calendar from "./Calendar";
import Radio from "./Radio";

interface IPropsModel {
  runSimulation: () => void
}

const Menu = (props:IPropsModel):JSX.Element => {
  const classes = useStyles();
  const [open1, toggleOpen1] = useToggleState(false);
  const [open2, toggleOpen2] = useToggleState(false);
  const [open3, toggleOpen3] = useToggleState(false);
  const [open4, toggleOpen4] = useToggleState(false);
  const [open5, toggleOpen5] = useToggleState(false);
  const [open6, toggleOpen6] = useToggleState(false);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          New Project 01
        </ListSubheader>
      }
      className={classes.root}
    >
      {/* BASIC INFO */}
      <ListItem button onClick={toggleOpen1}>
        <ListItemIcon>
          <Info className={classes.icons}/>
        </ListItemIcon>
        <ListItemText primary="Basic Information" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem style={{ marginTop: 15 }} button className={classes.nested}>
            <Calendar text="Simulation start" />
          </ListItem>
          <ListItem style={{ marginTop: 15 }} button className={classes.nested}>
            <Calendar text="Simulation end" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Time step (s)"></Text>
          </ListItem>
          <ListItem style={{ marginTop: 30, marginLeft: 10 }} className={classes.nested}>
            <Radio field="Restart" label1="Yes" label2="No" />
          </ListItem>
        </List>
      </Collapse>

      {/* COMP DOMAIN */}
      <ListItem button onClick={toggleOpen2}>
        <ListItemIcon>
          <Domain className={classes.icons}/>
        </ListItemIcon>
        <ListItemText primary="Computational Domain" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <Text text="Max. Latitude (deg)"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Min. Latitude (deg)"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Max. Longitude (deg)"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Min. Longitude (deg)"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Z-top (m)"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Vertical Resolution (m)"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Longitude Resolution (deg)"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Latitude Resolution (deg)"></Text>
          </ListItem>
        </List>
      </Collapse>

      {/* PHYSICS */}
      <ListItem button onClick={toggleOpen3}>
        <ListItemIcon>
          <TrackChanges className={classes.icons}/>
        </ListItemIcon>
        <ListItemText primary="Physics" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            style={{ marginTop: 5, height: 115 }}
            className={classes.nested}
          >
            <Radio
              field="Terminal velocity model"
              label1="Stokes"
              label2="Arastoopour"
              label3="Wilson"
              label4="Dellino"
            />
          </ListItem>
        </List>
      </Collapse>

      {/* OUTPUT GRID */}
      <ListItem button onClick={toggleOpen4}>
        <ListItemIcon>
          <ViewComfy className={classes.icons}/>
        </ListItemIcon>
        <ListItemText primary="Output Grid" />
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <Text text="Max. Latitude"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Min. Latitude"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Max. Longitude"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Min. Longitude"></Text>
          </ListItem>

          <ListItem button className={classes.nested}>
            <Text text="Frequency"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Vertical Layers"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Longitude Resolution"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Latitude Resolution"></Text>
          </ListItem>

          <ListItem button className={classes.nested}>
            <Text text="Classes"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Phases"></Text>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Text text="Track Points"></Text>
          </ListItem>
        </List>
      </Collapse>

      {/* METEO DATA */}
      <ListItem button onClick={toggleOpen5}>
        <ListItemIcon>
          <Cloud className={classes.icons}/>
        </ListItemIcon>
        <ListItemText primary="Meteorological Model" />
        {open5 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open5} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            style={{ marginTop: 10, marginLeft: 10 }}
            className={classes.nested}
          >
            <Radio field="Activate" label1="Yes" label2="No" />
          </ListItem>
          <ListItem
            style={{ height: 100, marginTop: 10, marginLeft: 10 }}
            className={classes.nested}
          >
            <Radio
              field="Model type"
              label1="WRF"
              label2="GFS"
              label3="DEBUG"
            />
          </ListItem>
          <ListItem className={classes.nested}>
            <Button
              style={{
                backgroundColor: "#2196f32e",
                width: 200,
                marginTop: 20,
              }}
            >
              Upload File
            </Button>
          </ListItem>
          <ListItem
            style={{ marginTop: 30, marginLeft: 10 }}
            className={classes.nested}
          >
            <Radio field="Post-process" label1="Yes" label2="No" />
          </ListItem>
        </List>
      </Collapse>

      {/* SOURCE TERM */}
      <ListItem button onClick={toggleOpen6}>
        <ListItemIcon>
          <FilterHdr className={classes.icons}/>
        </ListItemIcon>
        <ListItemText primary="Source Term(s)" />
        {open6 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open6} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            style={{ marginTop: 15, marginLeft: 10 }}
            className={classes.nested}
          >
            <Radio field="Activate" label1="Yes" label2="No" />
          </ListItem>
          <ListItem className={classes.nested}>
            <Button
              style={{
                backgroundColor: "#2196f32e",
                width: 200,
                marginTop: 20,
              }}
            >
              Source Term
            </Button>
          </ListItem>
        </List>
      </Collapse>

      <Button className={classes.button} onClick={props.runSimulation}>
        Run Simulation
      </Button>
    </List>
  );
}

export default Menu;

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    left: 0,
    width: 350,
    maxWidth: 360,
    overflowY: "scroll",
    backgroundColor: "darkgrey",
    height: window.innerHeight - 120,
  },
  nested: {
    height: 50,
    paddingLeft: 75,
  },
  button: {
    width: 300,
    height: 50,
    margin: 15,
    marginTop: 50,
    backgroundColor: "#888585",
  },
  icons: {
    color: "#1b2f47"
  }
}));
