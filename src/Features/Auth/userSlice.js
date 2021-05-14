import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        //call API to to register
        const { data } = await userApi.register(payload);
        //save data to local storage
        localStorage.setItem('access_token', data.jwt);
        localStorage.setItem('access_token', JSON.stringify(data.user));
        return data.user;
    }
)
export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
        //call API to to signin
        const { data } = await userApi.login(payload);
        //save data to local storage
        localStorage.setItem('access_token', data.jwt);
        localStorage.setItem('access_token', JSON.stringify(data.user));

        return data.user;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {},
    },
    reducers: {
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }
})
const { reducer } = userSlice;
export default reducer;