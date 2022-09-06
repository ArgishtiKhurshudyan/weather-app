import {all} from 'redux-saga/effects';
import weather from '../redux/weather/saga';

export default function* rootSaga() {
  yield all([
    weather()
  ])
};