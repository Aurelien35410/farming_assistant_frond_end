import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhytosanitaryresultComponent } from './phytosanitaryresult/phytosanitaryresult.component';
import { PhytosanitaryformComponent } from './phytosanitaryform/phytosanitaryform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CerealesComponent } from './cereales/cereales.component';
import { FertilizerformComponent } from './fertilizerform/fertilizerform.component';
import { FertilizerresultComponent } from './fertilizerresult/fertilizerresult.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PhytosanitaryresultComponent,
    PhytosanitaryformComponent,
    DashboardComponent,
    CerealesComponent,
    FertilizerformComponent,
    FertilizerresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
