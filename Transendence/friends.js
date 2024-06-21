
// import { isTag} from "./profile.js"
import { changeNotification } from "./dashBoardPage.js";

export class Friends extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("div");
        this.textElement.textContent = "Friends";
        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/friends.css");


        this.findFriends = document.createElement("button");
        this.findFriends.textContent = "Find Friends"
        this.findFriends.addEventListener("click",() =>{
            changeNotification("recommends-friends")
        })
        this.textElement.appendChild(this.findFriends)
        this.shadow.appendChild(css);
        this.shadow.appendChild(this.textElement)
    }
}

export class LiveChat extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("div");
        this.textElement.textContent = "Live Chat";
        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/liveChat.css");
        this.shadow.appendChild(css);
        this.shadow.appendChild(this.textElement)
    }
}

export class RecommentFriends extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("div");
        this.textElement.textContent = "RecommentFriends";

        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/recommentFriends.css");

        this.shadow.appendChild(css);
        this.shadow.appendChild(this.textElement)
    }

    disconnectedCallback(){
        // console.log("delete")
    }
}

customElements.define("recommends-friends",RecommentFriends);
customElements.define("live-chat",LiveChat)
customElements.define("friends-block", Friends);
