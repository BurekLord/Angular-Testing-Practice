import { Llama } from './Llama.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FrontService {
    getFeaturedLlamas(): Observable<Llama[]> {
        return Observable.create([
            { name: 'Richard', img: '1.jpg' },
            { name: 'Bonnie', img: '2.jpg' }
        ]);
    }
}
