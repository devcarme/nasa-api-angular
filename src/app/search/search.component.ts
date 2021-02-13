import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchObject } from './searchObject.service'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NasaObject } from '../models/nasaObject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchForm: FormGroup;
  assetForm: FormGroup;
  name: string;
  
  public nasaItems: any;
  
  constructor(private searchObject: SearchObject, private fb: FormBuilder, private router: Router) {
    this.name = "";
    this.nasaItems = [];
    this.searchForm = this.fb.group({
       name: ['', Validators.required ]
    });
    this.assetForm = this.fb.group({
       nasa_id: ['', Validators.required ]
    });
  }

   onSubmit(){
    console.log(this.searchForm.value);
    this.name=this.searchForm.value.name;
    this.getNasaObjects();
  }

  onSubmitAsset(){
    console.log(this.assetForm.value)
    this.router.navigate(['/asset', this.assetForm.value.nasa_id ]);
  }
  
  getNasaObjects() {
    this.searchObject.getAppareilsFromServer(this.name).subscribe((response) => {
      this.nasaItems = response;
      console.log("NASA API response", response);
      console.log(this.nasaItems.collection.items[0].links[0].href);
    });
  }
}
