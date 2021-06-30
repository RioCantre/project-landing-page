// global variables
const navList = document.getElementById('navBar');
const fragment = document.createDocumentFragment();
const navSection = document.querySelectorAll('section');
const backToTop = document.getElementById('goTop');



// build the nav
function buildNav() {
    navSection.forEach(function (navSection) {
        let li = document.createElement('li');
        li.textContent = navSection.getAttribute('data-nav');
        fragment.appendChild(li);
    });
    
    navList.appendChild(fragment);
}


// jump to every section
function jumpToSection() {
    let sections = document.getElementsByTagName('section');
    let list = document.querySelectorAll('li');

    for (let i = 0; i < list.length; i++){
        let sectionVh = sections[i].offsetTop;


        list[i].addEventListener('click', function () {
            window.scrollTo({
                top: sectionVh,
                behavior: 'smooth'
            });
        });
    }
}


// make active navigation list
function activeState() {
    let btns = document.querySelectorAll('li');
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName('active-class');
        if (current.length > 0) { 
            current[0].className = current[0].className.replace('active-class', '');
      } 
      this.className += 'active-class';  
      });
    }
}



// build a button to scroll the page back to top
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backToTop.classList.add('myBtn');
    } else {
        backToTop.classList.remove('myBtn');
        
    }
});



// click event to scroll back to the top
function goToTop() {
    document.getElementById('goTop').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}



// sticky navigation bar
window.onscroll = function() {myFunction()};

let navbar = document.getElementById('navBar');
let sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
}



// addtional collapsible content in every section
let coll = document.getElementsByClassName('collapsible');
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
        content.style.display = 'none';
        } else {
        content.style.display = 'block';
        }
    });
}



// function calls
goToTop();
buildNav();
myFunction();
activeState();
jumpToSection();


