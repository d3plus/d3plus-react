import {Tree as type} from "d3plus-hierarchy";
import Shell from "./Viz";

/**
    @class Tree
    @extends Viz
*/
class Tree extends Shell {}
Tree.defaultProps = Object.assign(Shell.defaultProps, {type});
export default Tree;
