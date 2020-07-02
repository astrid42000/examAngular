import {Type} from './type';
import {Marque} from './marque';
import {Categorie} from './categorie';

export class Ordinateur {
  id: number;
  modele: string;
  marque: Marque;
  type: Type;
  category: Categorie;
  prixAchat: number;
  prixVente: number;
  dateEntreStock:string;


  constructor(id: number= 0, modele: string= null, marque: Marque= null, type: Type= null, category: Categorie= null, prixAchat: number= 0, prixVente: number= 0, dateEntreStock: string= null) {
    this.id = id;
    this.modele = modele;
    this.marque = marque;
    this.type = type;
    this.category = category;
    this.prixAchat = prixAchat;
    this.prixVente = prixVente;
    this.dateEntreStock = dateEntreStock;
  }
}
