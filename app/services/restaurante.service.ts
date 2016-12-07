import {Injectable} from "angular2/core";
import {Http, Response, Headers} from "angular2/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../model/restaurante";

@Injectable()
export class RestauranteService {
  constructor(private _http:Http) {}

  getRestaurantes() {
    return this._http.get('http://584705b86f4e4e120026be3d.mockapi.io/api/v1/restaurantes?sortBy=createdAt&order=desc')
      .map(res => res.json());
  }

  getRestaurante(id: string, random = null) {
    if (random == null) {
      return this._http.get('http://584705b86f4e4e120026be3d.mockapi.io/api/v1/restaurantes/' + id)
        .map(res => res.json());
    } else {
      return this._http.get('http://584705b86f4e4e120026be3d.mockapi.io/api/v1/restaurantes/18')
        .map(res => res.json());
    }
  }

  addRestaurante(restaurante: Restaurante) {
    // let json = JSON.stringify(restaurante);
    // let params = "json="+json;
    // let headers = new Headers({"Content-Type": "application/x-www-from-urlencode"});
     // let params = restaurante;
     let headers = new Headers({"Content-Type": "application/json"})

    return this._http.post('http://584705b86f4e4e120026be3d.mockapi.io/api/v1/restaurantes', JSON.stringify(restaurante), {headers: headers})
      .map(res => {
        if (res.status == 201) {
          return res.json()
        } else {
          console.log(res)
        }
      });
  }

  editRestaurante(id: string, restaurante: Restaurante) {
    // let json = JSON.stringify(restaurante);
    // let params = "json="+json;
    // let headers = new Headers({"Content-Type": "application/x-www-from-urlencode"});
     // let params = restaurante;
     let headers = new Headers({"Content-Type": "application/json"})

    return this._http.put('http://584705b86f4e4e120026be3d.mockapi.io/api/v1/restaurantes/' + id, JSON.stringify(restaurante), {headers: headers})
      .map(res => {
        if (res.status == 200) {
          return res.json()
        } else {
          console.log(res)
        }
      });
  }

  deleteRestaurante(id: string) {
    return this._http.delete('http://584705b86f4e4e120026be3d.mockapi.io/api/v1/restaurantes/' + id)
      .map(res => res.json());
  }

}