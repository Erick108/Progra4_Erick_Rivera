class HolaMundo extends HTMLElement{
    constructor(){
        super();
        this.innerText = "Hola Mundo!"
    }
}

customElements.define("hola-mundo", HolaMundo);

class MiContador extends HTMLBRElement{
static get observedAttributes(){
    return["contador"];
}

    connectedCallBack(){
        let inicio = this.getAttribute("contador") ||0;
        this.innerHTML = `<button> Contador: <span id='num'> ${inicio}</span> </button>`;
            this.querySelector("button").onclick=()=>{
                let actual = parseInt(this.getAttribute("contador")||0)
                this.setAttribute("contador",actual+1)
            }
        }

        attributeChangedCallBack(name, old, newVal){
            let span = this.querySelector("#num")
            if(span) span.innerText = newVal
        }   
}

customElements.define("mi-contador", MiContador);








/*class CantidadStock extends HTMLElement{
    static get observerAttribute(){
        retrun['stock'];
    }
    connectedCallback(){
        let stockinicial = this.getAttribute("stock") || 0
    }
    constructor(){
        super();
        this.innerHTML = "<div> Stock: <span id='valor'>0</span><div>"
    }
        attributeChangedCallback(name, oldValue, newValue){
            if(name === 'stock'){
                this.querySelector('#valor').innerText = newValue;
            }
        }
}

customElements.define("cantidad-stock", CantidadStock);*/