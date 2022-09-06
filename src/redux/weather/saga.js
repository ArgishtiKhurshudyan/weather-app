import {call, put, takeLatest} from 'redux-saga/effects';

import axios from 'axios';
import {
  getLocationRequest,
  getLocationSuccess,
  getLocationFailure,
  getDataRequest,
  getDataSuccess,
  getDataFailure
} from "./actions";

function* getLocation({payload}) {
  try {
    const response = yield call(() => axios.get(` https://api.openweathermap.org/data/2.5/weather?lat=35&lon=135&q=${payload.locationInfo}&appid=80b086b030a9c176bfdfbb17ba667927`));
    if (response?.status === 200) {

      yield put(getLocationSuccess(response.data));
    }
    console.log(response)
  } catch (e) {
    if (e?.response?.data) {
      yield put(getLocationFailure(e?.response?.data?.message));
    }
  }
}

function* getData({payload}) {
  try {
    const response = yield call(() => axios.get(`  https://api.openweathermap.org/data/2.5/forecast?&q=${payload.name}&appid=80b086b030a9c176bfdfbb17ba667927`));
    if (response?.status === 200) {
      yield put(getDataSuccess(response?.data.list));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getDataFailure(e?.response?.data?.message));
    }
  }
}

export default function* () {
  yield takeLatest(getLocationRequest, getLocation);
  yield takeLatest(getDataRequest, getData)
}
