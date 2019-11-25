describe('Exercise', () => {

    function sayGoodbye(name?: string): string {
        if (!name) {
            return 'No Name!';
        }
        return 'Goodbye ' + name + '!';
    }

    it('The name should be "Bonny"', () => {
        expect(sayGoodbye('Bonny')).toEqual('Goodbye Bonny!');
    });

});
