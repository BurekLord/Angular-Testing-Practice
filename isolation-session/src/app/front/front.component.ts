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
        this.llamas = this.frontService.getFeaturedLlamas();
    }

    isListVisible(): boolean {
        return (this.llamas.length > 0);
    }
}
