import { Llama } from './Llama.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnotherService {

    constructor(private http: HttpClient) { }

    getLlamasFromServer(): Observable<Llama[]> {
        return this.http.get<Llama[]>('http://localhost:3000/newestLlamas');
    }
    // getLlamasFromServer(): Observable<Llama[]> {
    //     return Observable.create([
    //         { name: 'Richard', image: '1.jpg' },
    //         { name: 'Bonnie', image: '2.jpg' }
    //     ]);
    // }
}
