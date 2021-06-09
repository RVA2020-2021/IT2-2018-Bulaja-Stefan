import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Tim } from '../models/tim';
import { TIM_URL } from "../app.constants";

@Injectable()
export class TimService {


    dataChange: BehaviorSubject<Tim[]> = new BehaviorSubject<Tim[]>([]);

    constructor(private httpClient: HttpClient) {}

    public getAllTimovi(): Observable<Tim[]> {
        this.httpClient.get<Tim[]>(TIM_URL).subscribe(data => {
            this.dataChange.next(data);
        },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message)
            });
            return this.dataChange.asObservable();
    }

    public addTim(tim: Tim): void {
        this.httpClient.post(TIM_URL, tim).subscribe();
    }

    public updateTim(tim: Tim): void {
        this.httpClient.put(TIM_URL, tim).subscribe();
    }

    public deleteTim(id: number): void {
        this.httpClient.delete(TIM_URL + id).subscribe();
    }
}
