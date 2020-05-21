import { Component, VERSION, OnInit } from '@angular/core';
import { CovidService } from '../service/covid.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  covidSummary:any;
  constructor(private covidservice:CovidService)
  {
   
  }

  ngOnInit()
  {
      this.covidservice.GetCovidSummary().subscribe(
        res=>{
          this.covidSummary=res;
        },
        err=>{
          console.log(err);
        }
      );
  }
}
