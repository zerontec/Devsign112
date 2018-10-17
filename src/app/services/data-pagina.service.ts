import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoPagina} from '../interfaces/data-pagina';
import {Featured} from '../interfaces/featured';
import { Services } from '@angular/core/src/view';
import {ServiciosP} from '../interfaces/serviciosp';
import {InfoServicio} from '../interfaces/info-servicio';


@Injectable({
  providedIn: 'root'
})
export class DataPaginaService {

  info: InfoPagina = {};
  cargada = false;
  featureds: Featured [] = [];
  services: Services [] = [];
  servicios: ServiciosP [] = [];
  infoServicio: InfoServicio = {};
 


  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargarFeatureds();
    this.cargarServicios();
    this.cargarServicioP();
    this.cargarInfoServicio();

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
this.http.get('https://devsign-3a79e.firebaseio.com/featureds.json')
.subscribe((resp: Featured[] ) => {

  this.featureds = resp;
  console.log(resp);
});
}

private cargarServicios(){
this.http.get('https://devsign-3a79e.firebaseio.com/servicios.json')
.subscribe((resp: Services[]) => {

  this.services = resp;
  console.log(resp);
});

}

private cargarServicioP() {
  this.http.get('https://devsign-3a79e.firebaseio.com/serviciop.json')
  .subscribe((resp: ServiciosP []) => {

    this.servicios = resp;
    console.log(resp);
  });
}

private cargarInfoServicio(){

  this.http.get('https://devsign-3a79e.firebaseio.com/infoservicio.json')
  .subscribe((resp: InfoServicio) => {

    this.infoServicio = resp;
  });

}


}
