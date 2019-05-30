import { Component, OnInit } from '@angular/core';
import {NgbModal,NgbActiveModal,ModalDismissReasons,NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { MainService } from 'src/app/Services/main.service';
import { from} from 'rxjs';
import { post } from 'selenium-webdriver/http';
import { angularMath } from 'angular-ts-math';
import * as $AB from 'jquery';
declare var $: any;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postInformation;
  users:any;
   posts:any;

  constructor(private postService: MainService, public modal: NgbModal) { }

  ngOnInit() {
    this.showPosts();
    $('#myModal').modal('show');
  }

  showPosts() {
    this.postService.getPosts().subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
        this.showUsers();
       

      }

    )

  }

  showUsers() {
    this.postService.getUsers().subscribe(users => {
      this.users = users;
      this.getUserOfThePost();
    })
  }



  getUserOfThePost() {
    for (let i = 0; i < this.posts.length; i++) {
      for (let j = 0; j < this.users.length; j++) {
        if (this.posts[i].userId == this.users[j].id) {
          this.posts[i].username = this.users[j].username;
          this.posts[i].name= this.users[j].name;
          const randomNumber = angularMath.getIntegerRandomRange(1, 7);
       
          this.posts[i].img  = "https://mdbootstrap.com/img/Photos/Avatars/img%20(" +randomNumber +").jpg";
        }
      }
    }
    console.log(this.posts);

  }


  OpenUserModal(id){
    console.log(id);
    
        this.posts.filter(post => {
          if(post.id==id){
            this.postInformation = post;
        
          
            $("#exampleModal").modal('show');
    
          }
        });
    }
}
