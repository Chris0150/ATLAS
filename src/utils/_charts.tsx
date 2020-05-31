import React from 'react'

const Bars = React.lazy(() => import("../components/charts/Bars"));
const Boxes = React.lazy(() => import("../components/charts/Boxes"));
const Bubbles = React.lazy(() => import("../components/charts/Bubbles"));
const Histogram = React.lazy(() => import("../components/charts/Histogram"));
const Map = React.lazy(() => import("../components/charts/Map"));
const MapBubbles = React.lazy(() => import("../components/charts/MapBubbles"));
const MapAnimated = React.lazy(() => import("../components/charts/MapAnimated"));
const Regression = React.lazy(() => import("../components/charts/Regression"));
const Surface3D = React.lazy(() => import("../components/charts/Surface3D"));
const Splom = React.lazy(() => import("../components/charts/Splom"));
const Timeline = React.lazy(() => import("../components/charts/Timeline"));

export {
    Bars,
    Boxes,
    Bubbles,
    Histogram,
    Map,
    MapBubbles,
    MapAnimated,
    Regression,
    Surface3D,
    Splom,
    Timeline
}

