import {BarChart as type} from "d3plus-plot";
import Shell from "./Viz";

/**
    @class BarChart
    @extends Viz
*/
class BarChart extends Shell {}
BarChart.defaultProps = Object.assign(Shell.defaultProps, {type});
export default BarChart;
