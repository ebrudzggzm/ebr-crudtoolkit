/*
 * Hem reducer'ı
 * Hem reducer'ın aksiyonlarını
 * createSlice methodu ile tek seferde tanımlıycağız

 ? slice oluşturma
 * import {createSlice} from "@reduxjs/toolkit"
 - - name: slice ismi > string
 - - initialState: başlangıç state'i
 - - reducers: aksiyonların görevini tanımladığımız fonksiyonları ifade eder
*/
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, isDarkTheme: true },
  // state in nasıl değişeceğini karar veren fonksiyonları tanımlarız,
  // her aksiyon için bir fonksiyon oluştururuz
  reducers: {
    increase: (state, action) => {
      state.count++;
      state.isDarkTheme = false;
    },
    decrease: (state, action) => {
      state.count--;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    toogleTheme:(state,action) => {
      state.isDarkTheme = action.payload;
    }
  },
});

// slice ın oluşturduğu reducer fonsiyonunu store a tanıtmak için export ederiz.
// switch case yapısındaki metodu export ediyoruz, 19..satırdaki reducers değil,reducer  s takısı yok.
export default counterSlice.reducer;

//slice in oluşturduğu aksiyon fonksiyonlarını bileşenlerde kullanmak için export ederiz.
export const { increase, decrease, setCount,toogleTheme } = counterSlice.actions;

console.log(counterSlice);
