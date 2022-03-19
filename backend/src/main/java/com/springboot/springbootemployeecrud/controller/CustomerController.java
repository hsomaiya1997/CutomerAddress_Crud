package com.springboot.springbootemployeecrud.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;


import com.springboot.springbootemployeecrud.exception.ResourceNotFoundException;
import com.springboot.springbootemployeecrud.model.Customer;
//import com.springboot.springbootemployeecrud.model.CustomerAddress;
import com.springboot.springbootemployeecrud.model.CustomerAddress;
import com.springboot.springbootemployeecrud.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class CustomerController {

	/**
	 * CustomerRepository for perform database related operation
	 */
	@Autowired
	private CustomerRepository customerRepository;

	/**
	 *
	 * @return list of customers
	 */
	@GetMapping("/customers")
	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}

	/**
	 *
	 * @param customerId
	 * @return Customer based on customer Id
	 * @throws ResourceNotFoundException
	 */
	@GetMapping("/customers/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable(value = "id") Integer customerId)
			throws ResourceNotFoundException {
		Customer customer = customerRepository.findById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not found for this id :: " + customerId));
		return ResponseEntity.ok().body(customer);
	}

	/**
	 *
	 * @param customer
	 * @return save customer detail to database through repositary
	 */
	@PostMapping("/customers")
	public Customer createcustomer(@RequestBody Customer customer) {
		Customer customerToSave = new Customer(customer.getName(),customer.getEmail(),customer.getMobile());
		CustomerAddress customerAddress = new CustomerAddress(customer.getCustomerAddress().getAddress(),customer.getCustomerAddress().getState(),
				customer.getCustomerAddress().getCity(),customer.getCustomerAddress().getPincode());
		customerToSave.setCustomerAddress(customerAddress);
		return customerRepository.save(customerToSave);
	}

	/**
	 *
	 * @param customerId
	 * @param customerDetails
	 * @return update customer detail to database through repositary
	 * @throws ResourceNotFoundException
	 */
	@PutMapping("/customers/{id}")
	public ResponseEntity<Customer> updatecustomer(@PathVariable(value = "id") Integer customerId,
												   @RequestBody Customer customerDetails) throws ResourceNotFoundException {
		Customer customer = customerRepository.findById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("customer not found for this id :: " + customerId));

		customer.setName(customerDetails.getName());
		customer.setEmail(customerDetails.getEmail());
		customer.setMobile(customerDetails.getMobile());

		customer.setCustomerAddress(customerDetails.getCustomerAddress());
		final Customer updatedcustomer = customerRepository.save(customer);
		return ResponseEntity.ok(updatedcustomer);
	}

	/**
	 *
	 * @param customerId
	 * @return delete customer details based on customerId
	 * @throws ResourceNotFoundException
	 */
	@DeleteMapping("/customers/{id}")
	public Map<String, Boolean> deletecustomer(@PathVariable(value = "id") Integer customerId)
			throws ResourceNotFoundException {
		Customer customer = customerRepository.findById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("customer not found for this id :: " + customerId));

		customerRepository.delete(customer);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
