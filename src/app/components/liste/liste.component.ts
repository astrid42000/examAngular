import { Component, OnInit } from '@angular/core';
import {OrdinateurService} from '../../service/ordinateur.service';
import {Ordinateur} from '../../model/ordinateur';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
mesOrdi: Ordinateur[];
  constructor(private ordinateurService: OrdinateurService) { }

  ngOnInit(): void {
    this.ordinateurService.allOrdi().subscribe((data: Ordinateur []) => this.mesOrdi = data);
  }
  soustraire(a: number, b: number): number{
    alert (a-b);
    return (a - b );

  }
}
