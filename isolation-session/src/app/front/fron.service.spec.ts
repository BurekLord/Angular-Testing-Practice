import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { Llama } from './Llama.model';
import { FrontService } from './front.service';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { AnotherService } from './another.service';
describe('FrontService', () => {

    let serviceUnderTest: FrontService;
    let anotherServiceSpy: Spy<AnotherService>;
    let actualResult: any;
    let fakeResult: Llama[];

    Given(() => {
        TestBed.configureTestingModule({
            providers: [FrontService, { provide: AnotherService, useValue: createSpyFromClass(AnotherService) }]
        });

        serviceUnderTest = TestBed.get(FrontService);
        anotherServiceSpy = TestBed.get(AnotherService);
    });

    describe('METHOD: getFeaturedLlamas', () => {

        Given(() => {
            fakeResult = [{ name: 'Llama', image: '1.jpg' }];
            anotherServiceSpy.getLlamasFromServer.and.nextOneTimeWith(fakeResult);
        });

        When(fakeAsync(() => {
            serviceUnderTest.getFeaturedLlamas().then(result => actualResult = result);
        }));

        Then(() => {
            expect(actualResult).toEqual(fakeResult);
        });
    });
});