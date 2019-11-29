import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouterAdapterService {
    // We write ADAPTERs to wrap third-party services so that if the service changes in the future
    // we only need to change the implementation in one place

    // ADAPTERs are only to be tested in an INTEGRATION test. unit test is useless
    constructor(private router: Router) { }

    goToUrl(url: string) {
        this.router.navigateByUrl(url);
    }
}
