import { FrontService } from './front.service';
import { Llama } from './Llama.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-front',
    templateUrl: './front.component.html',
    styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

    llamas: Llama[];

    constructor(private frontService: FrontService) { }

    ngOnInit(): void {
        this.frontService.getFeaturedLlamas().subscribe(result => {
            this.llamas = result;
        });
    }

    isListVisible(): boolean {
        return (this.llamas.length > 0);
    }
}
