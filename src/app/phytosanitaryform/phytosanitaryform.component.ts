import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhytosanitaryresultComponent } from '../phytosanitaryresult/phytosanitaryresult.component';
import { RouterModule, Router } from '@angular/router';
import { ApiInseeService} from '../api-insee.service';
import { City } from '../city';



@Component({
  selector: 'app-phytosanitaryform',
  templateUrl: './phytosanitaryform.component.html',
  styleUrls: ['./phytosanitaryform.component.css']
})
export class PhytosanitaryformComponent implements OnInit {

  zipCodeForm!: FormGroup;
  inseeCodeForm!: FormGroup;
  submitted = false;


  public cities!: City[];

  constructor(private apiInseeService: ApiInseeService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.zipCodeForm = this.formBuilder.group({
      zip_code: "",
    })
    this.inseeCodeForm = this.formBuilder.group({
      insee_code: "",
    })

  }

  submitZipCode() {     //  Function to validate the zip code and display cities list
    this.submitted = true;
    console.log(this.zipCodeForm.value.zip_code);
    this.getInsee(this.zipCodeForm.value.zip_code);
  }


  public getInsee(zip_code: string):void {    // Function to request the gouvernement API to get the cities equals to the zip code
    this.apiInseeService.getInsee(zip_code).subscribe((
      response: City[]) => { console.log(response);
      this.cities = response;
    }
    )
  }

  submitInseeCode() {   // Function to validate the city in the cities list
    this.submitted = true;
    console.log(this.inseeCodeForm.value.insee_code);
    this.router.navigate(['/phytosanitary', this.inseeCodeForm.value.insee_code]);
  }




}
