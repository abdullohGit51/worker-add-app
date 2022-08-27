import { configureStore } from "@reduxjs/toolkit";
import workersReduser from "./workerSlice";
export const store = configureStore({
  reducer: {
    workers: workersReduser,
  },
});
