
describe('METHOD: getWelcomingMessage', () => {
    function getWelcomingMessage(userName: string): string {
        return `Hello ${userName}`;
    }

    let actualValue;
    let expectedValue;

    beforeEach(() => {
        console.log('BEFORE PARENT');
    });

    it('should return hello Bonnie', () => {

        actualValue = getWelcomingMessage('Bonnie');
        expectedValue = 'Hello Bonnie';

        expect(actualValue).toEqual(expectedValue);

    });

    it('should return hello Alise', () => {

        actualValue = getWelcomingMessage('Alise');
        expectedValue = 'Hello Alise';

        expect(actualValue).toEqual(expectedValue);

    });

    describe('another sub use case', () => {

        beforeEach(() => {
            console.log('BEFORE NESTED');
        });

        it('should fail', () => {
            expect(false).toEqual(true);
        });
    });
});

