import { RouterAdapterService } from './../../_services/router-adapter/router-adapter.service';
import { FrontService } from './front.service';
import { Llama } from './Llama.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-front',
    templateUrl: './front.component.html',
    styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

    showErrorMessage = false;
    llamas: Llama[];

    constructor(private frontService: FrontService, private router: RouterAdapterService) { }

    ngOnInit() {
        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', '/llamas');
        // xhr.send();

        // this.frontService.getFeaturedLlamas().subscribe(result => {
        //     this.llamas = result;
        // }, err => {
        //     this.showErrorMessage = true;
        // });

        return this.frontService.getFeaturedLlamas().then(result => {
            this.llamas = result;
        }, err => {
            this.showErrorMessage = true;
        });
    }

    goToLlamaPage(llamaId: string) {
        this.router.goToUrl(`/llama/${llamaId}`);
    }

    isListVisible(): boolean {
        return (this.llamas && this.llamas.length > 0);
    }
}
