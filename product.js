const mockJsonFindAllFrind = {
  friends: [
    {
      id: 1,
      username: "prem",
      avatar: "file_path",
      status: "online",
    },
    {
      id: 2,
      username: "sarah",
      avatar: "file_path",
      status: "online",
    },
  ],
};

class ShadowOneComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.textElement = document.createElement("p");
    this.textElement.textContent = "New Content From ShadowOne";
    this.shadow.appendChild(this.textElement);
    this.buttonElement = document.createElement("button");
    this.buttonElement.textContent = "Click to Replace";
    this.buttonElement.addEventListener("click", () => {
      // Remove the h1 element
      this.shadow.removeChild(this.textElement);
      this.shadow.removeChild(this.buttonElement);
      navigateTo("/remove");
      navigateTo("/shadow-two-component");
    });
    this.shadow.appendChild(this.buttonElement);
  }
}

class ShadowTwoComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.textElement = document.createElement("p");
    this.textElement.textContent = "New Content From ShadowTwo";
    this.shadow.appendChild(this.textElement);
    this.buttonElement = document.createElement("button");
    this.buttonElement.textContent = "Click to Replace";
    this.buttonElement.addEventListener("click", () => {
      // Remove the h1 element
      this.shadow.removeChild(this.textElement);
      this.shadow.removeChild(this.buttonElement);
      navigateTo("/remove");
      navigateTo("/shadow-one-component");
    });
    this.shadow.appendChild(this.buttonElement);
  }
}

customElements.define("shadow-one-component", ShadowOneComponent);
customElements.define("shadow-two-component", ShadowTwoComponent);

const componentMap = {
  "/shadow-one-component": ShadowOneComponent,
  "/remove": "",
  "/shadow-two-component": ShadowTwoComponent,
};

navigateTo = (path) => {
  const container = document.getElementById("app-container");
  if (path.indexOf("remove") > 0) {
    container.removeChild(container.firstChild);
    return;
  }
  const component = componentMap[path];
  if (component) {
    container.appendChild(document.createElement(path.replace("/", "")));
  }
};

navigateTo("/shadow-one-component");
