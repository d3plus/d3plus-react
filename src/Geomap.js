import {Geomap as type} from "d3plus-geomap";
import Shell from "./Viz";

/**
    @class Geomap
    @extends Viz
*/
class Geomap extends Shell {}
Geomap.defaultProps = Object.assign({}, Shell.defaultProps, {type});
export default Geomap;
