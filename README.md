# d3plus-react

[![NPM Release](http://img.shields.io/npm/v/d3plus-react.svg?style=flat)](https://www.npmjs.org/package/d3plus-react)
[![Build Status](https://travis-ci.org/d3plus/d3plus-react.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-react)
[![Dependency Status](http://img.shields.io/david/d3plus/d3plus-react.svg?style=flat)](https://david-dm.org/d3plus/d3plus-react)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat)](https://gitter.im/d3plus/)

React components for d3plus visualizations.

## Installing

Use `npm install d3plus-react -S` to install the package as a dependency. And then use the components in your React project like this:

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

Additionally, a file named `.d3plus.js` needs to exist in the root path of your project. This file should contain all global styles to be applied to the visualizations (passed to the .config( ) method). Here is an example that makes all of your visualizations use the best font ever created:
```js
export default {
  shapeConfig: {
    fontFamily: "Comic Sans MS"
  }
};
```

## API Reference

##### 
* [AreaPlot](#AreaPlot)
* [BarChart](#BarChart)
* [BumpChart](#BumpChart)
* [Donut](#Donut)
* [Geomap](#Geomap)
* [LinePlot](#LinePlot)
* [Network](#Network)
* [Pie](#Pie)
* [Plot](#Plot)
* [Priestley](#Priestley)
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

<a name="Network"></a>
#### **Network** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Network.js#L4)


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





<a name="Viz.module.exports" href="#Viz.module.exports">#</a> Viz.**module.exports** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Viz.js#L83)


This is a static property of [<code>Viz</code>](#Viz).

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [config] | <code>Object</code> | <code>{}</code> | An object containing method/value pairs to be passed to the visualization's .config( ) method. |
| [dataFormat] | <code>function</code> | <code>d3plus.dataFold</code> | A custom formatting function to be used when formatting data from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the data method. |


---

###### <sub>Documentation generated on Tue, 03 Jul 2018 16:41:01 GMT</sub>
