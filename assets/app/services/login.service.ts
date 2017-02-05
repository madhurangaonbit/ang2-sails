/**
 * Created by madhuranga on 2/4/17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
    constructor(private http: Http){
        console.log("Service Initialized..")
    }

    getPostData(){
        return this.http.get('http://localhost:1337/auth/testHttpRequest')
            .map(res=> res.json());
    }
    sendPostData(data : any){

        return this.http.post('http://localhost:1337/auth/testHttpRequest',data)
            .map(res=> res.json());
    }
}
