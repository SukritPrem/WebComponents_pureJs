
export class Notification extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("p");
        this.textElement.textContent = "notification";
        console.log(this.shadow)
        this.shadow.appendChild(this.textElement)
    }
}

export class Mark {
    test(){
        console.log("Hello mark");
    }
}


