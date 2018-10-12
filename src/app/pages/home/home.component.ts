import { Component, OnInit } from '@angular/core';
import {DataPaginaService } from '../../services/data-pagina.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(public dataPaginaService: DataPaginaService) { }

  ngOnInit() {
 

  }

}

}
