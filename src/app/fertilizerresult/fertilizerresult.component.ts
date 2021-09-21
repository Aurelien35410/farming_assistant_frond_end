import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fertilizer } from '../fertilizer';
import { FertilizerService } from '../fertilizer.service';
import { Phytosanitary } from '../phytosanitary';
import { PhytosanitaryService } from '../phytosanitary.service';

@Component({
  selector: 'app-fertilizerresult',
  templateUrl: './fertilizerresult.component.html',
  styleUrls: ['./fertilizerresult.component.css']
})
export class FertilizerresultComponent implements OnInit {

  public fertilizers!: Fertilizer[];

  constructor(private route: ActivatedRoute, private fertilizerService: FertilizerService) { }

  insee_code_checker!: any;
  insee_code!: string;

  ngOnInit(): void {
    this.insee_code_checker = this.route.params.subscribe(params =>{
      this.insee_code = params["insee_code"];

    })
    console.log("insee "+this.insee_code);
    this.getFertilizer(this.insee_code);
  }

  public getFertilizer(insee: string):void {    // Function to request the back-end application to show the result of the weather condition checker
    this.fertilizerService.getFertilizer(insee).subscribe((
      response: Fertilizer[]) => { console.log(response);
      this.fertilizers = response;
    }
    )
  }

  public displayDate(day: number) {       // Function to transform the number of the day in a date (day 0 => date of today, day 1 => day of tomorow...)
    const dateValue = new Date(Date.now() + day * 24*60*60*1000);
    return dateValue.toLocaleDateString('fr-FR');
  }

  public displayGlobalResult(windCondition:boolean, dryCondition:boolean, dampAfterCondition:boolean, day:number){
    var global = 0;
     (windCondition? global+=33 : global=global);
     (dryCondition? global+=33 : global=global);
     if (day < 12) {
     (dampAfterCondition? global+=33 : global=global);
     }
     (global == 99? global=100: global=global);
     return global;
  }

  public displayDampAfter(dampAfterCondition: boolean, day: number) {
    var damp = "";
    if (day < 12) {
      if (dampAfterCondition == true) {
        damp = "Oui";
      } else {
        damp ="Non";
      }
    } else {
      damp = "Données non disponible"
    }
    return damp;
  }


}
