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
  twitch_partner! : string

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.twitch_user = "_";
    this.twitch_img_url = "https://pngset.com/images/katie-notopoulos-katienotopoulos-i-write-about-tech-round-profile-image-placeholder-text-number-symbol-word-transparent-png-201415.png";
    this.twitch_partner = "_"
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
        this.getUserFollowers(data['data'][0]['id']);

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


  request(URL : string){
    return this.http.get(URL);
  }


}
