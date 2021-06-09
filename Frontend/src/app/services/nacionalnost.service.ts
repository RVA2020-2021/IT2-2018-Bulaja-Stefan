import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Nacionalnost } from '../models/nacionalnost';
import { NACIONALNOST_URL } from '../app.constants';

@Injectable()
export class NacionalnostService {



    dataChange: BehaviorSubject<Nacionalnost[]> = new BehaviorSubject<Nacionalnost[]>([]);

    constructor(private httpClient: HttpClient) {}

    public getAllNacionalnosti(): Observable<Nacionalnost[]> {
        this.httpClient.get<Nacionalnost[]>(NACIONALNOST_URL).subscribe(data => {
            this.dataChange.next(data);
        },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            });

        return this.dataChange.asObservable();
    }

    public addNacionalnost(nacionalnost: Nacionalnost): void {
        this.httpClient.post(NACIONALNOST_URL, nacionalnost).subscribe();
    }

    public updateNacionalnost(nacionalnost: Nacionalnost): void {
        this.httpClient.put(NACIONALNOST_URL, nacionalnost).subscribe();
    }

    public deleteNacionalnost(id: number): void {
        console.log(NACIONALNOST_URL + id);
        this.httpClient.delete(NACIONALNOST_URL + id).subscribe();
    }
}
