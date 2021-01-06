import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside-filters',
  templateUrl: './aside-filters.component.html',
  styleUrls: ['./aside-filters.component.css']
})
export class AsideFiltersComponent implements OnInit {

  public toggled: boolean = false;
  @Input() pricesFilter: Array<any>;
  @Input() categoriesFilter;
  @Output() sendFilter = new EventEmitter();
  @Output() setSearchString = new EventEmitter();
  public pricesFilterModel;
  public categoriesFilterModel;
  public point: number = null;

  constructor() {

    this.pricesFilterModel = [
      {
        min: 0,
        max: 50,
        text: '0€ - 100€ '

      },
      {
        min: 50,
        max: 100,
        text: '50€ - 100€ '

      },
      {
        min: 100,
        max: 150,
        text: '100€ - 200€ '

      },
      {
        min: 200,
        max: 1000000,
        text: 'Más de 200 €'
      },
    ]
    this.categoriesFilterModel = [
      {
        value: '5EST',
        text: '5 Estrellas'
      },
      {
        value: '4EST',
        text: '4 Estrellas'

      },
      {
        value: '3EST',
        text: '3 Estrellas'

      },
      {
        value: '2EST',
        text: '2 Estrellas'

      },
      {
        value: '1EST',
        text: '1 Estrellas'

      },
      {
        value: 'LL',
        text: 'Apartamentos'

      },
      {
        value: 'ALBER',
        text: 'Albergues'

      },
      {
        value: 'APTH',
        text: 'Apartahoteles'

      },
      {
        value: 'BB',
        text: 'Bed and breakfast'

      },
      {
        value: 'BOU',
        text: 'Boutique'

      },
      {
        value: 'otros',
        text: 'Otros'

      },
    ]

  }

  ngOnInit(): void {

  }

  toggleAside() {
    this.toggled = !this.toggled

  }

  setPoint(point: number) {
    this.point = point
  }

  searchByName(value: string) {
      
      this.setSearchString.emit(value)


  }

  setPriceFilter(valInput) {


    const array = this.rellenarFiltersArrayValues(valInput, this.pricesFilter)

    this.pricesFilter = array
    this.executeFilter()

  }

  executeFilter() { this.sendFilter.emit(true) }

  setCategoryValue(valInput: number) {
    const array = this.rellenarFiltersArrayValues(valInput, this.categoriesFilter)

    this.categoriesFilter = array

    this.executeFilter()

  }


  rellenarFiltersArrayValues(valInput, arrayToCheck) {
    const indexVal = arrayToCheck.indexOf(valInput)
    let localArray = arrayToCheck
    if (indexVal == -1) {
      localArray.push(valInput)
    } else {
      localArray.splice(indexVal, 1)
    }

    return localArray
  }

}
