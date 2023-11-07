const usernameInput = loginPage.children[0].children[1];
const passwordInput = loginPage.children[1].children[1];
const registerBtn = loginPage.children[2];
const signinBtn = loginPage.children[3];


const signin = (e)=>{
    const username = usernameInput.value;
    const password = passwordInput.value;
    const data = {username, password}
    
    console.log('signin',username, password);

    // POST /signin 
    const successThen = (res)=>{
        transitionToPage("homePage");
    };
    const failureThen = (err)=>{
        console.log(err)
    }
    sendHTTPPost("/signin", data, successThen, failureThen);
};

const register = (e)=>{
    const username = usernameInput.value;
    const password = passwordInput.value;
    const data = {username, password}
    
    console.log('register',username, password);

    // POST /register
    const successThen = (res)=>{
        transitionToPage("homePage");
    };
    const failureThen = (err)=>{
        console.log(err)
    }
    sendHTTPPost("/register", data, successThen, failureThen);
}

registerBtn.addEventListener("click", register);
signinBtn.addEventListener("click",signin);





