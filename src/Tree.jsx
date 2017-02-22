import {Tree as type} from "d3plus-hierarchy";
import Shell from "./Viz.jsx";

/**
    @class Tree
    @extends Viz
*/
class Tree extends Shell {}
Tree.defaultProps = {type};
export default Tree;
