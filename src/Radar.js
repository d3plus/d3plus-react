import {Radar as type} from "d3plus-plot";
import Shell from "./Viz";

/**
    @class Radar
    @extends Viz
*/
class Radar extends Shell {}
Radar.defaultProps = Object.assign({}, Shell.defaultProps, {type});
export default Radar;
