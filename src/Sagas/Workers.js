import { call, put } from "redux-saga/effects";
import ApiActions from "../Redux/ApiRedux";

export function* apiSaga(api) {
  const response = yield call(api.apiCall);
  if (response.ok) {
    yield put(ApiActions.apiSuccess(response.data));
  } else {
    yield put(ApiActions.apiFailure(response.data));
  }
}
