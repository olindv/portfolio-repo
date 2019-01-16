const fs = require('fs');
const webdriverio = require('webdriverio');
const option = require('../wdio.conf');
const client = webdriverio.multiremote(option);

jest.setTimeout(30000);

beforeAll(()=>{
    return client.init().url('http://localhost:7777/pages')
});

test('Простой тест', () => {
    expect(true).toBe(true);
});