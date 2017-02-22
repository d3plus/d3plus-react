import {Network as type} from "d3plus-network";
import Shell from "./Viz.jsx";

/**
    @class Network
    @extends Viz
*/
class Network extends Shell {}
Network.defaultProps = {type};
export default Network;
