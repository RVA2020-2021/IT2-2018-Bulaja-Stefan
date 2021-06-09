import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Liga } from '../models/liga';
import { LIGA_URL } from '../app.constants';

@Injectable()
export class LigaService {



    dataChange: BehaviorSubject<Liga[]> = new BehaviorSubject<Liga[]>([]);
    constructor(private httpClient: HttpClient) { }

    public getAllLige(): Observable<Liga[]> {
        this.httpClient.get<Liga[]>(LIGA_URL).subscribe(data => {
            this.dataChange.next(data);
        },
            (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
            });
        return this.dataChange.asObservable();
    }

    public addLiga(liga: Liga): void {
        this.httpClient.post(LIGA_URL, liga).subscribe();
    }

    public updateLiga(liga: Liga): void {
        this.httpClient.put(LIGA_URL, liga).subscribe();
    }

    public deleteLiga(id: number): void {
        console.log(LIGA_URL + id);
        this.httpClient.delete(LIGA_URL + id).subscribe();
    }
}
