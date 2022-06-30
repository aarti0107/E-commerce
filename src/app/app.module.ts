import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
//import { SlidingimageComponent } from './components/slidingimage/slidingimage.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CartapiService } from './services/cartapi.service';
import { ViewcategoryComponent } from './components/viewcategory/viewcategory.component';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    CartComponent,
    ViewcategoryComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    ApiService,
    CartapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
