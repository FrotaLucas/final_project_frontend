import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowCustomerComponent } from './show-customer/show-customer.component';

        // ADCIONAR COMMOM TBM NOS IMPORTS
@Component({
  selector: 'app-customer',
  //standalone: true,
  imports: [ShowCustomerComponent],  //it works without CommonModule and RouterModule
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
