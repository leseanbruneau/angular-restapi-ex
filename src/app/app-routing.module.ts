import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JockeyCreateComponent } from './jockey-create/jockey-create.component';
import { JockeyDetailsComponent } from './jockey-details/jockey-details.component';
import { JockeyUpdateComponent } from './jockey-update/jockey-update.component';
import { JockeysListComponent } from './jockeys-list/jockeys-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-jockey'},
  { path: 'create-jockey', component: JockeyCreateComponent},
  { path: 'jockey-details/:id', component: JockeyDetailsComponent},
  { path: 'jockey-update/:id', component: JockeyUpdateComponent},
  { path: 'jockeys-list', component: JockeysListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
