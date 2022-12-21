import { IWeather } from './weatherSlice';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const weatherRequestAsync = createAsyncThunk<IWeather, string>(
  'weather/fetch',
  async (city) => {
    const res: Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e647802b6e860dae0c2bd19a8d40df27&lang=ru&units=metric`)

    if (res.ok && res.status >= 200 && res.status < 300) {
      return res.json()
    } else {
      throw new Error(res.statusText)
    }
  }
)