import { async, TestBed } from '@angular/core/testing';

import { FrontComponent } from './front.component';

describe('FrontComponent', () => {
    let component: FrontComponent;

    Given(async(() => {
        TestBed.configureTestingModule({
            providers: [FrontComponent]
        });
        component = TestBed.get(FrontComponent);
    }));

    describe('INIT', () => {
        Then(() => {
            expect(component).toBeTruthy();
        });
    });
});
