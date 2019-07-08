import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-jockey-update',
  templateUrl: './jockey-update.component.html',
  styleUrls: ['./jockey-update.component.css']
})
export class JockeyUpdateComponent implements OnInit {
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

  // Update jockey data
  updateJockey() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateJockey(this.id, this.jockeyData).subscribe(data => {
        this.router.navigate(['/jockeys-list'])
      })
    }
  }

}
