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

  constructor() { }

  ngOnInit() {
  }

}
