
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
document.addEventListener('DOMContentLoaded', buildNav);