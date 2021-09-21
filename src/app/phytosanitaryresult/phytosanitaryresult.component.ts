import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phytosanitary } from '../phytosanitary';
import { PhytosanitaryService } from '../phytosanitary.service';


@Component({
  selector: 'app-phytosanitaryresult',
  templateUrl: './phytosanitaryresult.component.html',
  styleUrls: ['./phytosanitaryresult.component.css']
})
export class PhytosanitaryresultComponent implements OnInit {

  public phytosanitaries!: Phytosanitary[];

  constructor(private route: ActivatedRoute, private phytosanitaryService: PhytosanitaryService) { }

  insee_code_checker!: any;
  insee_code!: string;

  ngOnInit(): void {
    this.insee_code_checker = this.route.params.subscribe(params =>{
      this.insee_code = params["insee_code"];

    })
    console.log("insee "+this.insee_code);
    this.getPhytosanitary(this.insee_code);
  }




public getPhytosanitary(insee: string):void {    // Function to request the back-end application to show the result of the weather condition checker
  this.phytosanitaryService.getPhytosanitary(insee).subscribe((
    response: Phytosanitary[]) => { console.log(response);
    this.phytosanitaries = response;
  }
  )
}

public displayDate(day: number) {       // Function to transform the number of the day in a date (day 0 => date of today, day 1 => day of tomorow...)
  const dateValue = new Date(Date.now() + day * 24*60*60*1000);
  return dateValue.toLocaleDateString('fr-FR');
}

public displayGlobalResult(windCondition:boolean, temperatureCondition:boolean, dryCondition:boolean, dampAfterCondition:boolean, day: number){
  var global = 0;
   (windCondition? global+=25 : global=global);
   (temperatureCondition? global+=25 : global=global);
   (dryCondition? global+=25 : global=global);
   if (day < 12){
   (dampAfterCondition? global+=25 : global=global);
   }
   return global;
}

public displayDampAfter(dampAfterCondition: boolean, day: number) {
  var damp = "";
  if (day <12) {
    if (dampAfterCondition == true) {
      damp = "Oui";
    } else {
      damp ="Non";
    }
  } else {
    damp = "Données météo non disponible"
  }
  return damp;
}

}
