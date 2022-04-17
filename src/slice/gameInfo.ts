import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateMoles } from 'src/utils/util';
export interface GameInfo {
	moles: number[];
	row: number;
	column: number;
	moleValue: number;
	reset: number;
}

export const gameInfo = createSlice({
	name: 'gameInfo',
	initialState: {
		moles: [],
		row: 2,
		column: 2,
		moleValue: 1,
		reset: 2000,
		stop: false,
	} as GameInfo,
	reducers: {
		setRow(state, action: PayloadAction<number>) {
			state.row = action.payload;
			return state;
		},
		setColumn(state, action: PayloadAction<number>) {
			state.column = action.payload;
			return state;
		},
		setMoleValue(state, action: PayloadAction<number>) {
			state.moleValue = action.payload;
			return state;
		},

		setMoles(state) {
			function loop() {
				const moles = generateMoles(state.row, state.column);
				if (state.moles != moles) {
					state.moles = moles;
					return state;
				} else {
					loop();
				}
			}
			loop();
		},
		setReset(state, action: PayloadAction<number>) {
			state.reset = action.payload;
			return state;
		}
	},
});
export const { setRow, setColumn,setMoleValue, setMoles, setReset } = gameInfo.actions;
export default gameInfo.reducer;
