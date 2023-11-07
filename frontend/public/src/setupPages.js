//initialize the visibility of all pages

const loginPage = document.getElementById("login-page");
const homePage = document.getElementById("home-page");
const waitingPage = document.getElementById("waiting-page");
const canvas = document.getElementById("canvas");

const pages = {
    loginPage,
    homePage,
    waitingPage,
    trialPage: canvas, 
    skillEditPage: canvas,
    gamePage: canvas
}


/**
 * 
 * @param {*} dest the name of the target page to transition to
 * {'loginPage', 'homePage', 'waitingPage', 'trailPage', 'skillEditPage', 'gamePage'}
 */
const transitionToPage = (dest)=>{
    Object.keys(pages).forEach(
        (key) => {
            pages[key].hidden = true;
        }
    );
    pages[dest].hidden = false;
};



// run when this script is loaded
transitionToPage('loginPage');