import {} from "./dashBoardPage.js";

export function isTag(node, tagName) {
    // Ensure we're dealing with an element node
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }
  
    // Compare tag names ignoring case (HTML tags are not case-sensitive)
    return node.tagName.toLowerCase() === tagName.toLowerCase();
  }

  
export class Profile extends HTMLElement{
    constructor(){
        super();
    }
    
    connectedCallback(){
      this.shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      div.textContent = "Profile";

      const css = document.createElement("link");
      css.setAttribute("rel","stylesheet");
      css.setAttribute("href","./components/profile.css");

      this.loginElement = document.createElement("p");
      this.loginElement.textContent = "Match History";
      this.loginElement.addEventListener("click", () => {
          const notificationElement = document.querySelector('main-page').shadowRoot.childNodes[0].shadowRoot.querySelector("notifi-cation").shadowRoot;
          const matchHistory = document.createElement("match-history")
          console.log(notificationElement);
          if(notificationElement.childNodes.length == 3)
            {
              const nodeRemove = notificationElement.childNodes[2]
              notificationElement.removeChild(nodeRemove)
            }
              // 
          if(!isTag(notificationElement.lastChild,"match-history"))
              notificationElement.appendChild(matchHistory);
      });
      // this.shadow.appendChild(this.loginElement)
      div.appendChild(this.loginElement);
      this.shadow.appendChild(css);
      this.shadow.appendChild(div)
    }
}

customElements.define("pro-file", Profile);



