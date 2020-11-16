import { Component, OnInit } from '@angular/core';
import { Sede } from '../shared/sede';
import { SedeService } from '../services/sede.service';



@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.scss']
})
export class SedesComponent implements OnInit {

  sedes: Sede[];
  errMess: string;

  constructor(private sedeService: SedeService) { }

  ngOnInit() {
    this.sedeService.getSedes().subscribe(sedes => this.sedes = sedes, errmes => this.errMess = <any>errmes);
  }

}
