import { createSlice } from '@reduxjs/toolkit';
import { string } from 'yup';

export interface UserState {
	username: string;
	website: string;
	avatar_url: string;
}

const initialState: UserState = {
	username: '',
	website: '',
	avatar_url: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState: { value: { initialState } },
	reducers: {
		login: (state, action) => {
			state.value = action.payload;
		},
	},
});

export default userSlice.reducer;
