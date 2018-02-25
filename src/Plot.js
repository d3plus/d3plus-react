import {Plot as type} from "d3plus-plot";
import Shell from "./Viz";

/**
    @class Plot
    @extends Viz
*/
class Plot extends Shell {}
Plot.defaultProps = Object.assign(Shell.defaultProps, {type});
export default Plot;
