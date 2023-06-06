import { Component } from '@angular/core';
import {CarService} from "../../../../services";
import {ICar} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent {
  cars: ICar[];
  length: number;
  pageIndex: number;
  pageSize = 10;
  showFirstLastButtons = true;
  constructor(private carService: CarService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.pageIndex = page-1
      this.carService.getAll(page).subscribe(value => {
        this.length = value.total_items
        this.cars = value.items
      })
    })
  }

  handlePageEvent(e: PageEvent) {
    this.router.navigate([], {queryParams: {page: e.pageIndex + 1}})
  }
}
