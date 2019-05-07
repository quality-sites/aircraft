import data from './flightsData.test.json';

const get = url => {
  return Promise.resolve(data);
};

exports.get = get;
