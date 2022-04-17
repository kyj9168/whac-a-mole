import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Time {
	value: number;
}

export const time = createSlice({
	name: 'time',
	initialState: {
		value: 60000,
	} as Time,
	reducers: {
		setTime(state, action: PayloadAction<number>) {
			state.value = action.payload;
			return state;
		},
	},
});
export const { setTime } = time.actions;
export default time.reducer;
