import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jockey-details',
  templateUrl: './jockey-details.component.html',
  styleUrls: ['./jockey-details.component.css']
})
export class JockeyDetailsComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  jockeyData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.restApi.getJockey(this.id).subscribe((data: {}) => {
      this.jockeyData = data;
    })
  }

}
