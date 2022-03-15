import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@Angular/router'
import {NgForm} from "@angular/forms";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-second-module',
  templateUrl: './second-module.component.html',
  styleUrls: ['./second-module.component.css']
})

export class SecondModuleComponent implements OnInit {


  @Input() name!: string
  @Input() img_url!: string
  @Input() followers!: string
  @Input() partner!: string
  @Input() description!: string
  @Input() stream_url!: string


  constructor() {
  }

  ngOnInit(): void {
  }


}
