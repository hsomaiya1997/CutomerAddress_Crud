import { CustomerDetailsComponent } from './../Customer-details/Customer-details.component';
import { Observable } from "rxjs";
import { CustomerService } from "./../Customer.service";
import { Customer } from "./../Customer";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"]
})
export class CustomerListComponent implements OnInit {
  Customers: Observable<Customer[]>;

  constructor(private CustomerService: CustomerService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.Customers = this.CustomerService.getCustomersList();
  }

  deleteCustomer(id: number) {
    this.CustomerService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  CustomerDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateCustomer(id: number){
    this.router.navigate(['update', id]);
  }
}
