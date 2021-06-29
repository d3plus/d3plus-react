import {BoxWhisker as type} from "d3plus-plot";
import Shell from "./Viz";

/**
    @class BoxWhisker
    @extends Viz
*/
class BoxWhisker extends Shell {}
BoxWhisker.defaultProps = Object.assign({}, Shell.defaultProps, {type});
export default BoxWhisker;
