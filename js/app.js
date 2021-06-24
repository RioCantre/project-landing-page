
function buildNav() {
    let sectionTag = document.getElementsByTagName('section');
    let navList = document.getElementById('navbar__list');
    for (let i = 0; sectionTag.length > i; i++) {
        let linkList = document.createElement('li');
        navList.appendChild(linkList);
        let viewSection = document.getElementById(`section${i}`);
        let sectionHeader = viewSection.querySelector('h2').innerText;
        let liList = document.getElementsByTagName('li')[i];
        liList.innerHTML = `<span> ${sectionHeader}</span>`;
    }
};
buildNav();



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
myFunction();

var coll = document.getElementsByClassName(".collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

