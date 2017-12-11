import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User } from "../../model/user"
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styles: []
})
export class ListuserComponent implements OnInit {
  private users : User[];

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users)=>{console.log(users);
    },(error)=>{
      console.log(error);
    })
  }

}
