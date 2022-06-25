document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".burger").classList.toggle("active");
  });
  
  const navLinks = Array.from(document.querySelectorAll(".nav-links li"));
  
  navLinks.forEach((item) => {
    item.addEventListener("click", (e) => {
      navLinks.forEach((link) => link.classList.remove("selected"));
      e.target.classList.add("selected");
    });
  });
