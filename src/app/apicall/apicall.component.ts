import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";



@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent implements OnInit {

  twitch_user!: string;
  twitch_img_url!: string
  twitch_user_total_followers!: string
  twitch_partner!: string
  twitch_description!: string
  twitch_stream_url!: string

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.twitch_user = "_";
    this.twitch_img_url = "https://pngset.com/images/katie-notopoulos-katienotopoulos-i-write-about-tech-round-profile-image-placeholder-text-number-symbol-word-transparent-png-201415.png";
    this.twitch_partner = "_"
    this.twitch_description = "_"
  }

  getUserInfos(form: NgForm){
    let value = form.value;
    let user = [];
    user = [value];
    const url = 'https://api.twitch.tv/helix/users?login=' +  user[0]['userName'];
    this.http.get(url, {headers: {'Authorization': 'Bearer a1frldr60o3vpthwcdkxu05qjd774u', 'Client-Id': 'utuzd5dzurw3lsvv7xbr6x84mec2qp'}})
      .subscribe((data : any) => {
        this.twitch_user = data['data'][0]['login'];
        this.twitch_img_url = data['data'][0]['profile_image_url'];
        this.twitch_partner = data['data'][0]['broadcaster_type'];
        this.twitch_description = data['data'][0]['description']
        this.twitch_stream_url = "https://player.twitch.tv/?channel="+this.twitch_user+"&parent=localhost&autoplay=false"
        this.getUserFollowers(data['data'][0]['id']);
        console.log(this.twitch_stream_url)
        console.log(this.twitch_img_url)
        console.log(data['data'][0])
      })


  }

  getUserFollowers(user_id : string){
    const url = "https://api.twitch.tv/helix/users/follows?to_id=" + user_id
    this.http.get(url, {headers: {'Authorization': 'Bearer a1frldr60o3vpthwcdkxu05qjd774u', 'Client-Id': 'utuzd5dzurw3lsvv7xbr6x84mec2qp'}})
      .subscribe((data : any) => {
        this.twitch_user_total_followers = data['total'];
    })
  }

}
