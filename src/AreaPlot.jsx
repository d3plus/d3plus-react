import React from "react";
import {AreaPlot as type} from "d3plus-plot";
import Viz from "./Viz";

/**
    @function AreaPlot
    @extends Viz
*/
const AreaPlot = props => <Viz type={type} {...props} />;
export default AreaPlot;