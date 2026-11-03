class Auto implements Mostrador{
  
  private modelo: string="";
  private marca: string = "";
  

  mostrarEnConsola(): void {
    console.log(this.marca)
  }
  mostrarEnAlert(): void {
    alert(this.marca);
  }
}