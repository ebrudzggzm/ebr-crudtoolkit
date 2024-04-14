import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: { isDarkMode: false },
  reducers: {
    changeMode: (state, action) => {
     state.isDarkMode = action.payload;
    },
  },
});

export default headerSlice.reducer;

//slice in oluşturduğu aksiyon fonksiyonlarını bileşenlerde kullanmak için export ederiz.
export const { changeMode } = headerSlice.actions;

console.log(headerSlice, "header");
