import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {MainComponent} from "./main/main.component";
import {RegistrComponent} from "./registr-authorization/registr/registr.component";
import {AutorizationComponent} from "./registr-authorization/autorization/autorization.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'tasks', component: MainComponent},
  {path: 'registr', component: RegistrComponent},
  {path: 'enter', component: AutorizationComponent},
  {path: '**', redirectTo:'/'},
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
