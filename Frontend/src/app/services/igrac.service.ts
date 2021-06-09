import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Igrac } from '../models/igrac';
import { IGRAC_TIM_URL } from '../app.constants';

@Injectable()
export class IgracService {



    dataChange: BehaviorSubject<Igrac[]> = new
         BehaviorSubject<Igrac[]>([]);

    constructor(private httpClient: HttpClient) {}

    public getIgracTimId(idTim): Observable<Igrac[]> {
        this.httpClient.get<Igrac[]>(IGRAC_TIM_URL + idTim)
            .subscribe(data => {
                this.dataChange.next(data);
            },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            });
            return this.dataChange.asObservable();
    }

    public addIgrac(igrac: Igrac): void {
        this.httpClient.post(IGRAC_TIM_URL, igrac).subscribe();
    }

    public updateIgrac(igrac: Igrac): void {
        this.httpClient.put(IGRAC_TIM_URL, igrac).subscribe();
    }

    public deleteIgrac(id: number): void {
        this.httpClient.delete(IGRAC_TIM_URL + id).subscribe();
    }
}
