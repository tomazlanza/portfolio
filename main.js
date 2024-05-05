import textContent from "./textContent.mjs"

//header
const skillsLink = document.querySelector("#skills-link")
const projectsLink = document.querySelector("#projects-link")
const aboutLink = document.querySelector("#about-link")

const languageSelector = document.querySelector("#language-selector")
const header = document.querySelector("header")
const titleChars = document.querySelectorAll(".title-char")

// about section
const aboutSectionTitle = document.querySelector("#about-section-title")
const aboutSection1stP = document.querySelector("#about-section-1st-p")
const aboutSectionLastP = document.querySelector("#about-section-last-p")
const sourceCodeLink = document.querySelector("#source-code-link")

// skills section
const dataAnalysisTitle = document.querySelector("#data-analysis-title")
const dataAnalysisExplanation = document.querySelector("#data-analysis-explanation")
const dataModelingTitle = document.querySelector("#data-modeling-title")
const dataModelingExplanation = document.querySelector("#data-modeling-explanation")
const taskAutomationTitle = document.querySelector("#task-automation-title")
const taskAutomationExplanation = document.querySelector("#task-automation-explanation")
const webApplicationsTitle = document.querySelector("#web-applications-title")
const webApplicationsExplanation = document.querySelector("#web-applications-explanation")

const skillsSection = document.querySelector("#skills-section")

const skillCircles = document.querySelectorAll(".skill-circle")

//projects section
const projectsSectionTitle = document.querySelector("#projects-section-title")
const timeSeriesTitle = document.querySelector("#time-series-title")
const rgbFilterTitle = document.querySelector("#rgb-filter-title")
const calculatorTitle = document.querySelector("#calculator-title")
const calculatorSubtitle = document.querySelector("#calculator-subtitle")

const projectsSection = document.querySelector("#projects-section")
const projects = document.querySelectorAll(".project")

const timeSeriesProject = document.querySelector("#time-series-project")
const rgbFilterProject = document.querySelector("#rgb-filter-project")
const calculatorProject = document.querySelector("#calculator-project")

const leftArrow = document.querySelector("#left-arrow")
const rightArrow = document.querySelector("#right-arrow")


const upArrow = document.querySelector(".up-arrow")

const logos = document.querySelectorAll(".logo")

////////////////////////////////////////
//////// navbar links
////////////////////////////////////////

skillsLink.addEventListener(
  "click",
  ()  => {
    skillsSection.scrollIntoView(
      {behavior: "smooth"}
    )
    setTimeout(
      () => {
        skillsSection.scroll(
          {
            top: 50,
            behavior: "smooth",
          }
        )
      }, 400)
  }
)
projectsLink.addEventListener(
  "click",
  ()  => {
    projectsSection.scrollIntoView(
      {behavior: "smooth"}
    )
    setTimeout(
      () => {
        projectsSection.scroll(
          {
            top: 50,
            behavior: "smooth",
          }
        )
      }, 400)
  }
)
aboutLink.addEventListener(
  "click",
  ()  => {
    window.scrollTo( 
      {
        top: 0, 
        behavior: "smooth",
      }
    )
  }
)

/////////////////////////////
//////// Language selection
/////////////////////////////

const changingLanguage = () => {
  //navbar
  aboutLink.innerHTML = textContent[languageSelector.value]["about-link"].valueOf()
  skillsLink.innerHTML = textContent[languageSelector.value]["skills-link"].valueOf()
  projectsLink.innerHTML = textContent[languageSelector.value]["projects-link"].valueOf()

  //about section
  aboutSectionTitle.innerHTML = textContent[languageSelector.value]["about-section-title"].valueOf() 
  aboutSection1stP.innerHTML = textContent[languageSelector.value]["about-section-1st-p"].valueOf() 
  aboutSectionLastP.innerHTML = textContent[languageSelector.value]["about-section-last-p"].valueOf()
  aboutSectionLastP.appendChild(sourceCodeLink)
  aboutSectionLastP.innerHTML += "."

  //skills section
  dataAnalysisTitle.innerHTML = textContent[languageSelector.value]["data-analysis-title"].valueOf() 
  dataAnalysisExplanation.innerHTML = textContent[languageSelector.value]["data-analysis-explanation"].valueOf() 
  dataModelingTitle.innerHTML = textContent[languageSelector.value]["data-modeling-title"].valueOf() 
  dataModelingExplanation.innerHTML = textContent[languageSelector.value]["data-modeling-explanation"].valueOf() 
  taskAutomationTitle.innerHTML = textContent[languageSelector.value]["task-automation-title"].valueOf() 
  taskAutomationExplanation.innerHTML = textContent[languageSelector.value]["task-automation-explanation"].valueOf() 
  webApplicationsTitle.innerHTML = textContent[languageSelector.value]["web-applications-title"].valueOf() 
  webApplicationsExplanation.innerHTML = textContent[languageSelector.value]["web-applications-explanation"].valueOf()  

  //projects section
  projectsSectionTitle.innerHTML = textContent[languageSelector.value]["projects-section-title"].valueOf() 
  timeSeriesTitle.innerHTML = textContent[languageSelector.value]["time-series-title"].valueOf() 
  rgbFilterTitle.innerHTML = textContent[languageSelector.value]["rgb-filter-title"].valueOf() 
  calculatorTitle.innerHTML = textContent[languageSelector.value]["calculator-title"].valueOf() 
  calculatorSubtitle.innerHTML = textContent[languageSelector.value]["calculator-subtitle"].valueOf()  
}

languageSelector.addEventListener(
  "change",
  changingLanguage
)
window.addEventListener(
  "load",
  ()=>{
    changingLanguage()

    languageSelector.selectedIndex = 0
    languageSelector.dispatchEvent(new Event("change"))
  }
)

///////////////////////////////////////////////////////
////////////// CSS animations
///////////////////////////////////////////////////////

////// header title and logos cascade
const startCascadeAnimation = () => {
  titleChars.forEach(
    (char) => {char.classList.add("running-animation")}
  )
  logos.forEach(
    (logo) => {logo.classList.add("running-animation")}
  )
}

window.addEventListener(
  "DOMContentLoaded", 
  () => setTimeout(startCascadeAnimation, 8000)
)

////// scrolling effects
// skill circles
const createSkillCircleObserver = () => {
  const callback = (entries, skillCircleObserver) => {
    entries.forEach(
      (entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add("rescale-skill-circle")
        } 
      }
    )
  }
  const skillCircleObserver = new IntersectionObserver(callback)
  skillCircles.forEach(
    (skillCircle) => {
      skillCircleObserver.observe(skillCircle)
    }
  )
}

window.addEventListener(
  "DOMContentLoaded", 
  createSkillCircleObserver
)

// header shrinkage
const shrinkHeaderAndShowArrow = () => {
  const scrollPosition = window.scrollY
  
  const shrinkThreshold = 100
  
  if(scrollPosition > shrinkThreshold) {
    header.classList.add("shrunk-header")
    upArrow.classList.add("visible-up-arrow")
  } else {
    header.classList.remove("shrunk-header")
    upArrow.classList.remove("visible-up-arrow")
  }
}

window.addEventListener(
  "scroll", 
  shrinkHeaderAndShowArrow
)

// appearing of up arrow
const upArrowFunction = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

upArrow.addEventListener(
  "click",
  upArrowFunction
)

///////////////////////////////////////
////////////// showcase functions
//////////////////////////////////////

const arrowFunction = (pointingDirection) => {
  
  let showcaseIndex
  
  for(let i = 0; i < projects.length; i++){
    console.log(projects)

    if(projects[i].classList.contains("highlighted-project")){
      projects[i].style.transform = "translateX(-200%)"
      projects[i].style.display = "none"
      projects[i].classList.replace("highlighted-project", "hidden-project")
      
      switch(pointingDirection){
        case "left":
          showcaseIndex = (i-1) < 0 ? (projects.length - 1) : (i-1)
          break

        case "right":
          showcaseIndex = (i+1) > (projects.length - 1) ? 0 : (i+1)
          break
        }
        
        console.log(showcaseIndex)
        console.log(projects[showcaseIndex])
        projects[showcaseIndex].style.transform = "translateX(200%)"
        projects[showcaseIndex].style.display = "initial"        
        projects[showcaseIndex].style.transform = "translateX(0%)"
        projects[showcaseIndex].classList.replace("hidden-project", "highlighted-project")
        break
    }
  }
}

leftArrow.addEventListener(
  "click", 
  () => arrowFunction("left")
)
rightArrow.addEventListener(
  "click", 
  () => arrowFunction("right")
)

//////// 
rgbFilterProject.addEventListener(
  "click",
  () => {
    const tempLink = document.createElement("a")
    tempLink.setAttribute("href", "https://image-modifier-app.uc.r.appspot.com/")
    tempLink.setAttribute("target", "_blank");
    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
  }  
)

timeSeriesProject.addEventListener(
  "click",
  () => {
    const tempLink = document.createElement("a")
    tempLink.setAttribute("href", "https://tomazlanza.github.io/time-series-modeling/")
    tempLink.setAttribute("target", "_blank");
    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
  }  
)

calculatorProject.addEventListener(
  "click",
  () => {
    const tempLink = document.createElement("a")
    tempLink.setAttribute("href", "https://tomazlanza.github.io/calculator/")
    tempLink.setAttribute("target", "_blank");
    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
  }  
)

