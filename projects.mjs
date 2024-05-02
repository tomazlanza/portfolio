class Project {
  constructor(
    projectName, 
    pathToImage, 
    linkToWebsite, 
    linkToSourceCode, //link to github
    descriptionText, 
    projectType,
  ){
    this.projectName = projectName
    this.pathToImage = pathToImage
    this.linkToWebsite = linkToWebsite
    this.linkToSourceCode = linkToSourceCode
    this.descriptionText = descriptionText
    this.projectType = projectType
  }
}

const projectContainer = new Array

//////////// creating instances of projects

//// time series modeling
const timeSeriesModeling = new Project(
  "timeSeriesModeling",
  new URL("../public/images/time-series-background.jpg", import.meta.url),
  "https://tomazlanza.github.io/time-series-modeling/",
  "https://github.com/tomazlanza/time-series-modeling/blob/main/script_igpm_portfolio.R",
  "this project is very beautiful indeed",
  "data-science",
)
projectContainer.push(timeSeriesModeling)

//// RGB filter
const rgbFilter = new Project(
  "rgbFilter",
  new URL("../public/images/rgb-filter-background.jpg", import.meta.url),
  "https://image-modifier-app.uc.r.appspot.com/",
  "https://github.com/tomazlanza/image-modifier-app",
  "Project for studying REST APIs.",
  "web-app",
)
projectContainer.push(rgbFilter)

//// calculator
const calculator = new Project(
  "calculator",
  new URL("../public/images/calculator-background.jpg", import.meta.url),
  "https://tomazlanza.github.io/calculator/",
  "https://github.com/tomazlanza/calculator/blob/master/script.js",
  "Calculator app which does basic arithmetic, exponential and logarithmic operations. It was made for studying purposes on complex programming logic and array methods.",
  "web-app",
)
projectContainer.push(calculator)

//// binary income prediction
// const binaryIncomePrediction = new Project(
//   "incomePrediction",
//   // new URL("../public/images/calculator-background.jpg", import.meta.url),
//   "https://tomazlanza.github.io/calculator/",
//   "https://github.com/tomazlanza/adult-income-prediction/blob/main/census_income.ipynb",
//   "Calculator app which does basic arithmetic, exponential and logarithmic operations. It was made for studying purposes on complex programming logic and array/list methods.",
//   "web-app",
// )
// projectContainer.push(binaryIncomePrediction)

console.log(projectContainer[0].pathToImage)

export { projectContainer }