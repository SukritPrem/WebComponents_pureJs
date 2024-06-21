import {DashBoardPage} from "./dashBoardPage.js";
import {} from "./profile.js";

class FirstPage extends HTMLElement{
    constructor(){
        super();
    }
    
    connectedCallback(){
        this.shadow = this.attachShadow({ mode: "open" });
        this.div = document.createElement("div");
        this.div.setAttribute("id","firstPage")

        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/firstPage.css");

        this.textElement = document.createElement("p");
        this.textElement.textContent = "First Page";
        this.loginElement = document.createElement("button");
        this.loginElement.textContent = "Login";
        this.loginElement.addEventListener("click", () => {
          navigateToForMainPage("/dashboard-page");
        });

        this.div.appendChild(css)
        this.div.appendChild(this.textElement)
        this.div.appendChild(this.loginElement)

        this.shadow.appendChild(this.div)
        let divGame = document.createElement("div")
        divGame.setAttribute("id","gameTag");
        this.gameElement = document.createElement("p");
        this.gameElement.textContent = "Game";

        divGame.appendChild(this.gameElement)

    
        this.shadow.appendChild(divGame)

        const divFooter = document.createElement("div")
        divFooter.setAttribute("id","footer");
        this.gameElement = document.createElement("p");
        this.gameElement.textContent = "Footer"; 
        divFooter.appendChild(this.gameElement)
        this.shadow.appendChild(divFooter)
    }
}


class MainPage extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
}

customElements.define("main-page", MainPage);
customElements.define("first-page", FirstPage);


const componentMap = {
    "/main-page": MainPage,
    "/first-page": FirstPage,
    "/dashBoardPage-board": DashBoardPage,
};



function navigateToForMainPage(path){
    const container = document.querySelector("main-page");

    if(path.indexOf("dashboard-page") > 0)
    {
        if(container.shadowRoot.hasChildNodes())
            container.shadowRoot.removeChild(container.shadowRoot.firstChild)
        const textElement = document.createElement("dashBoard-page");
        container.shadowRoot.appendChild(textElement);
    }
    else if(path.indexOf("first-page") > 0)
    {
        if(container.shadowRoot.hasChildNodes())
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
// navigateToForMainPage("/first-page") //for real
navigateToForMainPage("/dashboard-page")