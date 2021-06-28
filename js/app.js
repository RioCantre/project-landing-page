let docElement = document.documentElement;
let navList = document.getElementById('navBar');
let fragment = document.createDocumentFragment();
let navSection = document.querySelectorAll('section');
let backToTop = document.getElementById('goTop');
console.log(navSection);
console.log(backToTop);


function isInViewport (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function buildNav() {
  navSection.forEach(function (navSection) {
    var li = document.createElement('li');
    li.textContent = navSection.getAttribute('data-nav');
    fragment.appendChild(li);
    console.log(li);
  });
  
  navList.appendChild(fragment);
}
buildNav();


function setActiveNav() {
  for (let i = 0; i < navSection.length; i++){
    if (isInViewport(navSection[i])) {
      navSection[i].classList.add('active-class');
    } else {
      navSection[i].classList.remove('active-class');
    }
    // console.log(navSection[i]);
  }
}
document.addEventListener('scroll', function () {
  setActiveNav();
})

// sticky nav
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
myFunction();

let activeScrolling = () => {
  let viewportY = docElement.clientHeight - 152;
  if (docElement.scrollTop >= viewportY) {
    backToTop.classList.add("myBtn");
  } else {
    backToTop.classList.remove("myBtn");
  }
}

let scrollPageToTop = () => {
  docElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

backToTop.addEventListener("click", scrollPageToTop);


// collapsible content
var coll = document.getElementsByClassName("collapsible");
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
