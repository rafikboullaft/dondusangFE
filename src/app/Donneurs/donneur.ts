export class Donneur {
  id: number;
  nom: string ;
  prenom: string;
  cin:string;
  telephone: string;
  adresse: string;
  date_naissance:  Date;
  sexe : string;
  dernier_don: Date ;
  etat_sante:Boolean ; // Good-true // Not Good= false
  groupe_sanguain:string;
  _links;

}
