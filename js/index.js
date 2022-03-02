const dropdownMenu = document.getElementById("dropdown-menu");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.querySelector("nav");

// Main content views
const contentFrames = document.querySelectorAll(".content-frame");
const homeContent = document.getElementById("home-content");
const yumiContent = document.getElementById("yumi-content");
const hardwareContent = document.getElementById("hardware-content");
const partsContent = document.getElementById("parts-content");
const interfaceContent = document.getElementById("interface-content");
const abilityContent = document.getElementById("ability-content");
const specsContent = document.getElementById("specs-content");
const link3D = document.getElementById("viewer-3d");

menuBtn.addEventListener("click", e => {
  if(dropdownMenu.classList.contains("dropdown-menu-open")){
    dropdownMenu.classList.remove("dropdown-menu-open")
  }
  else{
    dropdownMenu.classList.add("dropdown-menu-open");
  }
})

dropdownMenu.addEventListener("mouseleave", e => {
  dropdownMenu.classList.remove("dropdown-menu-open")
})

dropdownMenu.addEventListener("click", e => {
  if(e.target.classList.contains("dropdown-item")){
    setContent(e.target.id);
  }
})

navbar.addEventListener("click", e => {
  if(e.target.tagName == "A"){
    navLinks.forEach(link => {
      if(link.classList.contains("active-link")){
        link.classList.remove("active-link");
      }
    })
    e.target.classList.add("active-link");
  }

  switch(e.target.id){
    case "3d-link":
      removeCurrentFrame();
      link3D.classList.add("active-content");
      menuBtn.classList.add("hidden");
      break;
    case "home-link":
      removeCurrentFrame();
      homeContent.classList.add("active-content");
      menuBtn.classList.remove("hidden");
      break;
  }
})

function setContent(id) {

  removeCurrentFrame();

  switch(id){
    case "yumi":
      yumiContent.classList.add("active-content");
      break;
    case "hardware":
      hardwareContent.classList.add("active-content");
      break;
    case "parts":
      partsContent.classList.add("active-content");
      break;
    case "interface":
      interfaceContent.classList.add("active-content");
      break;
    case "abilities":
      abilityContent.classList.add("active-content");
      break;
    case "specs":
      specsContent.classList.add("active-content");
      break;
  }
}

function removeCurrentFrame(){
  contentFrames.forEach(frame => {
    if(frame.classList.contains("active-content")){
      frame.classList.remove("active-content");
    }
  })
}