import { Component, OnInit } from '@angular/core';
import {DataPaginaService} from '../../services/data-pagina.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor( public dataPaginaService: DataPaginaService) { }

  ngOnInit() {
  }

}
