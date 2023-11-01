import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;
  constructor(private produiService: ProduitService, private router: Router) {}
  ngOnInit(): void {
    this.categories = this.produiService.listeCategories();
  }

  addProduit() {
    this.newCategorie = this.produiService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;
    this.produiService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);
  }
}
