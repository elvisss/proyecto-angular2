import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {RestauranteService} from '../services/restaurante.service';
import {Restaurante} from "../model/restaurante";
 
@Component({
    selector: 'restaurante-detail',
    templateUrl: 'app/view/restaurante-detail.html',
    providers: [
      RestauranteService
    ]
})

export class RestauranteDetailComponent implements OnInit {

  public restaurante:Restaurante;
  public errorMessage:string;

  constructor(
    private _routeParams:RouteParams,
    private _restauranteService:RestauranteService,
    private _router:Router
  ) {}

  ngOnInit() {
    this.getRestaurante();
  }

  getRestaurante() {
    let id = this._routeParams.get("id");
    let random = this._routeParams.get("random");

    this._restauranteService.getRestaurante(id, random)
      .subscribe(
        response => {
          this.restaurante = response;
        }, error => {
          this.errorMessage = <any>error;
          if (this.errorMessage != null) {
            this._router.navigate(['Home'])
          }
        }
      );
  }

}