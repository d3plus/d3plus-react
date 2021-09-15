# d3plus-react

[![NPM Release](http://img.shields.io/npm/v/d3plus-react.svg?style=flat)](https://www.npmjs.org/package/d3plus-react)
[![Build Status](https://travis-ci.org/d3plus/d3plus-react.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-react)
[![Dependency Status](http://img.shields.io/david/d3plus/d3plus-react.svg?style=flat)](https://david-dm.org/d3plus/d3plus-react)
[![Gitter](https://img.shields.io/badge/-chat_on_gitter-brightgreen.svg?style=flat&logo=gitter-white)](https://gitter.im/d3plus/)

React components for d3plus visualizations.

## Installing

Use `npm install d3plus-react -S` to install the package as a dependency.

## Configuration

A valid d3plus `config` _Object_ needs to be provided to the `config` prop of every visualization.

```jsx
import {Treemap} from "d3plus-react";

const methods = {
  groupBy: "id",
  data: [
    {id: "alpha", value: 29},
    {id: "beta",  value: 10}
  ],
  size: d => d.value
};

<Treemap config={methods} />
```

Additionally, a global set of styles can be provided using the "d3plus" React context key. This allows you to set base styles on all of your visualizations in one place, often in an external file. A component's `config` set by props will override global defaults key-by-key using a deep cloning function.
```jsx
import React, {Component} from "react";

export default class MyApp extends Component {

  getChildContext() {

    return {
      d3plus: {
        shapeConfig: {
          fontFamily: "Comic Sans MS"
        }
      }
    };

  }

  render() {

    return (
      <main>
        {/* child components containing visualizations */}
      </main>
    );

  }

}

MyApp.childContextTypes = {
  d3plus: PropTypes.object
};
```

## Update Cycle

In order to detect whether a component _should_ udpate in React, each component does a rudimentary check between the current `config` object and the incoming new `config` object. This is done via a simple equality check on the stringified versions of each object. This can also be overridded using the `forceUpdate` prop:

```js
const shouldUpdate = this.props.forceUpdate ? false : JSON.stringify(oldConfig) === JSON.stringify(newConfig);
```

This works in _most_ cases, but may not update your visualizations if using an accessor function that references an external variable. For example, if your `x` accessor is:

```jsx
const config = {
  ...,
  x: d => d[xVar]
};
```

...and `xVar` changes, the visualization will not update. The quick "hack" for this is add `xVar` to the config object so that it triggers the update via stringify:

```jsx
const config = {
  ...,
  x: d => d[xVar],
  xVar
};
```

## API Reference

##### 
* [AreaPlot](#AreaPlot)
* [BarChart](#BarChart)
* [BoxWhisker](#BoxWhisker)
* [BumpChart](#BumpChart)
* [Donut](#Donut)
* [Geomap](#Geomap)
* [LinePlot](#LinePlot)
* [Matrix](#Matrix)
* [Network](#Network)
* [Pack](#Pack)
* [Pie](#Pie)
* [Plot](#Plot)
* [Priestley](#Priestley)
* [Radar](#Radar)
* [RadialMatrix](#RadialMatrix)
* [Rings](#Rings)
* [Sankey](#Sankey)
* [StackedArea](#StackedArea)
* [Tree](#Tree)
* [Treemap](#Treemap)
* [Viz](#Viz)

---

<a name="AreaPlot"></a>
#### **AreaPlot** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/AreaPlot.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="BarChart"></a>
#### **BarChart** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/BarChart.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="BoxWhisker"></a>
#### **BoxWhisker** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/BoxWhisker.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="BumpChart"></a>
#### **BumpChart** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/BumpChart.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Donut"></a>
#### **Donut** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Donut.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Geomap"></a>
#### **Geomap** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Geomap.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="LinePlot"></a>
#### **LinePlot** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/LinePlot.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Matrix"></a>
#### **Matrix** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Matrix.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Network"></a>
#### **Network** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Network.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Pack"></a>
#### **Pack** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Pack.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Pie"></a>
#### **Pie** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Pie.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Plot"></a>
#### **Plot** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Plot.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Priestley"></a>
#### **Priestley** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Priestley.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Radar"></a>
#### **Radar** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Radar.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="RadialMatrix"></a>
#### **RadialMatrix** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/RadialMatrix.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Rings"></a>
#### **Rings** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Rings.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Sankey"></a>
#### **Sankey** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Sankey.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="StackedArea"></a>
#### **StackedArea** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/StackedArea.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Tree"></a>
#### **Tree** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Tree.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Treemap"></a>
#### **Treemap** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Treemap.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Viz"></a>
#### **Viz** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Viz.js#L6)


This is a global class, and extends all of the methods and functionality of <code>React.Component</code>.


* [Viz](#Viz) ⇐ <code>React.Component</code>
    * [new Viz()](#new_Viz_new)
    * [.module.exports](#Viz.module.exports)


<a name="new_Viz_new" href="#new_Viz_new">#</a> new **Viz**()

Creates SVG paths and coordinate points based on an array of data. See [this example](https://d3plus.org/examples/d3plus-geomap/getting-started/) for help getting started using the geomap generator.





<a name="Viz.module.exports" href="#Viz.module.exports">#</a> Viz.**module.exports** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Viz.js#L93)


This is a static property of [<code>Viz</code>](#Viz).

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [config] | <code>Object</code> | <code>{}</code> | An object containing method/value pairs to be passed to the visualization's .config( ) method. |
| [dataFormat] | <code>function</code> | <code>d3plus.dataFold</code> | A custom formatting function to be used when formatting data from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the data method. |
| [linksFormat] | <code>function</code> | <code>d3plus.links(path, formatter)</code> | A custom formatting function to be used when formatting links from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the links method. |
| [nodesFormat] | <code>function</code> | <code>d3plus.nodes(path, formatter)</code> | A custom formatting function to be used when formatting nodes from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the nodes method. |
| [topojsonFormat] | <code>function</code> | <code>d3plus.topojson(path, formatter)</code> | A custom formatting function to be used when formatting topojson from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the topojson method. |


---

###### <sub>Documentation generated on Wed, 15 Sep 2021 19:24:43 GMT</sub>
