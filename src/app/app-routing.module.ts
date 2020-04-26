import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BookListComponent } from './book-list/book-list.component';



const routes: Routes = [
  {path:'booklist', component:BookListComponent},
  {path:'genre', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[BookListComponent,LandingPageComponent];
