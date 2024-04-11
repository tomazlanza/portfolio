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
const calculatorProject = document.querySelector("#calculator-project")
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

////////////////////////////////////////
//////// CSS animations
////////////////////////////////////////

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

////// welcome photos

const slidingKeyFrames = [
  {
    opacity: 1,
    scale: 1,
  },
  {
    opacity: 1,
    scale: 1.05,
  },
  {
    opacity: 0,
    scale: 1.05,
  },
]

let photoIndex = 0

const slidingKeyFramesDuration = 8000

const slidingKeyFramesOptions = {
  duration: slidingKeyFramesDuration,
  iterations: 1,
  offset: [0, 0.99, 1],
}

const slidingPhotos = () => {

  console.log("sliding function")

  //removing all photos that differ from index-referenced photo 
    //to avoid unintentional overlapping
  for(let i = 0; i < photos.length; i++) {
    photos[i].addEventListener(
      "animationend", 
      (event) => {
        console.log(event)
        slidingPhotos()
      }
    )

    if(photos[i].classList.contains("top-welcome-photo")){
      photos[i].classList.remove("top-welcome-photo")
    } else if(i != photoIndex.valueOf()) {
      welcomeSection.removeChild(photos[i])
    }
  }
  
  //animating index-referenced photo
  photos[photoIndex].classList.add("top-welcome-photo")
  photos[photoIndex].animate(slidingKeyFrames, slidingKeyFramesOptions)

  //setting next value for photoIndex
  photoIndex < (photos.length - 1) ? photoIndex =+ 1 : photoIndex = 0 

  //appending next index-referenced photo
    //before the animation is over
  setTimeout(
    () => {
      welcomeSection.appendChild(photos[photoIndex])
      console.log("new photo's been appended!")
    }, (slidingKeyFramesDuration/2)
  )
}


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

//// fade-in and -out

const aboutSectionObserver = () => {
  
  const aboutSectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add("fading-class")
      }
    })
  }

  const mainObserver = new IntersectionObserver(mainObserverCallback, options)
  paragraphs.forEach(element => mainObserver.observe(element))
}


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
//////////////Portfolio effect
//////////////////////////////////////

const ArrowFunction = () => {
  
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
  ArrowFunction
)
rightArrow.addEventListener(
  "click", 
  ArrowFunction
)

// const linkToProject = (stringURL) => {
  //   const tempLink = document.createElement("a")
//   tempLink.setAttribute("href", stringURL)
//   document.body.appendChild(tempLink)
//   tempLink.click()
//   document.body.removeChild(tempLink)
// }

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


//setting listeners that will call the function
  
  // const attachAnimationEndListeners = () => {
  //   photos.forEach(
  //     (photo) => {
  //       photo.addEventListener(
  //         "animationend",
  //         (event) => {
  //           console.log("an animation has ended!")
  //           console.log(event)
  //           slidingPhotos()
  //         }
  //       )
  //     }
  //   )
  // }
  
  // window.addEventListener(
  //   "DOMContentLoaded",
  //   () => {
  //     slidingPhotos()
  //   }
  // )
  
  // setInterval(
  //   () => {
  //     slidingPhotos()
  //   },
  //   slidingKeyFramesDuration
  // )
  
  // window.addEventListener('DOMContentLoaded', () => {
  //   setInterval(slidingAnimation, 4000);
  // });
  
  // let photoIndex = 0
  
  // const slidingAnimation = () => {  
    
  //   photos.forEach(
  //     (photo) => {
  //       if(photo.classList.contains("sliding-photo")) {
  //         photo.classList.remove("sliding-photo")
  //       } else if (welcomeSection.contains(photo)) {
  //         welcomeSection.removeChild(photo)
  //       }
  //     }
  //   )
  
  //   welcomeSection.appendChild(photos[photoIndex])
  //   photos[photoIndex].classList.add("sliding-photo")
    
  //   if(photoIndex === 0) {
  //     welcomeSection.appendChild(photos[photoIndex + 1])
  //   } else {
  //     welcomeSection.appendChild(photos[photoIndex - 1])
  //   } 
    
  //   photoIndex === 0 ? photoIndex = 1 : photoIndex = 0
  // }
  
  // slidingAnimation()
  
  // const slidingAnimation = () => {  
    
  //   photos.forEach(photo => photo.classList.remove("sliding-photo"))
  //   photos[photoIndex].classList.add("sliding-photo")
  
  //   photoIndex += 1
  //   photoIndex === photos.length ? photoIndex = 0 : null
  // }
  
  // slidingAnimation()
  
  ////////////////////////////////////////
  //////// scrolling effects
  ////////////////////////////////////////
  
  //// growing skill circles