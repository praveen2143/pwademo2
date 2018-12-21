import { Component } from '@angular/core';
import { NsedataService } from './nsedata.service';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'nsetracker';
  restItems = [];
  filteredStocks;
  Math: any;
  displayedColumns = ['symbol','open','high','low','ltP','ptsC'];
  constructor(private nsedataService: NsedataService) {
    this.Math = Math;
  }

  private newMethod() {
    return 'app-root';
  }

  ngOnInit() {
    //  this.nsedataService.getData().subscribe(data => this.restItems = data.data);
    // console.log(this.restItems);

    interval(3000)
      .subscribe(
        data => this.filterscrips(),
        error => console.error(error))


  }

  filterscrips() {
    let myStocks = ["symbol","open","high","low",'ltP','ptsC'];

    this.nsedataService.getData().subscribe(data => this.restItems = data["data"]);
    console.log(this.restItems);

  }
}
