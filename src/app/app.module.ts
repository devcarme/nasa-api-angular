import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { AssetComponent } from './asset/asset.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'asset/:nasa_id', component: AssetComponent },
  { path: '', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AssetComponent
,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
