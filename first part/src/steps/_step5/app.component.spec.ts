describe('METHOD: getWelcomingMessage', () => {

  function getWelcomingMessage(userName: string): string {
    return `Hello ${userName}`;
  }

  let actualValue, expectedValue;
  let fakeUserName: string;

  When(() => {
    actualValue = getWelcomingMessage(fakeUserName);
  });

  describe('user name is Bonnie', () => {

    Given(() => {
      fakeUserName = 'Bonnie';
    });

    Then(() => {
      expectedValue = 'Hello Bonnie';
      expect(actualValue).toEqual(expectedValue);
    });
  });

  describe('user name is Alyssa', () => {

    Given(() => {
      fakeUserName = 'Alyssa';
    });

    Then(() => {
      expectedValue = 'Hello Alyssa';
      expect(actualValue).toEqual(expectedValue);
    });
  });
});