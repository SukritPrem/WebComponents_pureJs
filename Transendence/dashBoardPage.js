
export class Notification extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("p");
        this.textElement.textContent = "notification";
        this.shadow.appendChild(this.textElement)
    }
}
customElements.define("notifi-cation", Notification);
export class MatchHistory extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("p");
        this.textElement.textContent = "match history Element";
        this.shadow.appendChild(this.textElement)
    }
}

customElements.define("match-history", MatchHistory);

