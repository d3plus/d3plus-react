import React from "react";
import {BarChart} from "d3plus-react";

// const company = "deloitte";
const company = "kpmg";

const limit = 5;
const title = `${company === "deloitte" ? "Deloitte" : "KPMG"} Career Clusters`;
const square = 400;
const groupBy = "pathwayName";

const arrSum = arr => arr.reduce((a,b) => a + b, 0);

// const dataFormat = ([deloitte, kpmg]) => {
//   const dTotal = arrSum(deloitte.map(d => d.numberOfJobs));
//   const dData = deloitte.sort((a, b) => b.numberOfJobs - a.numberOfJobs).slice(0, limit).map(d => ({...d, share: d.numberOfJobs / dTotal, company: "deloitte"}));
//   const skills = dData.map(d => d[groupBy]);
//   const kTotal = arrSum(kpmg.map(d => d.numberOfJobs));
//   const kData = kpmg.filter(d => skills.includes(d[groupBy])).map(d => ({...d, share: d.numberOfJobs / kTotal, company: "kpmg"}));
//   console.log(kData);
//   return dData.concat(kData);
// };
// const dataFormat = resp => resp.sort((a, b) => b.numberOfJobs - a.numberOfJobs).slice(0, limit);
// const dataFormat = resp => resp;
const dataFormat = ([deloitte, kpmg]) => {
  const dData = deloitte.sort((a, b) => b.numberOfJobs - a.numberOfJobs).map(d => ({...d, company: "deloitte"}));
  const kData = kpmg.map(d => ({...d, company: "kpmg"}));
  return dData.concat(kData);
};

const config = {

  // data: `/insightscloud/data/career-cluster-${company}.json`,
  // groupBy,
  // colorScale: "numberOfJobs",
  // colorScaleConfig: {
  //   color: company === "deloitte" ? "#82BFB4" : "#F2A766",
  //   // scale: "linear"
  // },
  // shapeConfig: {
  //   strokeWidth: 1
  // },
  // colorScalePosition: false,

  data: [
    "/insightscloud/data/career-pathway-deloitte.json",
    "/insightscloud/data/career-pathway-kpmg.json"
  ],
  groupBy: ["company"],
  shapeConfig: {
    fill: d => d.company === "deloitte" ? "#82BFB4" : "#F2A766",
    // stroke: d => d.company === "deloitte" ? "#82BFB4" : "#F2A766",
    // strokeWidth: 2,
    // fillOpacity: 0.25,
    label: d => d.numberOfJobs.toLocaleString()
  },
  legendPosition: false,

  title: "Job Posting Pathways in the Finance Cluster",
  titleConfig: {
    fontSize: 16,
    fontWeight: "bold"
  },
  padPixel: 2,
  innerRadius: 2,
  // total: "numberOfJobs",
  // totalFormat: d => `${d.toLocaleString()} Job Postings`,
  sum: "numberOfJobs",
  value: "share",
  tooltipConfig: {
    footer: "Click to Show Pathways in Cluster",
    tbody: [
      ["Number of Jobs", d => d.numberOfJobs.toLocaleString()]
    ]
  },
  height: square,
  width: square * 2,
  metric: "skillName",
  y: "numberOfJobs",
  yConfig: {
    title: "Number of Job Postings"
  },
  x: groupBy,
  // ySort: (a, b) => a.numberOfJobs - b.numberOfJobs,
  discrete: "x"
};

const Career = () => {

  return <BarChart config={config} dataFormat={dataFormat} />;
};

export default Career;
