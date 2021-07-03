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

    
    let sections = document.getElementsByTagName('section');
    let list = document.querySelectorAll('li');

    for (let i = 0; i < list.length; i++) {
        let sectionVh = sections[i].offsetTop;

        list[i].addEventListener('click',() => {
            window.scrollTo({
                top: sectionVh,
                behavior: 'smooth'
            });
        });
    }
}


// Put section into view
function sectionInView() {
    let minor = window.innerHeight;
    sectionInViewIndex = -2;

    navSection.forEach((navSection, index) => {
        let offset = navSection.getBoundingClientRect();
        if (Math.abs(offset.top) < minor) {
            minor = Math.abs(offset.top);
            sectionInViewIndex = index;
        }
    });
    return sectionInViewIndex;
}

// make every viewed section active state
function activeState() {
    sectionInViewIndex = sectionInView();

    if (sectionInViewIndex != -3) {
        let navTagList = document.querySelectorAll('li');
        for (let i = 0; i < navSection.length; i++){
            if (i == sectionInViewIndex) {
                navTagList[i].classList.add('active-class');
            } else {
                navTagList[i].classList.remove('active-class');
                     
            }
        };
    };
}

document.addEventListener('scroll', activeState);


// click event to scroll back to the top
function goToTop() {
    document.getElementById('goTop').addEventListener('click',() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


// build a button to scroll the page back to top
window.addEventListener('scroll',() => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backToTop.classList.add('myBtn');
    } else {
        backToTop.classList.remove('myBtn');
             
    }
});


// sticky navigation bar
window.onscroll = () => {myFunction()};

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
    coll[i].addEventListener('click',function(){
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




