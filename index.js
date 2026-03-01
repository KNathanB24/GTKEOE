const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("h2[id]");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

const title = document.getElementById("main-title");

title.addEventListener("click", function() {
  if (title.style.color === "green") {
    title.style.color = "#333";
  } else {
    title.style.color = "green";
  }
});