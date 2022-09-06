import {handleActions} from 'redux-actions';

import {
  getLocationRequest,
  getLocationSuccess,
  getLocationFailure,
  getDataRequest,
  getDataSuccess,
  getDataFailure
} from "./actions";

const initialState = {
  isGettingLocation: false,
  isGotLocationSuccess: false,
  isGotLocationFailure: false,
  locationData: {},
  isGettingData: false,
  isDataSuccess: false,
  isDataFailure: false,
  data: [],
  errorMessage: '',
};

const reducer = handleActions(
  {
    [getLocationRequest]: (state) => ({
      ...state,
      isGettingLocation: true,
      isGotLocationSuccess: false,
      isGotLocationFailure: false,
    }),
    [getLocationSuccess]: (state, {payload}) => ({
      ...state,
      isGettingLocation: false,
      isGotLocationSuccess: true,
      locationData: payload
    }),
    [getLocationFailure]: (state, {payload}) => ({
      ...state,
      isGettingLocation: false,
      isGotLocationFailure: true,
      errorMessage: payload
    }),
    [getDataRequest]: (state) => ({
      ...state,
      isGettingData: true,
      isDataSuccess: false,
      isDataFailure: false,

    }),
    [getDataSuccess]: (state, {payload}) => ({
      ...state,
      isGettingData: false,
      isDataSuccess: true,
      data: payload,

    }),
    [getDataFailure]: (state, {payload}) => ({
      ...state,
      isGettingData: false,
      isDataFailure: true,
      errorMessage: payload

    }),
  },
  initialState
);

export default reducer;