import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
   nasa_id: string;
   video_url: string;
   img_url: string;
   url: string;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { 
    this.nasa_id = "";
    this.video_url = "";
    this.img_url= "";
    this.url = "";
  }
  
  ngOnInit() {
    this.nasa_id = this.route.snapshot.params['nasa_id'];
    this.video_url = `https://images-assets.nasa.gov/video/${this.nasa_id}/${this.nasa_id}~orig.mp4`;
    this.img_url = `https://images-assets.nasa.gov/image/${this.nasa_id}/${this.nasa_id}~orig.jpg`;
    this.httpClient
      .get<any>(this.video_url)
      .subscribe(
        () => {
        },
        (error) => {              
          if(error.status === 200){
            console.log('La vidéo existe');
          }else{
            this.video_url = "";
            this.httpClient
              .get<any>(this.img_url)
              .subscribe(
                () => {

                },
                (error) => {
                  if(error.status === 200){
                    console.log("L'image existe");
                  }else{
                    this.img_url = "";
                  }
                }
              )
          }           
        }
      );
  }

}
