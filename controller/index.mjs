import http from "node:http"
import { readFileSync } from "fs"
import { URL } from "node:url"

////////////////////////////////////////////////////////////
/////setting paths and reading files to be served
////////////////////////////////////////////////////////////

//////////////////main files
const indexHTMLPath = new URL("../index.html", import.meta.url)
const mainScriptPath = new URL("../main.js", import.meta.url)
const cssFilePath = new URL("../style.css", import.meta.url)

const indexHTML =  readFileSync(indexHTMLPath, {encoding: "utf-8"})
const mainScript =  readFileSync(mainScriptPath, {encoding: "utf-8"})
const cssFile =  readFileSync(cssFilePath, {encoding: "utf-8"})

// //////////////////images
// ///////header background
const headerBackgroundPath = new URL("../public/images/header-background.png", import.meta.url)

const headerBackground = readFileSync(headerBackgroundPath)

// ///////welcome photos
const welcomePhoto1Path = new URL("../public/images/first-profile-photo.jpg", import.meta.url)
const welcomePhoto2Path = new URL("../public/images/second-profile-photo.jpg", import.meta.url)

const welcomePhoto1 = readFileSync(welcomePhoto1Path)
const welcomePhoto2 = readFileSync(welcomePhoto2Path)

// ////////up arrow
const upArrowPath = new URL("../public/images/svg/stylized-svg/arrow-up.svg", import.meta.url)

const upArrow = readFileSync(upArrowPath)

// ///////skill section svg
const webDevSVGPath = new URL("../public/images/svg/stylized-svg/web-programming.svg", import.meta.url)
const mathAndStatsSVGPath = new URL("../public/images/svg/stylized-svg/statistics.svg", import.meta.url)
const dataAnalysisSVGPath = new URL("../public/images/svg/stylized-svg/scatterplot.svg", import.meta.url)
const automationSVGPath = new URL("../public/images/svg/stylized-svg/robot.svg", import.meta.url)

const webDevSVG = readFileSync(webDevSVGPath)
const mathAndStatsSVG = readFileSync(mathAndStatsSVGPath)
const dataAnalysisSVG = readFileSync(dataAnalysisSVGPath)
const automationSVG = readFileSync(automationSVGPath)

// ///////portfolio arrows
const leftArrowPath = new URL("../public/images/svg/stylized-svg/arrow-left.svg", import.meta.url)
const rightArrowPath = new URL("../public/images/svg/stylized-svg/arrow-right.svg", import.meta.url)

const leftArrow = readFileSync(leftArrowPath)
const rightArrow = readFileSync(rightArrowPath)

//////////projects
const timeSeriesProjectBackgroundPath = new URL("../public/images/time-series-background.jpg", import.meta.url)
const rgbFilterProjectBackgroundPath = new URL("../public/images/rgb-filter-background.jpg", import.meta.url)

const timeSeriesProjectBackground = readFileSync(timeSeriesProjectBackgroundPath)
const rgbFilterProjectBackground = readFileSync(rgbFilterProjectBackgroundPath)
// ///////svg layers
const layer1Path = new URL("../public/images/svg/layers/layer1.svg", import.meta.url)
const layer2Path = new URL("../public/images/svg/layers/layer2.svg", import.meta.url)

const layer1 = readFileSync(layer1Path)
const layer2 = readFileSync(layer2Path)

// ///////social media svg
const gitHubSVGPath = new URL("../public/images/svg/social-media-logos/Golden-SVG-logos/1-golden-github-logo.svg", import.meta.url)
const linkedInSVGPath = new URL("../public/images/svg/social-media-logos/Golden-SVG-logos/2-golden-linkedin-logo.svg", import.meta.url)
const instagramSVGPath = new URL("../public/images/svg/social-media-logos/Golden-SVG-logos/3-golden-instagram-logo.svg", import.meta.url)
const emailSVGPath = new URL("../public/images/svg/social-media-logos/Golden-SVG-logos/4-golden-email-logo.svg", import.meta.url)
const whatsappSVGPath = new URL("../public/images/svg/social-media-logos/Golden-SVG-logos/5-golden-whatsapp-logo.svg", import.meta.url)

const gitHubSVG = readFileSync(gitHubSVGPath)
const linkedInSVG = readFileSync(linkedInSVGPath)
const instagramSVG = readFileSync(instagramSVGPath)
const emailSVG = readFileSync(emailSVGPath)
const whatsappSVG = readFileSync(whatsappSVGPath)

const server = http.createServer((req, res) => {
  
  switch(req.url){
    
    ////main-files endpoints
    case "/":
      res.writeHead(200, {"Content-Type": "text/html", "Cache-Control": "max-age=60, no-cache"})
      res.end(indexHTML)
      break
    case "/style.css":
      res.writeHead(200, {"Content-Type": "text/css", "Cache-Control": "max-age=60, no-cache"})
      res.end(cssFile)
      break
    case "/main.js": 
      res.writeHead(200, {"Content-Type": "text/javascript", "Cache-Control": "max-age=60, no-cache"})
      res.end(mainScript)
      break
    

    ////images endpoints
    
    //header
    case "/public/images/header-background.png":
      res.writeHead(200, {"Content-Type": "image/png", "Cache-Control": "max-age=604800"})
      res.end(headerBackground)
      break

    //welcome photos
    case "/public/images/first-profile-photo.jpg":
      res.writeHead(200, {"Content-Type": "image/jpg", "Cache-Control": "max-age=604800, must-revalidate"})
      res.end(welcomePhoto1)
      break
    case "/public/images/second-profile-photo.jpg":
      res.writeHead(200, {"Content-Type": "image/jpg", "Cache-Control": "max-age=604800, must-revalidate"})
      res.end(welcomePhoto2)
      break

    case "/public/images/svg/stylized-svg/arrow-up.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(upArrow)
      break
      
    //skill pictures
    case "/public/images/svg/stylized-svg/web-programming.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(webDevSVG)
      break
    case "/public/images/svg/stylized-svg/statistics.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(mathAndStatsSVG)
      break
    case "/public/images/svg/stylized-svg/scatterplot.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(dataAnalysisSVG)
      break
    case "/public/images/svg/stylized-svg/robot.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(automationSVG)
      break
    
    // portfolio arrows
    case "/public/images/svg/stylized-svg/arrow-left.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(leftArrow)
      break
    case "/public/images/svg/stylized-svg/arrow-right.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(rightArrow)
      break

    //project backgrounds
    case "/public/images/time-series-background.jpg":
      res.writeHead(200, {"Content-Type": "image/jpg", "Cache-Control": "max-age=604800"})
      res.end(timeSeriesProjectBackground)
      break
    case "/public/images/rgb-filter-background.jpg":
      res.writeHead(200, {"Content-Type": "image/jpg", "Cache-Control": "max-age=604800"})
      res.end(rgbFilterProjectBackground)
      break

    //svg layers
    case "/public/images/svg/layers/layer1.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(layer1)
      break
    case "/public/images/svg/layers/layer2.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(layer2)
      break

    //social-media logos
    case "/public/images/svg/social-media-logos/Golden-SVG-logos/1-Golden-github-logo.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(gitHubSVG)
      break
    case "/public/images/svg/social-media-logos/Golden-SVG-logos/2-Golden-linkedIn-logo.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(linkedInSVG)
      break
    case "/public/images/svg/social-media-logos/Golden-SVG-logos/3-Golden-Instagram-logo.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(instagramSVG)
      break
    case "/public/images/svg/social-media-logos/Golden-SVG-logos/4-Golden-e-mail-logo.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(emailSVG)
      break
    case "/public/images/svg/social-media-logos/Golden-SVG-logos/5-Golden-whatsapp-logo.svg":
      res.writeHead(200, {"Content-Type": "image/svg+xml", "Cache-Control": "max-age=604800"})
      res.end(whatsappSVG)
      break

    default:
      res.statusCode = 404
      res.end("There's been an error when trying to access the server!")
  }
}
)

const port = process.env.PORT || 8080

server.listen(port, ()=>{
  console.log(`Server is listening on port: ${port}`)
})
