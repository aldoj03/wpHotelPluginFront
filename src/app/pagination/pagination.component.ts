import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() total
  @Output() getNewPage = new EventEmitter()
  public paginationNumber
  public paginationArray = []

  constructor(
    public hotelService: HotelService,

  ) { }

  ngOnInit(): void {

    this.paginationNumber = this.total / 20
    for (let page = 0; page < this.paginationNumber; page++) {
      this.paginationArray[page] = page + 1
      
    }

  }

  setPage(val){
    this.hotelService.setPagination = val
    this.getNewPage.emit(true)
  }

  
}
