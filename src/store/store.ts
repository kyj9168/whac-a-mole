import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import reducer, { RootState } from './reducer';
import logger from 'redux-logger';

let middleware = [];
if (process.env.NODE_ENV === 'development') {
	middleware = [...getDefaultMiddleware(), logger];
} else {
	middleware = [...getDefaultMiddleware()];
}

const store = configureStore({
	reducer,
	middleware,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
