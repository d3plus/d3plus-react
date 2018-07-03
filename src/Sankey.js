import {Sankey as type} from "d3plus-network";
import Shell from "./Viz";

/**
    @class Sankey
    @extends Viz
*/
class Sankey extends Shell {}
Sankey.defaultProps = Object.assign({}, Shell.defaultProps, {type});
export default Sankey;
