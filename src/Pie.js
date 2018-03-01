import {Pie as type} from "d3plus-hierarchy";
import Shell from "./Viz";

/**
    @class Pie
    @extends Viz
*/
class Pie extends Shell {}
Pie.defaultProps = Object.assign({}, Shell.defaultProps, {type});
export default Pie;
