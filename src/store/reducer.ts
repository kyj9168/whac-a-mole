import { combineReducers } from '@reduxjs/toolkit';
import score from 'src/slice/score';
import gameInfo from 'src/slice/gameInfo';
import time from 'src/slice/time';
import gameState from 'src/slice/gameState';
import rank from 'src/slice/rank';

const reducer = combineReducers({
	score,
	gameInfo,
	time,
	gameState,
	rank,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
