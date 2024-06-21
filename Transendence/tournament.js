import { changeNotification } from "./dashBoardPage.js";
import { isTag} from "./profile.js"
export class Tournament extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        // div.textContent = "Tournament";
        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/tournament.css");
        this.shadow.appendChild(css);

        const upcoming = document.createElement("tournament-upcoming")
        div.append(upcoming)

        // this.buttonElement = document.createElement("button");
        // this.buttonElement.textContent = "JOIN TOURNAMENT";
        // this.buttonElement.addEventListener("click", () =>{
        //     changeNotification("tournament-start");
        // })
        console.log(div.childNodes)

        // div.appendChild(this.buttonElement)
        this.shadow.appendChild(div)
    }
}

export class TournamentStart extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        div.textContent = "Tournament Start";

        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/tournamentStart.css");

        const button = document.createElement("button");
        button.textContent = "Start";
        button.addEventListener("click",() =>{
            changeTournament("tournament-ongoing")
        })
        div.appendChild(button);
        this.shadow.appendChild(css);
        this.shadow.appendChild(div)
    }

}

export class TournamentOngoing extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        div.textContent = "Tournament Ongoning";

        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/tournamentOngoing.css");

        const button = document.createElement("button");
        button.textContent = "Start";
        button.addEventListener("click",() =>{
            changeTournament("tournament-start")
        })
        div.appendChild(button);
        this.shadow.appendChild(css);
        this.shadow.appendChild(div)
    }
}

export class TournamentUpcoming extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        div.textContent = "Tournament UpComing";

        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/tournamentUpcoming.css");

        const button = document.createElement("button");
        button.textContent = "JOIN TOURNAMENT";
        button.addEventListener("click",() =>{
            changeNotification("tournament-start")
        })
        div.appendChild(button);
        this.shadow.appendChild(css);
        this.shadow.appendChild(div)
    }
}

function changeTournament(element){
    const tournamentElement = document.querySelector('main-page').shadowRoot.childNodes[0].shadowRoot.querySelector("tour-na-ment").shadowRoot.lastChild;
    console.log(tournamentElement.childNodes)
    // console.log(tournamentElement.childNodes[1].childNodes.length);
    
    if(tournamentElement.childNodes.length == 1)
    {
        const nodeRemove = tournamentElement.childNodes[0];
        // console.log(nodeRemove)
        tournamentElement.removeChild(nodeRemove)
    } 
    const newElement = document.createElement(element)
    console.log(newElement)
    tournamentElement.appendChild(newElement);

}


customElements.define("tournament-start", TournamentStart)
customElements.define("tour-na-ment", Tournament)
customElements.define("tournament-ongoing",TournamentOngoing)
customElements.define("tournament-upcoming", TournamentUpcoming)