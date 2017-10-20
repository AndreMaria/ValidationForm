import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AutocompleteService {
    private http: Http;
    constructor(http: Http) {
      this.http = http;
    }

    GetAll(url: string): Promise<any> {
      return this.http.get(url)
      .toPromise().then((response: Response) => {
        return response.json();
      }).catch((erro) => {
        console.log(erro);
      });
    }
}
