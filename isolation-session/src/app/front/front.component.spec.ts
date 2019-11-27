import { FrontService } from './front.service';
import { async, TestBed } from '@angular/core/testing';

import { FrontComponent } from './front.component';

describe('FrontComponent', () => {
    let component: FrontComponent;
    let actualValue: any;

    Given(async(() => {
        TestBed.configureTestingModule({
            providers: [FrontComponent, FrontService]
        });
        component = TestBed.get(FrontComponent);
    }));

    describe('INIT', () => {
        When(() => {
            component.ngOnInit();
        });
        Then(() => {
            expect(component).toBeTruthy();
            expect(component.llamas.length).toBeGreaterThan(0);
        });
    });

    describe('METHOD: isListVisible', () => {
        When(() => {
            actualValue = component.isListVisible();
        });

        describe('GIVEN: There is no lamas. THEN: return false', () => {
            Given(() => { component.llamas = []; });
            Then(() => {
                expect(actualValue).toEqual(false);
            });
        });
        describe('GIVEN: There are some lamas. THEN: return true', () => {
            Given(() => {
                component.llamas = [{ name: 'fake', img: 'fake.jpg' }];
            });
            Then(() => {
                expect(actualValue).toEqual(true);
            });
        });
    });
});
