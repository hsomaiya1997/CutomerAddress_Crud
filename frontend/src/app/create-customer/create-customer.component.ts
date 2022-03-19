import { CustomerService } from '../Customer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerAddress } from '../customer copy';

@Component({
  selector: 'app-create-Customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  Customer: Customer = new Customer();
  CustomerAddress: CustomerAddress = new CustomerAddress();
  submitted = false;

  address: string;
  city: string;
  state: string;
  pincode: number;

  constructor(private CustomerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.Customer = new Customer();
    this.CustomerAddress = new CustomerAddress();
  }

  save() {
    this.CustomerService
      .createCustomer(this.Customer).subscribe(data => {
        console.log(data)
        this.Customer = new Customer();
        this.CustomerAddress =  new CustomerAddress();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.CustomerAddress.address = this.address;
    this.CustomerAddress.city = this.city;
    this.CustomerAddress.state = this.state;
    this.CustomerAddress.pincode = this.pincode;
    this.Customer.customerAddress = this.CustomerAddress;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/customer']);
  }
}
