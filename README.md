# d3plus-react

[![Greenkeeper badge](https://badges.greenkeeper.io/d3plus/d3plus-react.svg)](https://greenkeeper.io/)

[![NPM Release](http://img.shields.io/npm/v/d3plus-react.svg?style=flat)](https://www.npmjs.org/package/d3plus-react)
[![Build Status](https://travis-ci.org/d3plus/d3plus-react.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-react)
[![Dependency Status](http://img.shields.io/david/d3plus/d3plus-react.svg?style=flat)](https://david-dm.org/d3plus/d3plus-react)
[![Slack](https://img.shields.io/badge/Slack-Click%20to%20Join!-green.svg?style=social)](https://goo.gl/forms/ynrKdvusekAwRMPf2)

React components for d3plus visualizations.

## Installing

Using NPM: `npm install d3plus-react`.

## API Reference
### Classes

<dl>
<dt><a href="#AreaPlot">AreaPlot</a> ⇐ <code><a href="#Viz">Viz</a></code></dt>
<dd></dd>
<dt><a href="#BarChart">BarChart</a> ⇐ <code><a href="#Viz">Viz</a></code></dt>
<dd></dd>
<dt><a href="#Donut">Donut</a> ⇐ <code><a href="#Viz">Viz</a></code></dt>
<dd></dd>
<dt><a href="#Geomap">Geomap</a> ⇐ <code><a href="#Viz">Viz</a></code></dt>
<dd></dd>
<dt><a href="#LinePlot">LinePlot</a> ⇐ <code><a href="#Viz">Viz</a></code></dt>
<dd></dd>
<dt><a href="#Network">Network</a> ⇐ <code><a href="#Viz">Viz</a></code></dt>
<dd></dd>
<dt><a href="#Pie">Pie</a> ⇐ <code><a href="#Viz">Viz</a></code></dt>
<dd></dd>
<dt><a href="#Plot">Plot</a> ⇐ <code><a href="#Viz">Viz</a></code></dt>
<dd></dd>
<dt><a href="#Priestley">Priestley</a> ⇐ <code><a href="#Viz">Viz</a></code></dt>
<dd></dd>
<dt><a href="#StackedArea">StackedArea</a> ⇐ <code><a href="#Viz">Viz</a></code></dt>
<dd></dd>
<dt><a href="#Tree">Tree</a> ⇐ <code><a href="#Viz">Viz</a></code></dt>
<dd></dd>
<dt><a href="#Treemap">Treemap</a> ⇐ <code><a href="#Viz">Viz</a></code></dt>
<dd></dd>
<dt><a href="#Viz">Viz</a> ⇐ <code>React.Component</code></dt>
<dd></dd>
</dl>

<a name="AreaPlot"></a>

### AreaPlot ⇐ <code>[Viz](#Viz)</code>
**Kind**: global class  
**Extends:** <code>[Viz](#Viz)</code>  
<a name="BarChart"></a>

### BarChart ⇐ <code>[Viz](#Viz)</code>
**Kind**: global class  
**Extends:** <code>[Viz](#Viz)</code>  
<a name="Donut"></a>

### Donut ⇐ <code>[Viz](#Viz)</code>
**Kind**: global class  
**Extends:** <code>[Viz](#Viz)</code>  
<a name="Geomap"></a>

### Geomap ⇐ <code>[Viz](#Viz)</code>
**Kind**: global class  
**Extends:** <code>[Viz](#Viz)</code>  
<a name="LinePlot"></a>

### LinePlot ⇐ <code>[Viz](#Viz)</code>
**Kind**: global class  
**Extends:** <code>[Viz](#Viz)</code>  
<a name="Network"></a>

### Network ⇐ <code>[Viz](#Viz)</code>
**Kind**: global class  
**Extends:** <code>[Viz](#Viz)</code>  
<a name="Pie"></a>

### Pie ⇐ <code>[Viz](#Viz)</code>
**Kind**: global class  
**Extends:** <code>[Viz](#Viz)</code>  
<a name="Plot"></a>

### Plot ⇐ <code>[Viz](#Viz)</code>
**Kind**: global class  
**Extends:** <code>[Viz](#Viz)</code>  
<a name="Priestley"></a>

### Priestley ⇐ <code>[Viz](#Viz)</code>
**Kind**: global class  
**Extends:** <code>[Viz](#Viz)</code>  
<a name="StackedArea"></a>

### StackedArea ⇐ <code>[Viz](#Viz)</code>
**Kind**: global class  
**Extends:** <code>[Viz](#Viz)</code>  
<a name="Tree"></a>

### Tree ⇐ <code>[Viz](#Viz)</code>
**Kind**: global class  
**Extends:** <code>[Viz](#Viz)</code>  
<a name="Treemap"></a>

### Treemap ⇐ <code>[Viz](#Viz)</code>
**Kind**: global class  
**Extends:** <code>[Viz](#Viz)</code>  
<a name="Viz"></a>

### Viz ⇐ <code>React.Component</code>
**Kind**: global class  
**Extends:** <code>React.Component</code>  

* [Viz](#Viz) ⇐ <code>React.Component</code>
    * [new Viz()](#new_Viz_new)
    * [.defaultProps](#Viz.defaultProps)

<a name="new_Viz_new"></a>

#### new Viz()
Creates SVG paths and coordinate points based on an array of data. See [this example](https://d3plus.org/examples/d3plus-geomap/getting-started/) for help getting started using the geomap generator.

<a name="Viz.defaultProps"></a>

#### Viz.defaultProps
**Kind**: static property of <code>[Viz](#Viz)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [config] | <code>Object</code> | <code>{}</code> | An object containing method/value pairs to be passed to the visualization's .config( ) method. |
| [dataFormat] | <code>function</code> | <code>d3plus.dataFold</code> | A custom formatting function to be used when formatting data from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the data method. |



###### <sub>Documentation generated on Wed, 08 Feb 2017 17:57:00 GMT</sub>
