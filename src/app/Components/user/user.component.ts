import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Services/main.service';
import { from } from 'rxjs';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import * as $AB from 'jquery';
import { angularMath } from 'angular-ts-math';
declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : any;
  userInformation;
  image;
  constructor( public modalService: NgbModal,private  mainService:MainService) { }

  ngOnInit() {
    $('#myModal').modal('show');
    this.displayUsers();
    this.Usersimage();
  
  }

displayUsers(){
  this.mainService.getUsers().subscribe(users=>
    {
this.users= users;
console.log(this.users);

    })
}

Usersimage(){
  for (let j = 0; j < this.users.length; j++) {
    const randomNumber = angularMath.getIntegerRandomRange(1, 33);
    console.log(randomNumber);
    
    this.users.image[j]= "https://mdbootstrap.com/img/Photos/Avatars/img%20(" +randomNumber +").jpg";
  }

}


UserModal(id){
  
  this.users.filter(user => {
    if(user.id==id){
      this.userInformation = user;
      $("#exampleModal").modal('show');
    
    }
  });
  

}
}
