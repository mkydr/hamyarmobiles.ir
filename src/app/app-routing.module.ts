import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ServicesComponent } from './services/services.component'
import { AboutComponent } from './about/about.component'
import { BlogComponent } from './blog/blog.component'
import { ContactComponent } from './contact/contact.component'
import { ShopComponent } from './shop/shop.component'

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"home", component: HomeComponent},
  // {path:"portfolio", component: PortfolioComponent, children: [
  //     {path: "first", component: PortfolioDetailComponent}
  //   ]},
  // {path: "faq", component: FaqComponent},
  {path: "services", component: ServicesComponent},
  {path: "about", component: AboutComponent},
  {path: "blog", component: BlogComponent},
  {path: "contact", component: ContactComponent},
  {path: "shop", component: ShopComponent},
  // {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
