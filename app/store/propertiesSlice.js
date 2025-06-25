import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://realestate.learnock.com";

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/properties`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'apiKey': '1234'
        }
      });
      return response.data.data;
    } catch (error) {
      // Log detailed error information
      console.error('API Error:', {
        status: error.response?.status,
        data: error.response?.data,
        config: error.config
      });
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch properties');
    }
  }
);
export const updateProperty = createAsyncThunk(
  "properties/updateProperty",
  async (updatedProperty) => {
    const response = await axios.put(
      `${API_BASE_URL}/api/properties/${updatedProperty.id}`,
      updatedProperty
    );
    return response.data.data;
  }
);

const initialState = {
  properties: [],
  loading: false,
  error: null,
  filters: {
    searchQuery: "",
    minPrice: "",
    maxPrice: "",
    selectedTypes: [],
    selectedBedrooms: [],
    selectedFurniture: [],
    selectedPaymentPlans: [],
    sortBy: "default",
  }
};

const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.filters.searchQuery = action.payload;
    },
    setMinPrice: (state, action) => {
      state.filters.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.filters.maxPrice = action.payload;
    },
    // ... other filter reducers ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload.map(property => ({
          id: property.id,
          title: property.title,
          description: property.description,
          price: property.price,
          rent_amount: property.rent_amount,
          type: property.features || 'Apartment', // Default if features is empty
          bedrooms: property.beds || 1,
          bathrooms: property.bathrooms || 1,
          furnished: property.is_furnished || false,
          paymentPlan: property.lease_start ? "Leased" : "Available",
          location: property.location || 'Unknown',
          amenities: property.amenities ? property.amenities.split(',') : [],
          area: `${property.land_space || 0} sqft`,
          status: property.status || 'available',
          image: property.image || '/default-property.jpg'
        }));
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProperty.fulfilled, (state, action) => {
        const index = state.properties.findIndex(
          p => p.id === action.payload.id
        );
        if (index !== -1) {
          state.properties[index] = {
            ...state.properties[index],
            ...action.payload
          };
        }
      });
  }
});

export const { 
  setSearchQuery, 
  setMinPrice, 
  setMaxPrice 
  // ... other actions ...
} = propertySlice.actions;

export default propertySlice.reducer;