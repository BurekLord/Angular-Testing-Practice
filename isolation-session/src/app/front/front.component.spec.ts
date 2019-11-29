import { FrontService } from './front.service';
import { async, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FrontComponent } from './front.component';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { Observable, of } from 'rxjs';
import { RouterAdapterService } from 'src/_services/router-adapter/router-adapter.service';

describe('FrontComponent', () => {
    let component: FrontComponent;
    let frontServiceSpy: Spy<FrontService>;
    let actualValue: any;
    let routerSpy: Spy<RouterAdapterService>;

    Given(async(() => {
        TestBed.configureTestingModule({
            providers:
                [FrontComponent,
                    { provide: FrontService, useValue: createSpyFromClass(FrontService) },
                    { provide: RouterAdapterService, useValue: createSpyFromClass(RouterAdapterService) }
                ],
        });
        component = TestBed.get(FrontComponent);
        frontServiceSpy = TestBed.get(FrontService);
        routerSpy = TestBed.get(RouterAdapterService);
    }));

    describe('INIT', () => {

        When(fakeAsync(() => {
            component.ngOnInit();
            tick();
        }));

        describe('GIVEN there are lamas THEN store result', () => {
            Given(() => {
                frontServiceSpy.getFeaturedLlamas.and.resolveWith([
                    { name: 'llama', image: '1.jpg' }
                ]);
                // frontServiceSpy.getFeaturedLlamas.and.nextWith([
                //     { name: 'llama', img: '1.jpg' }
                // ]);
            });

            Then(() => {
                expect(component.llamas.length).toBeGreaterThan(0);
                expect(frontServiceSpy.getFeaturedLlamas).toHaveBeenCalled();
            });
        });

        describe('GIVEN there is a problem fetching the lamas THEN show an error', () => {
            Given(() => {
                frontServiceSpy.getFeaturedLlamas.and.rejectWith('500');
            });
            // Given(() => {
            //     frontServiceSpy.getFeaturedLlamas.and.throwWith('500');
            // });

            Then(() => {
                expect(component.llamas).toBeFalsy();
                expect(component.showErrorMessage).toBeTruthy();
                expect(frontServiceSpy.getFeaturedLlamas).toHaveBeenCalled();
            });
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
                component.llamas = [{ name: 'fake', image: 'fake.jpg' }];
            });
            Then(() => {
                expect(actualValue).toEqual(true);
            });
        });
    });

    describe('METHOD: goToLlamaPage', () => {
        let fakeLlamaId: string;

        Given(() => {
            fakeLlamaId = 'FAKE ID';
        });
        When(() => {
            component.goToLlamaPage(fakeLlamaId);
        });

        Then(() => {
            expect(routerSpy.goToUrl).toHaveBeenCalledWith(`/llama/${fakeLlamaId}`);
        });
    });


});
