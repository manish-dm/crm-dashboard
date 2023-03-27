import { createSlice } from "@reduxjs/toolkit";
import { getGlobalState } from "../utils/getGlobal";
import { menuList } from "../utils/sidebarMenuList";

const initialState = {
  ...getGlobalState(),
  menuList,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserItem: (state, { payload }) => {
      Object.assign(state, payload);
    },
  },
});

export const { setUserItem } = userSlice.actions;

export default userSlice.reducer;
