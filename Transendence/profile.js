import {} from "./dashBoardPage.js";

export class Profile extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("p");
        this.textElement.textContent = "Profile";
        this.shadow.appendChild(this.textElement)
        this.loginElement = document.createElement("p");
        this.loginElement.textContent = "Match History";
        this.loginElement.addEventListener("click", () => {
            const notificationElement = document.querySelector('main-page').shadowRoot.childNodes[0].shadowRoot.querySelector("notifi-cation").shadowRoot;
            const matchHistory = document.createElement("match-history")
            notificationElement.appendChild(matchHistory);
            // console.log(notificationElement)
        });
        this.shadow.appendChild(this.loginElement)
    }
}

customElements.define("pro-file", Profile);



