import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import watcherSaga from "../Sagas/Watchers";
import thunkMiddleware from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  main: require("./ApiRedux").reducer,
});

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware))
  );

  sagaMiddleware.run(watcherSaga);

  return { store };
}
