export class AutocompleteModel {
  id: number;
  texto: string;

  get Id (){ return this.id; }

  get Texto (){ return this.texto; }

  set Id (value: number){ this.id = value; }

  set Texto (value: string){ this.texto = value; }

}
