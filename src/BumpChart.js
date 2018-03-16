import {BumpChart as type} from "d3plus-plot";
import Shell from "./Viz";

/**
    @class BumpChart
    @extends Viz
*/
class BumpChart extends Shell {}
BumpChart.defaultProps = Object.assign({}, Shell.defaultProps, {type});
export default BumpChart;
