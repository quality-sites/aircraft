import React from 'react';
import { shallow, configure } from 'enzyme';
import Rotation from './Rotation';
import Data from '../../__mocks__/rotationData.test.json';
import Adapter from 'enzyme-adapter-react-16';
import 'regenerator-runtime/runtime';

configure({ adapter: new Adapter() });

const setup = (props={}, state=null) => {
  const wrapper = shallow(<Rotation {...props} />);
  return wrapper;
}

it('renders correct data ensuring rotation class has been called successfully', () => {
  const state = {   
    "rotation": {"data":{"id":"MAN1234","departuretime":27000,"arrivaltime":33300,"readable_departure":"07:30","readable_arrival":"09:15","origin":"LHBP","destination":"LFSB"}}
  };
  const wrapper = setup({}, state);
  const idState = wrapper.instance().state.rotation.data.id;
  const dataIDState = Data.data.rotation.data.id;
  const destinationState = wrapper.instance().state.rotation.data.destination;
  const dataDestinationState = Data.data.rotation.data.destination;
  expect(idState).toBe(dataIDState);
  expect(destinationState).toBe(dataDestinationState);
});