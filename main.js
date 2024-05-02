import { projectContainer } from "./projects.mjs"

// const paragraphs = document.querySelectorAll
const header = document.querySelector("header")
const article = document.querySelector("article")
const titleChars = document.querySelectorAll(".title-char")
const photos = document.querySelectorAll(".photo")
const welcomeSection = document.querySelector("#welcome-section")
const skillsSection = document.querySelector("#skills-section")
const portfolioSection = document.querySelector("#portfolio-section")
const aboutSection = document.querySelector("#about-section")

const logos = document.querySelectorAll(".logo")
const leftArrow = document.querySelector("#left-arrow")
const rightArrow = document.querySelector("#right-arrow")
const upArrow = document.querySelector(".up-arrow")
const projects = document.querySelectorAll(".project")
const skillCircles = document.querySelectorAll(".skill-circle")
const timeSeriesProject = document.querySelector("#time-series-project")
const rgbFilterProject = document.querySelector("#rgb-filter-project")
const skillsLink = document.querySelector("#skills-link")
const portfolioLink = document.querySelector("#portfolio-link")
const aboutLink = document.querySelector("#about-link")

////////////////////////////////////////
//////// navbar links
////////////////////////////////////////

skillsLink.addEventListener(
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
portfolioLink.addEventListener(
  "click",
  ()  => {
    portfolioSection.scrollIntoView(
      {behavior: "smooth"}
    )
    setTimeout(
      () => {
        portfolioSection.scroll(
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
    aboutSection.scrollIntoView(
      {behavior: "smooth"}
    )
    setTimeout(
      () => {
        aboutSection.scroll(
          {
            top: 50,
            behavior: "smooth",
          }
        )
      }, 400)
  }
)

///////////////////////////////////////////////////////
////////////// Scrolling animations
///////////////////////////////////////////////////////

////// header title
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
  () => setTimeout(startCascadeAnimation, 10000)
)

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

//// after first scroll
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
////////////// Portfolio effect
//////////////////////////////////////

const newArrowFunction = (
  projectContainer,
  pointingDirection,
  typeSelection,
) => {

  for(let i = 0; i < projectContainer.length; i++){
    if(
      (projectContainer[i].classList.contains("highlighted-project")) &&
      (projectContainer[i].classList.contains(typeSelection))
    ){ 
      // projects[i].style.transform = "translateX(-200%)"
      projectContainer[i].style.display = "none"
      projectContainer[i].classList.replace("highlighted-project", "hidden-project")
      // console.log("highlighted project removed")
      // console.log(projectContainer[i])
      
      switch(pointingDirection){
        case('right'):
          for (let j = i; j < projectContainer.length; j++){
            if(projectContainer[j].classList.contains(typeSelection)){
              // projectContainer[j].style.transform = "translateX(200%)"
              projectContainer[j].style.display = "initial"        
              // projectContainer[j].style.transform = "translateX(0%)"
              projectContainer[j].classList.replace("hidden-project", "highlighted-project")
              // console.log(projectContainer[i])
            }
            break
          }
          break
        case('left'): 
          for (let j = i; j === 0; j--) {
            if(projectContainer[j].classList.contains(typeSelection)){
              // projectContainer[i+1].style.transform = "translateX(200%)"
              projectContainer[i-1].style.display = "initial"        
              // projectContainer[i].style.transform = "translateX(0%)"
              projectContainer[i-1].classList.replace("hidden-project", "highlighted-project")
              // console.log(projectContainer[i])
            }
            break
          }
          break
      } 
    }
  }  
}


const arrowFunction = () => {
  
  for(let i = 0; i < projects.length; i++){
    if(projects[i].classList.contains("highlighted-project")){
      projects[i].style.transform = "translateX(-200%)"
      projects[i].style.display = "none"
      projects[i].classList.replace("highlighted-project", "hidden-project")
      console.log("i've removed the highlighted project")
      console.log(projects[i])
      continue
    } if(projects[i].classList.contains("hidden-project")){
      projects[i].style.transform = "translateX(200%)"
      projects[i].style.display = "initial"        
      projects[i].style.transform = "translateX(0%)"
      projects[i].classList.replace("hidden-project", "highlighted-project")
      console.log(projects[i])
    }
  }
}

leftArrow.addEventListener(
  "click", 
  arrowFunction
)
rightArrow.addEventListener(
  "click", 
  arrowFunction
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

