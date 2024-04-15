const aboutButton = document.getElementById('button2');
const homeButton = document.getElementById('button1');

function handleAboutClick() {

    const aboutAnchor = aboutButton.querySelector('.nav__link');
    const homeAnchor = homeButton.querySelector('.nav__link');

    if (!aboutAnchor.classList.contains('clicked')){
        aboutAnchor.classList.add('clicked');
        aboutAnchor.classList.add('active-link');
        homeAnchor.classList.remove('clicked');
        homeAnchor.classList.remove('active-link');
    }
    
}

function handleHomeClick() {
    const aboutAnchor = aboutButton.querySelector('.nav__link');
    const homeAnchor = homeButton.querySelector('.nav__link');

    if (!homeAnchor.classList.contains('clicked')){
        aboutAnchor.classList.remove('clicked');
        aboutAnchor.classList.remove('active-link');

        homeAnchor.classList.add('clicked');
        homeAnchor.classList.add('active-link');
        
}}

aboutButton.addEventListener("click", handleAboutClick);
homeButton.addEventListener("click", handleHomeClick);

