import {Donut as type} from "d3plus-hierarchy";
import Shell from "./Viz";

/**
    @class Donut
    @extends Viz
*/
class Donut extends Shell {}
Donut.defaultProps = Object.assign(Shell.defaultProps, {type});
export default Donut;
