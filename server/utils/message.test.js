let expect = require('expect');

let {generateMessage} = require('./message');


describe('generate message', () => {
    it('should generate the correct message object', () => {
        let from = 'test';
        let text = 'test text';
        let message = generateMessage(from, text);
        
        expect(message).toInclude({from, text});
        expect(message.from).toBe('test');
        expect(message.text).toBe('test text');
        expect(message.createdAt).toBeA('number');
    });
});