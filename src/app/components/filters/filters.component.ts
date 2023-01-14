import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  public searchTerm: string = '';

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    //console.log(this.searchTerm);
    this.productService.search.next(this.searchTerm);

  }

}
