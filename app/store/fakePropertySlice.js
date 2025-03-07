import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apartments: [
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      price: 1200,
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      furnished: true,
      paymentPlan: "Monthly",
      location: "Downtown, Cairo",
      rating: 4.5,
      reviews: 25,
      amenities: ["Swimming Pool", "Gym", "Parking"],
      description:
        "A modern and spacious apartment located in the heart of downtown, perfect for professionals.",
      area: "1200 sqft",
      downPayment: "20%",
      installment: "$800/month",
      annualInstallment: "$9600/year",
      expectedExit: "5 years",
      totalUnitPrice: "$240,000",
      status: "available",
    },
    {
      id: 2,
      title: "Cozy Studio Near the Park",
      price: 950,
      type: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      furnished: false,
      paymentPlan: "Yearly",
      location: "Zamalek, Cairo",
      rating: 4.0,
      reviews: 18,
      amenities: ["Parking", "Balcony"],
      description:
        "A cozy studio with a beautiful view of the park, ideal for singles or couples.",
      area: "800 sqft",
      downPayment: "15%",
      installment: "$600/month",
      annualInstallment: "$7200/year",
      expectedExit: "4 years",
      totalUnitPrice: "$180,000",
      status: "funded",
    },
    {
      id: 3,
      title: "Luxury Villa with Garden",
      price: 3500,
      type: "Villa",
      bedrooms: 4,
      bathrooms: 3,
      furnished: true,
      paymentPlan: "Monthly",
      location: "New Cairo",
      rating: 4.8,
      reviews: 32,
      amenities: ["Swimming Pool", "Garden", "Garage", "Security"],
      description:
        "A luxurious villa with a large garden and private swimming pool, perfect for families.",
      area: "3000 sqft",
      downPayment: "25%",
      installment: "$2000/month",
      annualInstallment: "$24,000/year",
      expectedExit: "10 years",
      totalUnitPrice: "$600,000",
      status: "exited",
    },
    {
      id: 4,
      title: "Budget Friendly Apartment",
      price: 700,
      type: "Apartment",
      bedrooms: 1,
      bathrooms: 1,
      furnished: false,
      paymentPlan: "Monthly",
      location: "Maadi, Cairo",
      rating: 3.8,
      reviews: 15,
      amenities: ["Parking"],
      description:
        "A budget-friendly apartment in a quiet neighborhood, suitable for students or young professionals.",
      area: "900 sqft",
      downPayment: "10%",
      installment: "$500/month",
      annualInstallment: "$6000/year",
      expectedExit: "3 years",
      totalUnitPrice: "$120,000",
      status: "available",
    },
    {
      id: 5,
      title: "Penthouse with City View",
      price: 2800,
      type: "Penthouse",
      bedrooms: 3,
      bathrooms: 2,
      furnished: true,
      paymentPlan: "Yearly",
      location: "Mohandessin, Cairo",
      rating: 4.6,
      reviews: 28,
      amenities: ["Terrace", "Gym", "Parking", "Concierge"],
      description:
        "A stunning penthouse with breathtaking city views, featuring a large terrace and premium amenities.",
      area: "2500 sqft",
      downPayment: "30%",
      installment: "$1500/month",
      annualInstallment: "$18,000/year",
      expectedExit: "7 years",
      totalUnitPrice: "$420,000",
      status: "funded",
    },
    {
      id: 6,
      title: "Rustic Cottage by the Nile",
      price: 1500,
      type: "Cottage",
      bedrooms: 2,
      bathrooms: 1,
      furnished: true,
      paymentPlan: "Monthly",
      location: "Giza, Cairo",
      rating: 4.2,
      reviews: 20,
      amenities: ["Garden", "River View"],
      description:
        "A charming rustic cottage located by the Nile, offering a peaceful and relaxing atmosphere.",
      area: "1500 sqft",
      downPayment: "20%",
      installment: "$1000/month",
      annualInstallment: "$12,000/year",
      expectedExit: "6 years",
      totalUnitPrice: "$300,000",
      status: "exited",
    },
    {
      id: 7,
      title: "Commercial Space Downtown",
      price: 2000,
      type: "Commercial",
      bedrooms: 0,
      bathrooms: 1,
      furnished: false,
      paymentPlan: "Monthly",
      location: "Downtown, Cairo",
      rating: 4.3,
      reviews: 22,
      amenities: ["High Speed Internet", "Security"],
      description:
        "A spacious commercial space in a prime location, suitable for offices or retail.",
      area: "5000 sqft",
      downPayment: "40%",
      installment: "$3000/month",
      annualInstallment: "$36,000/year",
      expectedExit: "8 years",
      totalUnitPrice: "$720,000",
      status: "available",
    },
    {
      id: 8,
      title: "Family Apartment with Balcony",
      price: 1100,
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      furnished: false,
      paymentPlan: "Monthly",
      location: "Heliopolis, Cairo",
      rating: 4.1,
      reviews: 19,
      amenities: ["Balcony", "Parking", "Playground"],
      description: "A comfortable family apartment with a balcony and access to a playground.",
      area: "1800 sqft",
      downPayment: "20%",
      installment: "$900/month",
      annualInstallment: "$10,800/year",
      expectedExit: "5 years",
      totalUnitPrice: "$270,000",
      status: "funded",
    },
  ],
  searchQuery: "",
  minPrice: "",
  maxPrice: "",
  selectedTypes: [],
  selectedBedrooms: [],
  selectedFurniture: [],
  selectedPaymentPlans: [],
  sortBy: "default",
};


const fakePropertySlice = createSlice({
  name: "apartments",
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
} = fakePropertySlice.actions;

export default fakePropertySlice.reducer;