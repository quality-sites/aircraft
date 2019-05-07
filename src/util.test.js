const { getData } = require('./util');

test('should get correct data for first result', done => {
  getData().then(data => {
    const title = data.data.flights.data[0].id;
    expect(title).toEqual('ARSENAL001');
    done();
  });
});
