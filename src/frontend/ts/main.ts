class Main implements EventListenerObject{
    public persona: Persona;
    constructor() {

        this.persona = new Persona("Matias", "Ramos", 321321);
    }

    handleEvent(object: Event): void {
        console.log(object);
        alert("se hizo click "+ this.persona.getNombre())
     
    }
    

}



window.addEventListener("load", () => {
    let miClase: Main = new Main();
    let boton: HTMLInputElement = document.getElementById("btn"); 
    boton.addEventListener("click",miClase)
});


 
