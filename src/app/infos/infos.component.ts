import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  param!: string;
  streamer!: string;
  url!: string

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.param = params['nom'];
        console.log(this.param)
        this.streamer = this.param
      })
    this.streamer = this.route.snapshot.params['nom']
    this.url = "https://player.twitch.tv/?channel="+ this.streamer+ "&parent=localhost&autoplay=false"
    console.log(this.url)
  }

}
