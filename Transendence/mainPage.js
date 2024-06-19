

class FirstPage extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("p");
        console.log(this.textElement)
        this.textElement.textContent = "First Page";
        this.shadow.appendChild(this.textElement)
        this.buttonElement = document.createElement("button");
        this.buttonElement.textContent = "Click to DashBoard";
        this.buttonElement.addEventListener("click", () => {
          navigateTo("/dash-board");
        });
        this.shadow.appendChild(this.buttonElement)
    }
}

class DashBoardPage extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("p");
        this.textElement.textContent = "Dash Board Page";
        this.shadow.appendChild(this.textElement)
        this.buttonElement = document.createElement("button");
        this.buttonElement.textContent = "Click to DashBoard";
        this.buttonElement.addEventListener("click", () => {
          navigateTo("/");
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
customElements.define("dashBoard-page", DashBoardPage);
customElements.define("first-page", FirstPage);

const componentMap = {
    "/main-page": MainPage,
    "/first-page": FirstPage,
    "/dashBoardPage-board": DashBoardPage,
};


navigateTo = (path) => {
    const container = document.querySelector("main-page");

    // console.log(container.shadowRoot.childNodes.length)
    if(container.shadowRoot.childNodes.length == 0)
    {
        const textElement = document.createElement("first-page");
        container.shadowRoot.appendChild(textElement);
        console.log(container.shadowRoot.childNodes)
    }
    else if(path.indexOf("dash-board") > 0)
    {
        container.shadowRoot.removeChild(container.shadowRoot.firstChild)
        const textElement = document.createElement("dashBoard-page");
        container.shadowRoot.appendChild(textElement)
        console.log(container.shadowRoot.childNodes);
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
  
  navigateTo("/main-page");