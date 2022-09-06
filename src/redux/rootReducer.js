import {combineReducers} from 'redux';
import weather from '../redux/weather/reducer';

const rootReducer = combineReducers({
  weather
});

export default rootReducer;