import React from "react";
import {Sankey as type} from "d3plus-network";
import Viz from "./Viz.jsx";

/**
    @function Sankey
    @extends Viz
*/
const Sankey = props => <Viz type={type} {...props} />;
export default Sankey;
