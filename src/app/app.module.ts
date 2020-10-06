import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'

import { JockeyCreateComponent } from './jockey-create/jockey-create.component'
import { JockeyDetailsComponent } from './jockey-details/jockey-details.component'
import { JockeyUpdateComponent } from './jockey-update/jockey-update.component'
import { JockeysListComponent } from './jockeys-list/jockeys-list.component'

import { RestApiService } from './shared/rest-api.service'

@NgModule({
  declarations: [
    AppComponent,
    JockeyCreateComponent,
    JockeyDetailsComponent,
    JockeyUpdateComponent,
    JockeysListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }