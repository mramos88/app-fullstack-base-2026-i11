class Usuario extends Persona{
  private mail: string="";
  private password: string = "";

  constructor(nom: string, ape: string, dn: number,mail:string,password:string){
    super(nom, ape, dn);
    this.mail = mail;
    this.password = password;
  }
  
}
