import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beerInfo: [],
};

const beerSlice = createSlice({
  name: "beerInfo",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.beerInfo = action.payload;
    },
    searchData: (state, action) => {
      state.beerInfo.map((item) => {
        item.isHidden = !item?.name.toLowerCase().includes(action.payload);
      });
    },
  },
});

export const { getData, searchData } = beerSlice.actions;
export default beerSlice.reducer;
