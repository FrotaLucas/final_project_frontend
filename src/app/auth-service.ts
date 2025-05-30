import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs";

@Injectable({
        providedIn: 'root'
})

export class AuthService{

    private isAuthtenticated = new BehaviorSubject<boolean>(false);

    login(user: string, password: string) : boolean{
        if(user == 'admin@hotmail.com' && password == 'admin'){
            this.isAuthtenticated.next(true);
            return true;
        }

        return false;
    }

    logout(): boolean{
        this.isAuthtenticated.next(false);
        return false;
    }

    isLoggedin(): boolean {
        return this.isAuthtenticated.value;
    }
}