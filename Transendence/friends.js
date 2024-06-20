

  
export class Friends extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("div");
        this.textElement.textContent = "Friends";
        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/friends.css");
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

customElements.define("live-chat",LiveChat)
customElements.define("friends-block", Friends);
