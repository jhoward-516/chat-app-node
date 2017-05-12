let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');


describe('generate message', () => {
    it('should generate the correct message object', () => {
        let from = 'test';
        let text = 'test text';
        let message = generateMessage(from, text);
        
        expect(message).toInclude({from, text});
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'admin';
        let latitude = 12;
        let longitude = -15;
        let url = 'https://www.google.com/maps?q=12,-15';
        let message = generateLocationMessage(from, latitude, longitude);

        expect(message).toInclude({from, url});
        expect(message.createdAt).toBeA('number');
    });
});