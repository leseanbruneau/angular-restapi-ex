import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-jockey-create',
  templateUrl: './jockey-create.component.html',
  styleUrls: ['./jockey-create.component.css']
})
export class JockeyCreateComponent implements OnInit {

  @Input() jockeyDetails = { name: '', email: '', phone: 0 }

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addJockey() {
    this.restApi.createJockey(this.jockeyDetails).subscribe((data: {}) => {
      this.router.navigate(['/jockeys-list'])
    })
  }

}
