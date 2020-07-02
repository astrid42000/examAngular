import {Component, Input, OnInit} from '@angular/core';
import {OrdinateurService} from '../../service/ordinateur.service';
import {Ordinateur} from '../../model/ordinateur';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Type} from '../../model/type';
import {Marque} from '../../model/marque';
import {TypeService} from '../../servie/type.service';
import {MarqueService} from '../../service/marque.service';
import {Categorie} from '../../model/categorie';
import {CategorieService} from '../../service/categorie.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
 ordi: Ordinateur;
  myTypes: Type[];
  mesMarques: Marque[];
  mesCategories: Categorie[];


  constructor(private ordinateurService: OrdinateurService, private route: Router, private router: ActivatedRoute, private typeService: TypeService, private marqueService: MarqueService, private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.ordinateurService.ordiById(+ this.router.snapshot.paramMap.get('id')).subscribe((data: Ordinateur) =>{
      this.ordi = data;
    });

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
update(){
    this.ordinateurService.updateOrdi(this.ordi).subscribe(then =>{
      this.route.navigate(['/detail', this.ordi.id]);
    })

}
}
