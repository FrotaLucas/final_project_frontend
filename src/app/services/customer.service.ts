import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "../interfaces/customer";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { map } from "rxjs";

//make sure the CustomerService is available globally in the project
@Injectable({
    providedIn: 'root'
})

export class CustomerService {


    private myApp: string;
    private myApi: string;

    constructor(private http: HttpClient) {
        this.myApp = environment.endpoint;
        this.myApi = "api/customers";
    }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<any>(`${this.myApp}${this.myApi}`).pipe(
            map(response => response.properties.customers.items.properties)
        );
    }
    deleteCustomer(uuid: string): Observable<Customer> {
        return this.http.delete<any>(`${this.myApp}${this.myApi}/${uuid}`).pipe(
            map(response => response.properties.customer.properties)
        );
    }

    //esta estranho retornar string. Backend retorna json !! REVISAR!!
    updateCustomer(customer: Customer): Observable<string> {
        return this.http.put<string>(`${this.myApp}${this.myApi}`, customer);
    }

    addCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<any>(`${this.myApp}${this.myApi}`, customer).pipe(
            map( response => response.properties.customer.properties)
        )
    }

}