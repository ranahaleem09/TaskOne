import { Component, OnInit } from '@angular/core';
import {NgbModal,NgbActiveModal,ModalDismissReasons,NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { MainService } from 'src/app/Services/main.service';
import { from} from 'rxjs';
import { post } from 'selenium-webdriver/http';

import { angularMath } from 'angular-ts-math';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  posts: any;
  todos:any;
  postDetails;
  id=1;
  
  constructor(private ProfileService: MainService) { }
  
    ngOnInit() {

      this.DisplayUser();
      this.Post();
      this.Todo();
      
  
  
    }
    DisplayUser() {
      this.ProfileService.getUser(1).subscribe(users => {
        this.user = users;
        this.getUsersPost();
        console.log(this.user);
        
      })
    }
  
    Todo() {
      this.ProfileService.getTodoOfUser(1).subscribe(todos => {
          this.todos = todos;
          this.DisplayUser();
          
        }
  
      )
  
    }
  
    Post() {
      this.ProfileService.getPostOfUser(1).subscribe(posts => {
          this.posts = posts;
          this.DisplayUser();
        
  
        }
  
      )
  
    }
  
    
    getUsersPost() {
      for (let i = 0; i < this.posts.length; i++) {
          if (this.posts[i].userId == this.user.id) {
            this.posts[i].username = this.user.username;
            this.posts[i].name= this.user.name;
            const randomNumber = angularMath.getIntegerRandomRange(1, 7);
            this.posts[i].img  = "https://mdbootstrap.com/img/Photos/Avatars/img%20(" +randomNumber +").jpg";
          }
        
      }
      console.log(this.posts);
  
    }
  

}
