const toggleBar = document.querySelector(".fa-bars");
const links = document.querySelector(".nav-links");
      
toggleBar.addEventListener("click", ()=>{
  console.log(links)
  links.classList.toggle("active");
})
      