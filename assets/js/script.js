/* Uses queryselector method to grab burger whilst
 attaching an eventlistener called click that will then display hamburger menu*/
document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active"); /* active class that gets toggled when querying nav-links and hamburger activation*/
    document.querySelector(".burger").classList.toggle("active");
  });
  // Array.from method used to return an array from any iterable object
  const navLinks = Array.from(document.querySelectorAll(".nav-links li"));
  // used foreach function for navLinks element to remove the selected class upon clicking
  navLinks.forEach((item) => {
    item.addEventListener("click", (e) => {
      navLinks.forEach((link) => link.classList.remove("selected"));
      e.target.classList.add("selected");
    });
  });
