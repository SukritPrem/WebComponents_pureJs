export class Tournament extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("div");
        this.textElement.textContent = "Tournament";
        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/tournament.css");
        this.shadow.appendChild(css);
        this.shadow.appendChild(this.textElement)
    }
}

customElements.define("tour-na-ment", Tournament)