import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartService } from './cart.service';
import { ProductDetailsComponent } from './shopping-cart/product-details/product-details.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { ShippingComponent } from './shopping-cart/shipping/shipping.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { MyModalComponent } from './my-modal/my-modal.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MultiselectdropdonwComponent } from './multiselectdropdonw/multiselectdropdonw.component';

const appRootes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'home', component: HomeComponent},
  { path: 'products/:productId', component: ProductDetailsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    HeaderComponent,
    NotfoundComponent,
    LoginComponent,
    HomeComponent,
    MyModalComponent,
    MultiselectdropdonwComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRootes),
    ModalDialogModule.forRoot(),
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [CartService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
