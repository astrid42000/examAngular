import { Component, OnInit } from '@angular/core';
import {Ordinateur} from '../../model/ordinateur';
import {OrdinateurService} from '../../service/ordinateur.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  ordi: Ordinateur = new Ordinateur();
  mesordi: Ordinateur[];
  isLoading:boolean;
  constructor(private ordinateurService: OrdinateurService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.ordinateurService.ordiById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Ordinateur) => this.ordi = data);
}
 delete(id: number): void{
    this.isLoading = true;
    this.ordinateurService.deleteOrdi(id).subscribe(then => {
      this.ordinateurService.allOrdi().subscribe(
        (newdata: Ordinateur[]) => {
          this.mesordi = newdata;
          this.isLoading = false;
        })
    })
    }
}
