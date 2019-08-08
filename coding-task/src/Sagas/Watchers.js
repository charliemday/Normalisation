import { takeLatest, all } from "redux-saga/effects";
import API from "../Services/Api";

import { ApiTypes } from "../Redux/ApiRedux";

import { apiSaga } from "./Workers";

const api = API.create();

export default function* root() {
    yield all ([
        takeLatest(
            ApiTypes.API_REQUEST,
            apiSaga,
            api
        )
    ])
}