import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export interface User {
	nickname: string;
	score: number;
}
export interface Rank {
	value: User[];
}

export const rank = createSlice({
	name: 'rank',
	initialState: {
		value: [],
	} as Rank,
	reducers: {
		setRank(state, action: PayloadAction<User>) {
			state.value.push(action.payload);
			state.value = state.value.sort((a, b) => b.score - a.score).slice(0, 10);

			return state;
		},
	},
});

export const { setRank } = rank.actions;
export default rank.reducer;
