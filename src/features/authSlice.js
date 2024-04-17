import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const LoginUser = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:8080/login", {
      email: user.email,
      password: user.password,
    });
    return response.data;
  } catch (error) {
    const message = error.response.data.msg;
    return thunkAPI.rejectWithValue({ message });
  }
});

export const RegisterUser = createAsyncThunk("user/register", async (user, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:8080/register", {
      username: user.username,
      email: user.email,
      password: user.password,
      confPassword: user.confPassword,
    });
    return response.data;
  } catch (error) {
    const message = error.response.data.msg;
    return thunkAPI.rejectWithValue({ message });
  }
});
export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:8080/me");
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue({ message });
    }
  }
});

export const logOut = createAsyncThunk("user/logout", async () => {
  await axios.delete("http://localhost:8080/logout");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    });

    // Register User
    builder.addCase(RegisterUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(RegisterUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    });

    // Get User Login
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
