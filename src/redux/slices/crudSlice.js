import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    tasks: [
        {
          title: 'Navbar Animasyonu',
          author: 'Furkan',
          assigned_to: 'Ali',
          end_date: '2024-04-12',
          id: 'b6f04e4c-fc73-4b36-ab27-ec6ae968b042',
        },
        {
          title: 'Header Düzenlemesi',
          author: 'Ayşe',
          assigned_to: 'Fatma',
          end_date: '2024-05-15',
          id: '29d3372f-7848-4aaf-8694-b6fab599fe1e',
        },
        {
          title: 'Sayfa Dizaynı',
          author: 'Fatma',
          assigned_to: 'Ali',
          end_date: '2024-07-13',
          id: 'd5568f07-9897-4fc4-8554-b120d0ee4678',
        },
      ],
};
const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      //task a id ekle
      action.payload.id = v4();

      //veriyi diizye ekle

      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      //silinecek elemanın sırasını bul
      const index = state.tasks.findIndex((i) => i.id === action.payload);
//tasks dizisini döner,tıklanan elemanı bulduğunda diziyi dönmeyi bırakır,indexini verir.
      state.tasks.splice(index,1);
    },
    editTask:(state,action)=>{
        //elemanın id si action nın payload ı ile gelen elemanın id sine bakar,
        //bulduğunda indexi belirler
        const index = state.tasks.findIndex((i)=> i.id === action.payload.id);
        //elemaı güncelle
        state.tasks.splice(index,1,action.payload);
    }
  },
});

export default crudSlice.reducer;

export const { addTask, deleteTask,editTask } = crudSlice.actions;

console.log(crudSlice, "crud");
