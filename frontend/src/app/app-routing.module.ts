import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component'
import { HomepageComponent } from './home/homepage/homepage.component'

const routes: Routes = [
  {path:'', component: HomepageComponent },
  {path:'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
