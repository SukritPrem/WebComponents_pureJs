import {} from "./dashBoardPage.js";
import {} from "./profile.js";

class FirstPage extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("p");
        // console.log(this.textElement)
        this.textElement.textContent = "First Page";
        this.shadow.appendChild(this.textElement)
        this.loginElement = document.createElement("button");
        this.loginElement.textContent = "Login";
        this.loginElement.addEventListener("click", () => {
          navigateToForMainPage("/dashboard-page");
        });
        this.shadow.appendChild(this.loginElement)
    }
}

class DashBoardPage extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("p");
        this.textElement.textContent = "Dash Board Page";
        this.shadow.appendChild(this.textElement)
        this.notificationElement = document.createElement("notifi-cation")
        this.profileElement = document.createElement("pro-file")
        this.shadow.appendChild(this.profileElement)
        this.shadow.appendChild(this.notificationElement)
        this.buttonElement = document.createElement("button");
        this.buttonElement.textContent = "Click to DashBoard";
        this.buttonElement.addEventListener("click", () => {
          navigateToForMainPage("/first-page");
        });
        this.shadow.appendChild(this.buttonElement)
    }
}

class MainPage extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
}

customElements.define("main-page", MainPage);
customElements.define("dashboard-page", DashBoardPage);
customElements.define("first-page", FirstPage);


const componentMap = {
    "/main-page": MainPage,
    "/first-page": FirstPage,
    "/dashBoardPage-board": DashBoardPage,
};



function navigateToForMainPage(path){
    const container = document.querySelector("main-page");

    // console.log(container.shadowRoot.childNodes.length)
    if(container.shadowRoot.childNodes.length == 0)
    {
        const textElement = document.createElement("first-page");
        container.shadowRoot.appendChild(textElement);
        // console.log(container.shadowRoot.childNodes)
    }
    else if(path.indexOf("dashboard-page") > 0)
    {
        container.shadowRoot.removeChild(container.shadowRoot.firstChild)
        const textElement = document.createElement("dashBoard-page");
        container.shadowRoot.appendChild(textElement);
    }
    else if(path.indexOf("first-page") > 0)
    {
        container.shadowRoot.removeChild(container.shadowRoot.firstChild)
        const textElement = document.createElement("first-page");
        container.shadowRoot.appendChild(textElement)
    }
    // if (path.indexOf("remove") > 0) {
    //   container.removeChild(container.firstChild);
    //   return;
    // }
    // const component = componentMap[path];
    // if (component) {
    //   container.appendChild(document.createElement(path.replace("/", "")));
    // }
    
  };
  
// navigateToForMainPage("/first-page")
navigateToForMainPage("/first-page")