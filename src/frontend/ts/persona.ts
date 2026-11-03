class Persona implements Mostrador{
  private nombre: string ="";
  private apellido: string="";
  private dni: number = 0;
  
  
  constructor(nom: string, ape: string, dn: number) {
    this.apellido = ape;
    this.nombre = nom;
    this.dni = dn;
  }
  mostrarEnConsola(): void {
    console.log(this.nombre + " - " + this.apellido + " - " + this.dni);
  }
  mostrarEnAlert(): void {
    alert(this.nombre + " - " + this.apellido + " - " + this.dni);
  }

  public saludar(): void{
    
    this.mostrarEnConsola();
    alert("Hola, soy "+this.nombre);
    
  }
  

  public modificarNombre(nombre: string) {
    this.nombre = nombre;
  }
  public getNombre(): string{
    return this.nombre;
  }
}



