import {} from "./friends.js"
import {} from "./tournament.js"
import { isTag} from "./profile.js"
export class Notification extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("div");
        // this.textElement.textContent = "notification";

        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/notification.css");

        this.shadow.appendChild(css);
        this.shadow.appendChild(this.textElement)
    }
}

export function changeNotification(element){
    const notificationElement = document.querySelector('main-page').shadowRoot.childNodes[0].shadowRoot.querySelector("notifi-cation").shadowRoot;
    // console.log(notificationElement.childNodes);
    if(notificationElement.childNodes.length == 3)
    {
        const nodeRemove = notificationElement.childNodes[2]
        notificationElement.removeChild(nodeRemove)
    }
    const matchHistory = document.createElement(element)
    if(!isTag(notificationElement.lastChild, element))
        notificationElement.appendChild(matchHistory);
}


customElements.define("notifi-cation", Notification);
export class MatchHistory extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("div");
        this.textElement.textContent = "match history Element";

        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/matchHistory.css");

        this.shadow.appendChild(css);
        this.shadow.appendChild(this.textElement)
    }

    disconnectedCallback(){
        console.log("delete match history components")
    }
}


export class DashBoardPage extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadow = this.attachShadow({ mode: "open" });
        this.navElement = document.createElement("div");
        this.navElement.textContent = "nav bar";
        this.navElement.setAttribute("id", "nav-bar");

        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/dashBoardPage.css");

        //append nav-bar
        this.shadow.appendChild(css);
        this.shadow.appendChild(this.navElement)

        
        this.profileElement = document.createElement("pro-file")
        this.profileElement.setAttribute("id","pro-file");

        this.notificationElement = document.createElement("notifi-cation")
        const divMiddle = document.createElement("div");
        divMiddle.setAttribute("id","div-middle");
        this.tournamentElement = document.createElement("tour-na-ment")
        divMiddle.appendChild(this.tournamentElement);
        divMiddle.appendChild(this.notificationElement);
        
        const divRight = document.createElement("div");
        const liveChat = document.createElement("live-chat");
        const friend = document.createElement("friends-block");
        divRight.setAttribute("id","div-right");
        divRight.appendChild(friend);
        divRight.appendChild(liveChat);

        const divContent = document.createElement("div");
        divContent.setAttribute("id","div-content");
        divContent.appendChild(this.profileElement);
        divContent.appendChild(divMiddle);
        divContent.appendChild(divRight)

        console.log(divContent);
        this.shadow.appendChild(divContent)

        const divFooter = document.createElement("div")
        divFooter.setAttribute("id","footer");
        this.gameElement = document.createElement("p");
        this.gameElement.textContent = "Footer"; 
        divFooter.appendChild(this.gameElement)
        this.shadow.appendChild(divFooter)
        // this.shadow.appendChild(this.profileElement)
        // this.shadow.appendChild(this.notificationElement)
        // this.buttonElement = document.createElement("button");
        // this.buttonElement.textContent = "Click to DashBoard";
        // this.buttonElement.addEventListener("click", () => {
        //   navigateToForMainPage("/first-page");
        // });
        // this.shadow.appendChild(this.buttonElement)
    }
}

customElements.define("dashboard-page", DashBoardPage);
customElements.define("match-history", MatchHistory);

