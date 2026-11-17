class Main implements EventListenerObject{
    public persona: Persona;
    constructor() {

        this.persona = new Persona("Matias", "Ramos", 321321);
    }




    handleEvent(object: Event): void {

       

        
     


        this.buscarDevices();


      /*
            
        let iNombre: HTMLInputElement = document.getElementById("iNombre"); 
        this.persona.modificarNombre(iNombre.value);

        let parrafo: HTMLElement = document.getElementById("parrafo"); 
        console.log(parrafo.innerHTML)
        alert("se hizo click " + this.persona.getNombre()); 
        parrafo.innerHTML = "se hizo click " + this.persona.getNombre();
        
        
         
        
        div.hidden = true;
    
        
*/
     
    }
    
    private buscarDevices(): void {
        let consulta: XMLHttpRequest = new XMLHttpRequest();
        
        consulta.onreadystatechange = () => {
           
            if (consulta.readyState == 4) {
                if (consulta.status == 200) {
                    
                    let ul: HTMLElement = document.getElementById("dFormulario"); 
                    //console.log(consulta.responseText);

                    let devices:Array<Device> = JSON.parse(consulta.responseText);
                     
                    for (let s of devices) {
                        ul.innerHTML += `<li class="collection-item">${s.name} - ${s.description}</li>`;
                    }
                    
                } else {
                    console.log("Algo salio mal " + consulta.status);
                }                
                
            }
        };
        consulta.open("GET", "http://localhost:8000/devices", true);

        consulta.send();
    
        console.log("Termine de hacer la consulta");
    }
}



window.addEventListener("load", () => {
    let miClase: Main = new Main();
    let boton: HTMLInputElement = document.getElementById("btn");
    boton.addEventListener("click", miClase);

    let btnGuardar: HTMLInputElement = document.getElementById("btnGuardar");

    btnGuardar.addEventListener("click", miClase);
  
    let personasJson = [{"nombre": 'matias', 'edad': 38 },{'edad':23,'nombre':'Ramos'}];
    

    let personaStr = JSON.stringify(personasJson);


  



    
    
  

    
});


 
