var docElement = document.documentElement;
var navList = document.getElementById('navBar');
var fragment = document.createDocumentFragment();
var navSection = document.querySelectorAll('section');
var backToTop = document.getElementById('goTop');
console.log(navSection);
console.log(backToTop);


// build the nav
function buildNav() {
    navSection.forEach(function (navSection) {
        var li = document.createElement('li');
        li.textContent = navSection.getAttribute('data-nav');
        fragment.appendChild(li);
        console.log(li);
    });
    
    navList.appendChild(fragment);
}


// build a button to scroll the page back to Top
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backToTop.classList.add('myBtn');
    } else {
        backToTop.classList.remove('myBtn');
        
    }
})
function goToTop() {
    document.getElementById('goTop').addEventListener('click', function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    });
}


// sticky nav
window.onscroll = function() {myFunction()};

var navbar = document.getElementById('navBar');
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
}


// collapsible content
var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
        content.style.display = 'none';
        } else {
        content.style.display = 'block';
        }
    });
}


buildNav();
goToTop();
myFunction();