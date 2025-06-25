import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchApartmentDetails = createAsyncThunk(
  "apartmentDetails/fetchApartmentDetails",
  async (apartmentId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/properties/${apartmentId}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  apartment: null,
  loading: false,
  error: null,
};

const apartmentDetailsSlice = createSlice({
  name: "apartmentDetails",
  initialState,
  reducers: {
    clearApartmentDetails: (state) => {
      state.apartment = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApartmentDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApartmentDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.apartment = action.payload;
      })
      .addCase(fetchApartmentDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearApartmentDetails } = apartmentDetailsSlice.actions;
export default apartmentDetailsSlice.reducer;