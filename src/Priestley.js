import {Priestley as type} from "d3plus-priestley";
import Shell from "./Viz";

/**
    @class Priestley
    @extends Viz
*/
class Priestley extends Shell {}
Priestley.defaultProps = Object.assign(Shell.defaultProps, {type});
export default Priestley;
