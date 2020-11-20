import {RadialMatrix as type} from "d3plus-matrix";
import Shell from "./Viz";

/**
    @class RadialMatrix
    @extends Viz
*/
class RadialMatrix extends Shell {}
RadialMatrix.defaultProps = Object.assign({}, Shell.defaultProps, {type});
export default RadialMatrix;
