import {AreaPlot as type} from "d3plus-plot";
import Shell from "./Viz";

/**
    @class AreaPlot
    @extends Viz
*/
class AreaPlot extends Shell {}
AreaPlot.defaultProps = Object.assign(Shell.defaultProps, {type});
export default AreaPlot;
