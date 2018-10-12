import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoPagina} from '../interfaces/data-pagina';
import {Featured} from '../interfaces/featured';
import { Services } from '@angular/core/src/view';


@Injectable({
  providedIn: 'root'
})
export class DataPaginaService {

  info: InfoPagina = {};
  cargada = false;
  featureds: Featured [] = [];
  services: Services [] = [];


  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargarFeatureds();
    this.cargarServicios();

   }

   private cargarInfo() {

    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
    });


   }

private cargarFeatureds() {
this.http.get('assets/data/featured.json')
.subscribe((resp: Featured[] ) => {

  this.featureds = resp;
  console.log(resp);
});
}

private cargarServicios(){
this.http.get('assets/data/servicios.json')
.subscribe((resp: Services[]) => {

  this.services = resp;
  console.log(resp);
});

}

}
