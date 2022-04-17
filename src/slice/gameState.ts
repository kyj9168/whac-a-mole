import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
	playing: boolean;
	finished: boolean;
	stop: boolean;
}

export const gameState = createSlice({
	name: 'gameState',
	initialState: {
		playing: false,
		finished: false,
		stop: false,
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

		setStop(state) {
			state.stop = !state.stop;
			return state;
		},
	},
});

export const { setPlaying, setFinished, setStop } = gameState.actions;
export default gameState.reducer;
