import React, {Component} from "react";
import {default as globalConfig} from ".d3plus";
import {dataFold as dataFormat} from "d3plus-viz";

/**
    @class Viz
    @extends React.Component
    @desc Creates SVG paths and coordinate points based on an array of data. See [this example](https://d3plus.org/examples/d3plus-geomap/getting-started/) for help getting started using the geomap generator.
*/
class Viz extends Component {

  /**
      @memberof Viz
      @desc Initializes the specific visualization's class instance and binds it to the container <div>.
      @private
  */
  componentDidMount() {

    const {Viz} = this.props;

    const viz = new Viz()
      .select(this.refs.container);

    this.setState({viz});
  }

  /**
      @memberof Viz
      @desc Updates visualization config on component update.
      @private
  */
  componentDidUpdate() {

    const {config, dataFormat} = this.props;

    const viz = this.state.viz
      .config(globalConfig)
      .config(Object.assign({}, config, {data: []}));

    if (config.data) viz.data(config.data, dataFormat);

    viz.render();

  }

  /**
      @memberof Viz
      @desc Renders an empty container to hold the visualization.
      @private
  */
  render() {
    return <div className="viz" ref="container"></div>;
  }

}

/**
    @memberof Viz
    @param {Object} [config = {}] An object containing method/value pairs to be passed to the visualization's .config( ) method.
    @param {Function} [dataFormat = d3plus.dataFold] A custom formatting function to be used when formatting data from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the data method.
*/
Viz.defaultProps = {config: {}, dataFormat};
export default Viz;
