import {Pack as type} from "d3plus-hierarchy";
import Shell from "./Viz";

/**
    @class Pack
    @extends Viz
*/
class Pack extends Shell {}
Pack.defaultProps = Object.assign({}, Shell.defaultProps, {type});
export default Pack;
