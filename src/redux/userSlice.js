import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	email: "",
	photo: "",
};

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
        //when user logs in, remember these details
		setUserLoginDetails: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.photo = action.payload.photo;
		},
        //when user logs out, remove these details
		setSignOutState: (state) => {
			state.name = null;
			state.email = null;
			state.photo = null;
		},
	},
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;