import {LinePlot as type} from "d3plus-plot";
import Shell from "./Viz";

/**
    @class LinePlot
    @extends Viz
*/
class LinePlot extends Shell {}
LinePlot.defaultProps = Object.assign(Shell.defaultProps, {type});
export default LinePlot;
