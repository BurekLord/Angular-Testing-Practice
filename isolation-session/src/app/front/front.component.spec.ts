import { FrontService } from './front.service';
import { async, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FrontComponent } from './front.component';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { Observable, of } from 'rxjs';

describe('FrontComponent', () => {
    let component: FrontComponent;
    let frontServiceSpy: Spy<FrontService>;
    let actualValue: any;

    Given(async(() => {
        TestBed.configureTestingModule({
            providers: [FrontComponent, { provide: FrontService, useValue: createSpyFromClass(FrontService) }]
        });
        component = TestBed.get(FrontComponent);
        frontServiceSpy = TestBed.get(FrontService);
    }));

    describe('INIT', () => {

        Given(() => {
            frontServiceSpy.getFeaturedLlamas.and.returnValue(of([
                { name: 'llama', img: '1.jpg' }
            ]));
        });

        When(fakeAsync(() => {
            component.ngOnInit();
            tick();
        }));
        Then(() => {
            expect(component).toBeTruthy();
            expect(component.llamas.length).toBeGreaterThan(0);
            expect(frontServiceSpy.getFeaturedLlamas).toHaveBeenCalled();
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
