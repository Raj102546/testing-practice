const lowerToCapatalized = require('./capatalized');

test('Lower to Capatilized', ()=>{
    expect(lowerToCapatalized('sdbcsbcscbsbcsk')). toBe('Sdbcsbcscbsbcsk');
});