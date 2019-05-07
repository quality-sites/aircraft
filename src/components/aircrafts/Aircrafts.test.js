import React from 'react';
import { shallow, configure } from 'enzyme';
import Aircrafts from './Aircrafts';
import Data from '../../__mocks__/aircraftsData.test.json';
import Adapter from 'enzyme-adapter-react-16';
import 'regenerator-runtime/runtime';

configure({ adapter: new Adapter() });

const setup = (props={}, state=null) => {
  const wrapper = shallow(<Aircrafts {...props} />);
  return wrapper;
}

it('renders correct data ensuring aircrafts class has been called successfully', () => {
  const state = {   
    "aircrafts": {"pagination":{"offset":0,"limit":25,"total":1},"data":[{"ident":"ABC","type":"A320","economySeats":186,"base":"EGKK"}]}
  }
  const wrapper = setup({}, state);
  const identState = wrapper.instance().state.aircrafts.data[0].ident;
  const dataIdentState = Data.data.aircrafts.data[0].ident;
  const baseState = wrapper.instance().state.aircrafts.data[0].base;
  const dataBaseState = Data.data.aircrafts.data[0].base;
  expect(identState).toBe(dataIdentState);
  expect(baseState).toBe(dataBaseState);
});