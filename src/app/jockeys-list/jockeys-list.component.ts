import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-jockeys-list',
  templateUrl: './jockeys-list.component.html',
  styleUrls: ['./jockeys-list.component.css']
})
export class JockeysListComponent implements OnInit {

  Jockey: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadJockeys()
  }

  // Get jockeys list
  loadJockeys() {
    return this.restApi.getJockeys().subscribe((data: {}) => {
      this.Jockey = data;
    })
  }

  // Delete jockey
  deleteJockey(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteJockey(id).subscribe(data => {
        this.loadJockeys()
      })
    }
  }  

}
