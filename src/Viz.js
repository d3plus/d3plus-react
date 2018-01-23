import React from "react";
import PropTypes from "prop-types";

import {assign} from "d3plus-common";

/**
    @class Viz
    @extends React.Component
    @desc Creates SVG paths and coordinate points based on an array of data. See [this example](https://d3plus.org/examples/d3plus-geomap/getting-started/) for help getting started using the geomap generator.
*/
class Viz extends React.Component {

  /**
      @memberof Viz
      @desc Initializes the specific visualization's class instance and binds it to the container <div>.
      @private
  */
  componentDidMount() {

    const {type} = this.props;
    const Constructor = type;

    const viz = new Constructor()
      .select(this.container);

    this.setState({viz});
  }

  /**
      @memberof Viz
      @desc Updates visualization config on component update.
      @private
  */
  componentDidUpdate() {

    const {d3plus} = this.context;
    const {config, dataFormat} = this.props;
    const {viz} = this.state;

    if (dataFormat && config.data) {
      viz
        .config(assign({}, d3plus || {}, config, {data: []}))
        .data(config.data, dataFormat);
    }
    else viz.config(assign({}, d3plus || {}, config));

    viz.render();

  }

  /**
      @memberof Viz
      @desc Renders an empty container to hold the visualization.
      @private
  */
  render() {
    const {className} = this.props;
    return <div className={className} ref={container => this.container = container}></div>;
  }

}

Viz.contextTypes = {d3plus: PropTypes.object};
Viz.defaultProps = {className: "viz"};

/**
    @memberof Viz
    @param {Object} [config = {}] An object containing method/value pairs to be passed to the visualization's .config( ) method.
    @param {Function} [dataFormat = d3plus.dataFold] A custom formatting function to be used when formatting data from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the data method.
*/
export default Viz;
