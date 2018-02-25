import {Network as type} from "d3plus-network";
import Shell from "./Viz";

/**
    @class Network
    @extends Viz
*/
class Network extends Shell {}
Network.defaultProps = Object.assign(Shell.defaultProps, {type});
export default Network;
