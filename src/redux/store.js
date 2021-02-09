import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { allReducer } from "./reducer/IndexReducer";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, allReducer);
export let Store = createStore(persistedReducer, applyMiddleware(thunk));
export let Persistor = persistStore(Store);
