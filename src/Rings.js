import {Rings as type} from "d3plus-network";
import Shell from "./Viz";

/**
    @class Rings
    @extends Viz
*/
class Rings extends Shell {}
Rings.defaultProps = Object.assign({}, Shell.defaultProps, {type});
export default Rings;
