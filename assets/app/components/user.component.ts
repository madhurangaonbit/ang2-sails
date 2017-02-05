/**
 * Created by madhuranga on 1/26/17.
 */
import {Component} from '@angular/core';
import { User }    from './user.model';
import {LoginService} from '../services/login.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers:[LoginService]
})
export class UserComponent {

  model = new User(1, '', '');
  frameWork = "Sails";

  constructor(private loginService: LoginService){

    this.loginService.getPostData().subscribe(posts=> console.log(posts));
  }

  addNew(){
    console.log(this.model);
  }


}
