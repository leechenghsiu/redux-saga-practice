import { RECEIVE_DATA } from '../actions';

export default (state = {}, { type, data }) => {
  switch(type) {
    case RECEIVE_DATA:
      return data;
    default:
      return state;
  }
};
