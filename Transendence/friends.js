
import { isTag} from "./profile.js"
  
export class Friends extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("div");
        this.textElement.textContent = "Friends";
        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/friends.css");


        this.findFriends = document.createElement("button");
        this.findFriends.textContent = "Find Friends"
        this.findFriends.addEventListener("click",() =>{
            const notificationElement = document.querySelector('main-page').shadowRoot.childNodes[0].shadowRoot.querySelector("notifi-cation").shadowRoot;
            
            if(notificationElement.childNodes.length == 3)
            {
                const nodeRemove = notificationElement.childNodes[2]
                notificationElement.removeChild(nodeRemove)
            }
            const matchHistory = document.createElement("recommends-friends")
            if(!isTag(notificationElement.lastChild,"recommends-friends"))
                notificationElement.appendChild(matchHistory);
        })
        this.textElement.appendChild(this.findFriends)
        this.shadow.appendChild(css);
        this.shadow.appendChild(this.textElement)
    }
}

export class LiveChat extends HTMLElement{
    constructor(){
        super();
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
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("div");
        this.textElement.textContent = "List All Friends";

        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/recommentFriends.css");

        this.shadow.appendChild(css);
        this.shadow.appendChild(this.textElement)
    }
}

customElements.define("recommends-friends",RecommentFriends);
customElements.define("live-chat",LiveChat)
customElements.define("friends-block", Friends);
