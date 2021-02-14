import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchObject } from './searchObject.service'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NasaObject } from './nasaObject';
import { NasaItem } from './nasaItem';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchForm: FormGroup;
  name: string;
  nasa_id: string;
  
  public nasaItems: any;
  public nasaItemsClean: NasaItem[];
  
  constructor(private searchObject: SearchObject, private fb: FormBuilder, private router: Router) {
    this.name = "";
    this.nasa_id = "";
    this.nasaItems = [];
    this.nasaItemsClean = [];
    this.searchForm = this.fb.group({
       name: ['', Validators.required ]
    });
  }

   onSubmit(){
      this.name=this.searchForm.value.name;
      this.searchObject.getAppareilsFromServer(this.name).subscribe((response) => {
        this.nasaItems = response;
        for (let i = 0; i < this.nasaItems.collection.items.length; i++){
          this.nasaItemsClean[i] = new NasaItem();
          this.nasaItemsClean[i].nasa_id=this.nasaItems.collection.items[i].data[0].nasa_id;
          this.nasaItemsClean[i].href=this.nasaItems.collection.items[i].links[0].href;
          this.nasaItemsClean[i].title=this.nasaItems.collection.items[i].data[0].title;
        }
        console.log("NASA API response", response);
        console.log("Clean items", this.nasaItemsClean);
        //console.log(this.nasaItems.collection.items[0].links[0].href);
      });
    }
}
