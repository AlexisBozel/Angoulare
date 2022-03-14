import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-second-module',
  templateUrl: './second-module.component.html',
  styleUrls: ['./second-module.component.css']
})

export class SecondModuleComponent implements OnInit {

  @Input() test!: string
  @Input() img_url!: string
  @Input() followers!: string
  @Input() partner!: string

  constructor() {}

  ngOnInit(): void {
  }

}
