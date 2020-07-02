import {Component, Input, OnInit} from '@angular/core';
import {OrdinateurService} from '../../service/ordinateur.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Ordinateur} from '../../model/ordinateur';
import {TypeService} from '../../servie/type.service';
import {Type} from '../../model/type';
import {Marque} from '../../model/marque';
import {MarqueService} from '../../service/marque.service';
import {Categorie} from '../../model/categorie';
import {CategorieService} from '../../service/categorie.service';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  ajoutOrdi: Ordinateur = new Ordinateur();
  isLoading: boolean;
  myTypes: Type[];
  mesMarques: Marque[];
  mesCategories: Categorie[];


  constructor(private categorieService: CategorieService, private marqueService: MarqueService, private typeService: TypeService, private ordinateurService: OrdinateurService, private route: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.typeService.allType().subscribe((data: Type[]) => {
      this.myTypes = data;
      console.log(this.myTypes);
    });

    this.marqueService.allMarque().subscribe((newdata: Marque[]) => {
      this.mesMarques = newdata;
      console.log(this.mesMarques);
    });

    this.categorieService.allCat().subscribe((data2:Categorie[]) => {
      this.mesCategories = data2;
    })
  }

  ajout() {
    this.isLoading = true;
    this.ordinateurService.AjoutOrdi(this.ajoutOrdi).subscribe(then => {
      this.isLoading = false, this.route.navigate(['/liste']);
    })

  }
}
