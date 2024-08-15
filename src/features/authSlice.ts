import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentUserProps } from "../types";

interface LoginActionProps {
  payload: {
    username: string;
    password: string;
  };
}

export const authSlice = createSlice({
  name: "authData",
  initialState: {},
  reducers: {
    login: (
      state,
      action
    ): { state: Object; action: PayloadAction<LoginActionProps> } => {
      const { token } = action.payload;

      localStorage.setItem("w2sToken", token);
      return action.payload;
    },
    currentUser: (
      state,
      action
    ): {
      state: Object;
      action: { paylod: PayloadAction<CurrentUserProps> };
    } => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, currentUser } = authSlice.actions;

export default authSlice.reducer;
