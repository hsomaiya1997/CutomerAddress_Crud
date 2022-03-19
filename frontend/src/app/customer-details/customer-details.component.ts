import { Customer } from '../Customer';
import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../Customer.service';
import { CustomerListComponent } from '../Customer-list/Customer-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['/customer']);
  }
}
