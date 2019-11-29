import { Llama } from './Llama.model';
import { AnotherService } from './another.service';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { Spy, createSpyFromClass } from 'jasmine-auto-spies';
import { HttpClient } from '@angular/common/http';

describe('AnotherService', () => {
    let serviceUnderTest: AnotherService;
    let httpSpy: Spy<HttpClient>;
    let actualResult: any;
    let fakeLlamas: Llama[];

    Given(() => {
        TestBed.configureTestingModule({
            providers: [AnotherService,
                {
                    provide: HttpClient, useValue: createSpyFromClass(HttpClient)
                }
            ]
        });
        serviceUnderTest = TestBed.get(AnotherService);
        httpSpy = TestBed.get(HttpClient);

        actualResult = undefined;
        fakeLlamas = undefined;
    });

    describe('METHOD: getLlamasFromServer', () => {

        When(() => {
            serviceUnderTest.getLlamasFromServer().subscribe(result => {
                actualResult = result;
            });
        });

        describe('GIVEN a successful request THEN return the lamas', () => {
            Given(() => {
                fakeLlamas = [{ name: 'FAKE NAME', image: 'FAKE IMAGE' }];
                httpSpy.get.and.nextOneTimeWith(fakeLlamas);
            });

            Then(() => {
                expect(actualResult).toEqual(fakeLlamas);
            });
        });
    });
});
