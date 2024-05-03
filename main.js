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
const calculatorProject = document.querySelector("#calculator-project")
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

