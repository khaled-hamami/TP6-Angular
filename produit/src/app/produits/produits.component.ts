import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {
  produits: Produit[];

  constructor(private produiService: ProduitService) {
    this.produits = produiService.listeProduit();
  }

  ngOnInit(): void {}
  supprimerProduit(prod: Produit) {
    let conf = confirm('vous etes sure');
    if (conf) this.produiService.supprimerProduit(prod);
  }

}
