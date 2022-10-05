import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { DialogComponentComponent } from './components/dialog-component/dialog-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsignupComponent } from './components/formsignup/formsignup.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    DialogComponentComponent,
    FooterComponent,
    FormsignupComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    RouterModule,
    MatCardModule
  ],
  exports: [
    HomepageComponent,
    NavbarComponent,
    AboutComponent
  ]
})
export class HomeModule { }
