
const httpMocks = require('node-mocks-http');
const _hello = require('../controller/hello.controller').hello
// const _lottery = require('../controller/lottery.controller').winner

describe('test hello function', () => {
  test('input Toey equal “Hello,Toey!”', () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      url: 'http://localhost:3000/question1/hello',
      body: { name: 'Toey' }
    });
    const res = httpMocks.createResponse();
    _hello(req, res, (err) => {
      expect(err).toBeFalsy();
    })

    console.log(res._getData())
    expect(res._getData()).toBe("“Hello,Toey!”");


  });
});

// describe('test lottery function', () => {
//   test('input 108888 equal two last 88 ', () => {
//     const req = httpMocks.createRequest({
//       method: 'POST',
//       url: 'http://localhost:3000/question3/lottery',
//       body: { win: '108888' }
//     });
//     const res = httpMocks.createResponse();
//     _lottery(req, res, (err) => {
//       expect(err).toBeFalsy();
//     })

//     console.log(res._getData())
//     expect(res._getData()).toEqual(expect.arrayContaining(["000088","000188","000288","586588"]));


//   });
// });
