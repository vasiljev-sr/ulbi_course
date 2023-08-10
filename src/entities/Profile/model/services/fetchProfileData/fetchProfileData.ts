import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileData } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<
  ProfileData,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get('/profile');

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('Login error');
  }
});
