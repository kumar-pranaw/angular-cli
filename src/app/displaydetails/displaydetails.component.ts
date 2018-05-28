import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent implements OnInit {
  showSecret= false;
  log=[];
  constructor() { }

  ngOnInit() {
  }
  onToggleLog(){
    this.showSecret=!this.showSecret;
   this.log.push(this.log.length +1 );
  }

}
