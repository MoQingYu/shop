import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";

function configStore() {
  const sagaMiddleware  = createSagaMiddleware();
  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configStore;