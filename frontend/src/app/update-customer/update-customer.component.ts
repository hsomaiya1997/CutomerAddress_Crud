import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../Customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id: number;
  Customer: Customer;

  constructor(private route: ActivatedRoute,private router: Router,
    private CustomerService: CustomerService) { }

  ngOnInit() {
    this.Customer = new Customer();

    this.id = this.route.snapshot.params['id'];
    
    this.CustomerService.getCustomer(this.id)
      .subscribe(data => {
        console.log(data)
        this.Customer = data;
      }, error => console.log(error));
  }

  updateCustomer() {
    this.CustomerService.updateCustomer(this.id, this.Customer)
      .subscribe(data => {
        console.log(data);
        this.Customer = new Customer();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCustomer();    
  }

  gotoList() {
    this.router.navigate(['/customer']);
  }
}
