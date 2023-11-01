import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
})
export class UpdateProduitComponent {
  currentProduit = new Produit();
  categories!: Categorie[];
  updatedCatId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
    this.currentProduit = this.produitService.consulterProduit(
      this.activatedRoute.snapshot.params['id']
    );
    this.updatedCatId = this.currentProduit.categorie!.idCat;
  }
  updateProduit() {
    this.currentProduit.categorie = this.produitService.consulterCategorie(
      this.updatedCatId
    );
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }
}
