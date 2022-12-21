import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { DeleteRestuarantComponent } from './delete-restuarant/delete-restuarant.component';
import { RestuarantlistComponent } from './restuarantlist/restuarantlist.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';

const routes: Routes = [
  //path for  RestuarantlistComponent
  {
    path:'',component: RestuarantlistComponent
  },
  //path for ViewRestuarantComponent
  {
    path:'view-resturant/:id',component:ViewRestuarantComponent
  },
  //path for AddResturantComponent
  {
    path:'Add-resturant',component:AddResturantComponent
  },
  {
    path:'updaterestuarant/:id',component:UpdateRestuarantComponent
  },
  //path for delete-restuarant component
  {
    path:'delete-restuarant/:id',component:DeleteRestuarantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
