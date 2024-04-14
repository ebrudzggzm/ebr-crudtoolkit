import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import headerReducer from './slices/headerSlice';
import crudReducer from './slices/crudSlice';


 //configureStore-createStore farkları
 //1-thunk varsayılan olarak kurulu gelir
 //2-verilen reducerları otomatik birleştirir
 //3-devtools eklentisi kurulu gelir

 export default configureStore({
    reducer:{counterReducer,headerReducer,crudReducer}
 })