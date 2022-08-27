import { createSlice } from "@reduxjs/toolkit";

const workerSlice = createSlice({
  name: "product",
  initialState: {
    workers: [],
  },
  reducers: {
    addWorker: (state, action) => {
      state.workers = [...state.workers, action.payload];
    },
    setEditWorker:(state,action)=>{
      state.workers=action.payload
    }
  },
});

export const { addWorker,setEditWorker} = workerSlice.actions;

export default   workerSlice.reducer