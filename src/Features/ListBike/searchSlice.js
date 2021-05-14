import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: { searchByName: '' },
    reducers: {
        search(state, action) {
            return action.payload;
        }
    }
})
const { actions, reducer } = searchSlice;
export const { search } = actions;
export default reducer;