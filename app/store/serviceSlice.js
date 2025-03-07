import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const api_URL = "";
export const fetchData = createAsyncThunk("api/fetchData", async () => {
    const response = await axios.get(`${api_URL}/services`);
    return response.data;
});
const initialState = {
    data: null,
    loading: false,
    error: null,
};
export const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default serviceSlice.reducer;