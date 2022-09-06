import {createAction} from 'redux-actions';


export const getLocationRequest = createAction(
  'GET_LOCATION_REQUEST'
);

export const getLocationSuccess = createAction(
  'GET_LOCATION_SUCCESS'
);

export const getLocationFailure = createAction(
  'GET_LOCATION_FAILURE'
);

export const getDataRequest = createAction(
  'GET_DATA_REQUEST'
);

export const getDataSuccess = createAction(
  'GET_DATA_SUCCESS'
);

export const getDataFailure = createAction(
  'GET_DATA_FAILURE'
);