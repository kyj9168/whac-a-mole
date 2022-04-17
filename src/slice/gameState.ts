import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
	moles: number[];
	row: number;
	column: number;
	moleValue: number;
	playing: boolean;
	finished: boolean;
	reset: number;
}

export const gameState = createSlice({
	name: 'gameState',
	initialState: {
		playing: false,
		finished: false,
	} as GameState,
	reducers: {
		setPlaying(state, action: PayloadAction<boolean>) {
			state.playing = action.payload;
			return state;
		},
		setFinished(state, action: PayloadAction<boolean>) {
			state.finished = action.payload;
			return state;
		},
	},
});

export const { setPlaying, setFinished } = gameState.actions;
export default gameState.reducer;
