import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/json.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public title = 'trabajo';
  public description: string;
  public location: string;
  public fullTime: boolean;
  public datos: any;

  constructor(private json: JsonService) {
  }

  public ngOnInit(): void {
  }

  public search(): void {
    const route = `https://github-jobs-proxy.appspot.com/positions?description=${this.description}&location=${this.location}&full_time=${this.fullTime}`;
    this.json.getJobs(route).subscribe((data: any) => {
      this.datos = data;
      console.log(data);
    })
  }
}
