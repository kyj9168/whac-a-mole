import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Score {
	value: number;
}

export const score = createSlice({
	name: 'score',
	initialState: {
		value: 0,
	} as Score,
	reducers: {
		setScore(state, action: PayloadAction<number>) {
			state.value = action.payload;
			return state;
		},
		plusScore(state, action: PayloadAction<number>) {
			state.value += action.payload;
			return state;
		},
	},
});

export const { setScore, plusScore } = score.actions;
export default score.reducer;
