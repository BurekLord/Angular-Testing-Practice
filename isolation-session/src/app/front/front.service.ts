import { Llama } from './Llama.model';
import { Injectable } from '@angular/core';

@Injectable()
export class FrontService {
    getFeaturedLlamas(): Llama[] {
        return [
            { name: 'Richard', img: '1.jpg' },
            { name: 'Bonnie', img: '2.jpg' }
        ];
    }
}
