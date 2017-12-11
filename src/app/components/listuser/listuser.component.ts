import { Component, OnInit } from '@angular/core';
import { User } from "../../model/user"
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styles: []
})
export class ListuserComponent implements OnInit {
  private users : User[];

  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users)=>{
      console.log(users);
      this.users=users;
    },(error)=>{
      console.log(error);
    })
  }

  deleteUser(user){
    this._userService.deleteUser(user.id).subscribe((data)=>{
      this.users.splice(this.users.indexOf(user),1);
    },(error)=>{
      console.log(error);
    })
  }

  updateUser(user){
    this._userService.setter(user);
    this._router.navigate(['/op']);
  }

  newUser(){
    let user = new User();
    this._userService.setter(user);
    this._router.navigate(['/op']);

  }
}
