import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { REQUEST_DATA, receiveData } from '../actions';
import { fetchData } from '../api';

function* getData(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveData(data));
  } catch(err) {
    console.log(err);
  }
}

export default function* rootSaga() {
	yield takeLatest(REQUEST_DATA, getData);
}
