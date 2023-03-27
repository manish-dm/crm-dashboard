import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuList: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
