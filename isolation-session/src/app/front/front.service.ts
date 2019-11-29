import { AnotherService } from './another.service';
import { Llama } from './Llama.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FrontService {

    constructor(private anotherService: AnotherService) { }

    getFeaturedLlamas(): Promise<Llama[]> {
        return this.anotherService.getLlamasFromServer().toPromise();
    }

    // getFeaturedLlamas(): Promise<Llama[]> {
    //     return Promise.resolve([
    //         { name: 'Richard', img: '1.jpg' },
    //         { name: 'Bonnie', img: '2.jpg' }
    //     ]);
    // }

    // getFeaturedLlamas(): Observable<Llama[]> {
    //     return Observable.create([
    //         { name: 'Richard', img: '1.jpg' },
    //         { name: 'Bonnie', img: '2.jpg' }
    //     ]);
    // }
}
