import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FertilizerformComponent } from './fertilizerform/fertilizerform.component';
import { FertilizerresultComponent } from './fertilizerresult/fertilizerresult.component';
import { PhytosanitaryformComponent } from './phytosanitaryform/phytosanitaryform.component';
import { PhytosanitaryresultComponent } from './phytosanitaryresult/phytosanitaryresult.component';


const routes: Routes = [
  { path: "", component: DashboardComponent},
  { path: "phytosanitaryForm", component:PhytosanitaryformComponent},
  { path: "phytosanitary/:insee_code", component:PhytosanitaryresultComponent},
  { path: "fertilizerForm", component:FertilizerformComponent},
  { path: "fertilizer/:insee_code", component:FertilizerresultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
