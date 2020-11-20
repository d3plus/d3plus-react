import {Matrix as type} from "d3plus-matrix";
import Shell from "./Viz";

/**
    @class Matrix
    @extends Viz
*/
class Matrix extends Shell {}
Matrix.defaultProps = Object.assign({}, Shell.defaultProps, {type});
export default Matrix;
