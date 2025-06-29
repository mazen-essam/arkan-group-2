import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Async thunk for fetching properties
export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/api/properties`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'apiKey': '1234'
        }
      });
    return response.data.data; // Access the 'data' array from the response
  }
);

// Async thunk for updating a property
export const updateProperty = createAsyncThunk(
  "properties/updateProperty",
  async (updatedProperty) => {
    const response = await axios.put(
      `${API_BASE_URL}/api/properties/${updatedProperty.id}`,
      updatedProperty
    );
    return response.data.data; // Return the updated property from the 'data' field
  }
);

const initialState = {
  properties: [],
  loading: false,
  error: null,
  searchQuery: "",
  minPrice: "",
  maxPrice: "",
  selectedTypes: [],
  selectedBedrooms: [],
  selectedFurniture: [],
  selectedPaymentPlans: [],
  sortBy: "default",
};

const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    toggleTypeFilter: (state, action) => {
      if (state.selectedTypes.includes(action.payload)) {
        state.selectedTypes = state.selectedTypes.filter(
          (type) => type !== action.payload
        );
      } else {
        state.selectedTypes.push(action.payload);
      }
    },
    toggleBedroomFilter: (state, action) => {
      if (state.selectedBedrooms.includes(action.payload)) {
        state.selectedBedrooms = state.selectedBedrooms.filter(
          (bedroom) => bedroom !== action.payload
        );
      } else {
        state.selectedBedrooms.push(action.payload);
      }
    },
    toggleFurnitureFilter: (state, action) => {
      if (state.selectedFurniture.includes(action.payload)) {
        state.selectedFurniture = state.selectedFurniture.filter(
          (furnished) => furnished !== action.payload
        );
      } else {
        state.selectedFurniture.push(action.payload);
      }
    },
    togglePaymentPlanFilter: (state, action) => {
      if (state.selectedPaymentPlans.includes(action.payload)) {
        state.selectedPaymentPlans = state.selectedPaymentPlans.filter(
          (plan) => plan !== action.payload
        );
      } else {
        state.selectedPaymentPlans.push(action.payload);
      }
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch properties cases
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
          type: property.features, // Assuming features contains the property type
          bedrooms: property.beds,
          bathrooms: property.bathrooms,
          furnished: property.is_furnished,
          paymentPlan: property.lease_start ? "Leased" : "Available", // Simplified
          location: property.location,
          amenities: property.amenities.split(','), // Convert string to array
          area: `${property.land_space} sqft`,
          status: property.status,
          image: property.image
        }));
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      // Update property cases
      .addCase(updateProperty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProperty.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProperty = action.payload;
        const index = state.properties.findIndex(
          (property) => property.id === updatedProperty.id
        );
        if (index !== -1) {
          state.properties[index] = {
            id: updatedProperty.id,
            title: updatedProperty.title,
            description: updatedProperty.description,
            price: updatedProperty.price,
            rent_amount: updatedProperty.rent_amount,
            type: updatedProperty.features,
            bedrooms: updatedProperty.beds,
            bathrooms: updatedProperty.bathrooms,
            furnished: updatedProperty.is_furnished,
            paymentPlan: updatedProperty.lease_start ? "Leased" : "Available",
            location: updatedProperty.location,
            amenities: updatedProperty.amenities.split(','),
            area: `${updatedProperty.land_space} sqft`,
            status: updatedProperty.status,
            image: updatedProperty.image
          };
        }
      })
      .addCase(updateProperty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setSearchQuery,
  setMinPrice,
  setMaxPrice,
  toggleTypeFilter,
  toggleBedroomFilter,
  toggleFurnitureFilter,
  togglePaymentPlanFilter,
  setSortBy,
} = propertySlice.actions;

export default propertySlice.reducer;