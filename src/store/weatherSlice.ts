import { weatherRequestAsync } from './weatherAction';
import { createSlice } from "@reduxjs/toolkit";

export interface IWeather {
  isLoading: boolean;
  error: string;
  data: any;
}

const initialState: IWeather = {
  isLoading: false,
  error: '',
  data: {}
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(weatherRequestAsync.pending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.data = {};
      })
      .addCase(weatherRequestAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error ?? '';
        state.data = action.payload
      })
      .addCase(weatherRequestAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Ошибка';
        state.data = {}
      })
  }
})

export default weatherSlice.reducer