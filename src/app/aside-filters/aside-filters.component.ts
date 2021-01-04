import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-filters',
  templateUrl: './aside-filters.component.html',
  styleUrls: ['./aside-filters.component.css']
})
export class AsideFiltersComponent implements OnInit {

  public toggled:boolean = false; 
  public point:number  = null; 

  constructor() { }

  ngOnInit(): void {
  }

  toggleAside(){
    this.toggled = !this.toggled
    
  }

  setPoint(point:number){
    this.point = point
  }

}
